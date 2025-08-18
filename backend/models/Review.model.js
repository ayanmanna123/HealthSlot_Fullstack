import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    givenrating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Review = mongoose.model("Review", reviewSchema);
export default Review;
