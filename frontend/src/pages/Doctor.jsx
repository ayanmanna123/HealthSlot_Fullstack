import React from "react";
import Navbar from "../shared/Navbar";
import { useSelector } from "react-redux";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Doctor = () => {
  const { doctor } = useSelector((store) => store.doctor);
  const naveget = useNavigate();
  return (
    <>
      <Navbar />
      <section className="py-10 px-5 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctor.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              onClick={() => naveget(`/DoctorProfile/${doc._id}`)}
            >
              <img
                src={doc?.userId?.profilePicture}
                alt={doc?.userId?.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-indigo-800 font-bold text-lg mb-1">
                  {doc?.userId?.name}
                </h3>
                <p className="font-semibold text-black uppercase text-sm mb-1">
                  {doc?.specialization}
                </p>
                <p className="text-gray-700 text-sm">{doc.qualification}</p>
              </div>
              <div className="px-4 pb-4 space-y-2">
                <button className="w-full border border-yellow-500 text-yellow-600 font-medium py-2 rounded hover:bg-yellow-50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Doctor;
