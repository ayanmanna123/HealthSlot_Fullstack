import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setdoctorAppoinment } from "../Redux/appoinmentSlice";

const useGetDoctorAppoinment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const alldoctorappoinment = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/Appointment/appoinment/fordoctor",
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setdoctorAppoinment(res.data.allAppoinmentForDoctor));
        }
      } catch (error) {
        console.log(error);
      }
    };

    alldoctorappoinment();
  }, []);
};

export default useGetDoctorAppoinment;
