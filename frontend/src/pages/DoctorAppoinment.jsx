import React, { useState } from "react";
import useGetDoctorAppoinment from "../hooks/useGetDoctorAppoinment";
import { useSelector } from "react-redux";

const DoctorAppoinment = () => {
  useGetDoctorAppoinment();
  const { doctorAppoinment } = useSelector((store) => store.appoinment);
  const [statusOptions] = useState([
    "pending",
    "confirmed",
    "cancelled",
    "completed",
  ]);
  return (
    <>
     <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
      <table className="min-w-full table-auto border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
          <tr>
           
            <th className="px-4 py-2 border">Patient</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Time</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {doctorAppoinment.map((appointment, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 transition duration-200"
            >
              
              <td className="px-4 py-2 border">{appointment?.patientId?.name}</td>
              <td className="px-4 py-2 border">
                {new Date(appointment.date).toLocaleDateString("en-GB")}
              </td>
              <td className="px-4 py-2 border">{appointment.time}</td>
              <td className="px-4 py-2 border">{appointment?.patientId?.phone}</td>
              <td className="px-4 py-2 border">{appointment?.patientId?.address}</td>
              <td className="px-4 py-2 border">
                <select
                  className={`px-2 py-1 rounded-md border text-sm focus:outline-none focus:ring-2 ${
                    appointment.status === "pending"
                      ? "bg-yellow-100 text-yellow-700 border-yellow-400"
                      : appointment.status === "confirmed"
                      ? "bg-green-100 text-green-700 border-green-400"
                      : appointment.status === "cancelled"
                      ? "bg-red-100 text-red-700 border-red-400"
                      : "bg-blue-100 text-blue-700 border-blue-400"
                  }`}
                  value={appointment.status}
                  onChange={(e) =>
                    console.log("Update Status:", appointment._id, e.target.value)
                  }
                >
                  {statusOptions.map((status, i) => (
                    
                    <option key={i} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default DoctorAppoinment;
