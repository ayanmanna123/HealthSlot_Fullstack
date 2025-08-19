import Doctor from "../models/Doctor.model.js";
import User from "../models/User.model.js";

export const createDoctor = async (req, res) => {
  try {
    const {
      specialization,
      qualification,
      experience,
      fees,
      availableDays,
      availableTime,
    } = req.body;
    if (
      !specialization ||
      !qualification ||
      !experience ||
      !fees ||
      !availableDays ||
      !availableTime
    ) {
      return res.status(400).json({
        message: "All field is requeres",
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
    const findUser = await Doctor.findOne({ userId: user._id });
    if (findUser) {
      return res.status(400).json({
        message: "user already exict",
        success: false,
      });
    }
    if (user.role !== "doctor") {
      return res.status(400).json({
        message: "you are not a doctor",
        success: false,
      });
    }
    const newDoctor = {
      userId: user._id,
      specialization: specialization,
      qualification: qualification,
      experience: experience,
      fees: fees,
      availableDays: availableDays,
      availableTime: availableTime,
    };
    const doctor = await Doctor.create(newDoctor);
    return res.status(200).json({
      message: "doctor create success fully",
      success: true,
      doctor,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const AllDoctor = await Doctor.find()
      .sort({ createdAt: -1 })
      .populate({ path: "userId", options: { sort: { createdAt: -1 } } });
    if (!AllDoctor) {
      return res.status(400).json({
        message: "DOctor not availble",
        success: false,
      });
    }
    return res.status(200).json({
      message: "success",
      AllDoctor,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const doctors = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await Doctor.findOne({ _id: doctorId })
      .sort({ createdAt: -1 })
      .populate({ path: "userId", options: { sort: { createdAt: -1 } } });
    if (!doctor) {
      return res.status(400).json({
        message: "doctor not found",
        succes: false,
      });
    }
    return res.status(200).json({
      doctor,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateByAdmin = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const auth0Id = req.id;
    const user = await User.findOne({ auth0Id });
    if (!user) {
      return res.status(404).json({
        message: "User not found in database",
        success: false,
      });
    }
    if (user.role !== "admin") {
      return res.status(400).json({
        message: "you not a admin",
        success: false,
      });
    }
    const doctor = await Doctor.findOne({ _id: doctorId });
    if (!doctor) {
      return res.status(400).json({
        message: "doctor not found",
        succes: false,
      });
    }
    doctor.isApproved = true;
    const updateDoctor = await doctor.save();
    return res.status(200).json({
      message: "doctor is Approved",
      updateDoctor,
      succes: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllDoctorByQuiry = async (req, res) => {
  try {
    const findElement = req.query.findElement || "" ;
    const findDOctor = await Doctor.find({ specialization: findElement }).sort({createdAt:-1}).populate({
      path:"userId"
    })
    return res.status(200).json({
      message: "doctor found ",
      findDOctor,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
