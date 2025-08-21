import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setsearchdata } from "../Redux/doctorSlice";

const useGetselectedDoctor = () => {
  const dispatch = useDispatch();
  const {searchword} = useSelector((store)=>store.doctor)
  useEffect(() => {
    const getselectedDoctor = async () => {
      try {
        const res = await axios.get(
          `https://health-slot-fullstack.vercel.app/api/v1/Doctor/find/doctor/quiry?findElement=${searchword}`,
          { withCredentials: true }
        );
        if (res?.status) {
          dispatch(setsearchdata(res.data.findDOctor));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getselectedDoctor();
  }, []);
};

export default useGetselectedDoctor;
