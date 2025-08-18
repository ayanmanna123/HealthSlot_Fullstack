import Appointment from "../models/Appointment.model.js";
import User from "../models/User.model.js";

export const Appointmentcreat = async (req, res) => {
  const { doctorId, date, time } = req.body;
  if (!doctorId || !date || !time) {
    return res.status(400).json({
      message: "all field are requred",
      success: false,
    });
  }
  let user = await User.findOne({ auth0Id: req.oidc.user.sub });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
    });
  }
  const data = {
    patientId: user._id,
    doctorId: doctorId,
    date: date,
    time: time,
  };
  const createData = await Appointment.create(data);
  return res.status(200).json({
    message: "apply success fully",
    createData,
    success: true,
  });
};

export const patientappointments = async (req, res) => {
  try {
    let user = await User.findOne({ auth0Id: req.oidc.user.sub });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    const appointments = await Appointment.find({ patientId: user._id })
      .sort({ createdAt: -1 })
      .populate([
        { path: "patientId" },
        {
          path: "doctorId",
          populate: { path: "userId" }, // nested populate inside doctor
        },
      ]);

    if (!appointments) {
      return res.status(400).json({
        message: "user not find",
        success: false,
      });
    }
    return res.status(200).json({
      message: "find success fully",
      appointments,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const doctorAppointments = async (req, res) => {
  try {
    const doctorId = req.params.id;
    if (!doctorId) {
      return res.ststus(400).json({
        message: "doctor is not find",
        success: false,
      });
    }
    const Appointments = await Appointment.find({ doctorId: doctorId })
      .sort({ createdAt: -1 })
      .populate({
        path: "patientId",
      });
    if (!Appointments) {
      return res.status(400).json({
        message: "Appointments not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Appointments get successfully",
      Appointments,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const appointmentsStatus = async (req, res) => {
  try {
    const appointmentID = req.params.id;
    const { status } = req.body;
    if (!appointmentID) {
      return res.status(404).json({
        message: " appoinement not found",
        success: true,
      });
    }

    const appointment = await Appointment.findOne({ _id: appointmentID });
    appointment.status = status;
    const newAppointment = await appointment.save();
    return res.status(200).json({
      message: "appinment update successfully",
      newAppointment,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteappointment = async (req, res) => {
  try {
    const appointmentID = req.params.id;
    if (!appointmentID) {
      return res.status(404).json({
        message: " appoinement not found",
        success: true,
      });
    }
    const appointmentfirst = await Appointment.findOne({ _id: appointmentID });
    if (!appointmentfirst) {
      return res.status(200).json({
        message: "appoinment not found",
        success: true,
      });
    }
    await Appointment.findByIdAndDelete({ _id: appointmentID });
    const appointment = await Appointment.findOne({ _id: appointmentID });
    if (!appointment) {
      return res.status(200).json({
        message: "appoinment calceed successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
