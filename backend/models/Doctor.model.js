import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  qualification: {
    typr: String,
  },
  experience: {
    type: Number,
  },
  fees: {
    type: Number,
  },
  availableDays: {
    type: [String],
  },
  availableTime: {
    start: String,
    end: String,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
