import express from "express";

import pkg from "express-openid-connect";
import { updateprofilr } from "../controllers/user.controllers.js";
const { requiresAuth } = pkg;
const userRoute = express.Router();
userRoute.route("/updateProfile").put(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
   updateprofilr
);

// userRoute.route("/getalljob").get(isAuthenticated, getAlljobs);

// userRoute.route("/getadminjob").get(isAuthenticated, getadminjob);

// userRoute.route("/get/:id").get(isAuthenticated, getjobById);
// userRoute.route("/gealljobcount").get(getallgobcount);

export default userRoute;
