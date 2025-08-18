import Review from "../models/Review.model.js";
import User from "../models/User.model.js";
import Doctor from "../models/Doctor.model.js";

export const addReview = async (req, res) => {
  try {
    const { doctorId, givenrating, comment } = req.body;

    if (!doctorId || !givenrating) {
      return res.status(400).json({
        message: "Doctor ID and rating are required",
        success: false,
      });
    }

    const auth0Id = req.id;
    const user = await User.findOne({ auth0Id });

    if (!user) {
      return res.status(404).json({
        message: "User not found in database",
        success: false,
      });
    }

    const review = await Review.create({
      patientId: user._id,
      doctorId,
      givenrating,
      comment,
    });

    const reviews = await Review.find({ doctorId });
    let avgRating = givenrating;
    if (reviews.length > 0) {
      avgRating =
        reviews.reduce((acc, r) => acc + r.givenrating, 0) / reviews.length;
    }

    if (!isNaN(avgRating)) {
      await Doctor.findByIdAndUpdate(doctorId, { rating: avgRating });
    }

    return res.status(201).json({
      message: "Review submitted successfully",
      review,
      averageRating: avgRating,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
