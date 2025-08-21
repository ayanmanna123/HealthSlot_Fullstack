import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setpatentappoinment } from "../Redux/appoinmentSlice";

const useGetAppoinment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    const fatchappoinment = async () => {
      try {
        const res = await axios.get(
          "https://health-slot-fullstack.vercel.app/api/v1/Appointment/patientappointments",
          { withCredentials: true }
        );
        console.log(res.data);
        if (res.data.success) {
          dispatch(setpatentappoinment(res.data.appointments));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fatchappoinment();
  }, []);
};

export default useGetAppoinment;
