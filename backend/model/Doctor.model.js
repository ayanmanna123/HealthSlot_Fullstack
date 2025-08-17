import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  treatment: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  
  clinicTime: [
    {
      day: {
        type: String,
        enum: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],  
      },
      startTime: {
        type: String,  
        required: true,
      },
      endTime: {
        type: String, 
        required: true,
      },
    },
  ],
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

export default Doctor;
