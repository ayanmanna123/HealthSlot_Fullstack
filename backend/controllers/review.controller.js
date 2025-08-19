import Review from "../models/Review.model.js";
import User from "../models/User.model.js";
import Doctor from "../models/Doctor.model.js";
import Appointment from "../models/Appointment.model.js";

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

    const already = await Review.findOne({
      doctorId,
      patientId: user._id,
    });

    if (already) {
      return res.status(400).json({
        message: "You have already given a rating to this doctor",
        success: false,
      });
    }

    const reatingAppoinment = await Appointment.findOne({
      doctorId,
      patientId: user._id,
    });

    if (reatingAppoinment) {
      reatingAppoinment.rating = givenrating;
      const savedAppointment = await reatingAppoinment.save();
      console.log("Updated appointment rating:", savedAppointment);
    }
    const review = await Review.create({
      patientId: user._id,
      doctorId,
      givenrating,
      comment,
    });

    const reviews = await Review.find({ doctorId });
    const avgRating =
      reviews.reduce((acc, r) => acc + r.givenrating, 0) / reviews.length;

    await Doctor.findByIdAndUpdate(doctorId, { rating: avgRating });

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
