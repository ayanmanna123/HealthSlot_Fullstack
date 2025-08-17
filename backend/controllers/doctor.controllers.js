import Doctor from "../model/Doctor.model.js";
import User from "../model/UserModel.js";

// ✅ Create a new doctor with timetable
export const createDoctor = async (req, res) => {
  try {
    const {
      treatment,
      degree,
      experience,
      description,
     
      clinicTime,
    } = req.body;

    // basic validation
    if (!treatment || !degree || !experience ) {
      return res.status(400).json({
        message: "Treatment, degree, experience, and details are required",
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

    const doctor = new Doctor({
      treatment,
      degree,
      experience,
      description,
      details:user,
      clinicTime, 
    });

    const newdoctor = await Doctor.create(doctor);

    res.status(201).json({
      message: "Doctor profile created successfully",
      success: true,
      newdoctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error while creating doctor profile",
      success: false,
      error: error.message,
    });
  }
};
