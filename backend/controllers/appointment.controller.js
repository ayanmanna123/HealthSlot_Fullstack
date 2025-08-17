import Appointment from "../models/Appointment.model.js";
import User from "../models/User.model.js";

export const Appointmentcreat =async (req , res)=>{
     const {doctorId,date,time}= req.body;
    if(!doctorId|| !date || !time){
        return res.status(400).json({
            message:"all field are requred",
            success:false
        })
    }
    let user = await User.findOne({ auth0Id: req.oidc.user.sub });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    const data= {
        patientId:user._id,
         doctorId:doctorId,
         date:date,
         time:time,
    }
    const createData= await Appointment.create(data);
     return res.status(200).json({
        message: "apply success fully",
        createData,
        success: true,
      });
}