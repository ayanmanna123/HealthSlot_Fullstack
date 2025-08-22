import express from "express";
import { auth } from "express-openid-connect";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToMongo from "./utils/db.js";

import asyncHandler from "express-async-handler";
import User from "./models/User.model.js";
import router from "./routes/auth.route.js";
import Doctor from "./routes/doctor.route.js";
import Appointment from "./routes/appointment.route.js";
import review from "./routes/review.route.js";

dotenv.config();

const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://health-slot-fullstack-hgph.vercel.app",
    "https://health-slot-fullstack.vercel.app",
  ],
  credentials: true,
};
app.use(
  cors({
    origin: true, // reflect request origin
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Auth after cors
app.use(auth(config));

const ensureUserInDB = asyncHandler(async (user) => {
  try {
    const existingUser = await User.findOne({ auth0Id: user.sub });

    if (!existingUser) {
      const newUser = new User({
        auth0Id: user.sub,
        email: user.email,
        name: user.name,
        profilePicture: user.picture,
      });
      await newUser.save();
      console.log("User added to db", user);
    } else {
      console.log("User already exists in db", existingUser);
    }
  } catch (error) {
    console.log("Error checking or adding user to db", error.message);
  }
});

app.get("/", async (req, res) => {
  if (req.oidc.isAuthenticated()) {
    await ensureUserInDB(req.oidc.user);
    return res.redirect(process.env.CLIENT_URL);
  } else {
    return res.redirect(process.env.CLIENT_URL);
  }
});

app.use("/api/v1/user", router);
app.use("/api/v1/Doctor", Doctor);
app.use("/api/v1/Appointment", Appointment);
app.use("/api/v1/review", review);

const server = async () => {
  try {
    await connectToMongo();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Server error", error.message);
    process.exit(1);
  }
};

server();
