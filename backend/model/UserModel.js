import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
      default: 0,
    },

    auth0Id: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      default: "No location found",
    },
    role: {
      type: String,
      enum: ["Patient", "Doctor"],
      default: "Patient",
    },
    phoneNumber: {
      type: Number,
      required: true,
      default: 34567,
    },

    profilePicture: {
      type: String,
    },

    // appliedJobs: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Job",
    //   },
    // ],

    // savedJobs: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Job",
    //   },
    // ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
