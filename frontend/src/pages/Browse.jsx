import React from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../src/components/ui/button";

const Browse = () => {
  const doctors = [
    {
      name: "Dr. BHASWATI DASGUPTA NATH",
      specialty: "GENERAL MEDICINE",
      qualification: "MBBS, MRCP (UK)",
      img: "https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg",
    },
    {
      name: "Dr. AVISEK DUTTA",
      specialty: "ONCOLOGY TEAM",
      qualification: "MBBS, MS (Gen Surgery), MCh (Urology), MRCS (UK)",
      img: "https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg",
    },
    {
      name: "Dr. SOURABH DUTTA",
      specialty: "GENERAL MEDICINE",
      qualification: "MBBS, MD (General Medicine)",
      img: "https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg",
    },
    {
      name: "Dr. AMIT MANDAL",
      specialty: "GYNAE ONCOLOGY",
      qualification:
        "MBBS, MS (Gynae & Obs), DNB (Gynae & Obs), MCh (Gynaecologic Oncology) AIIMS- New Delhi",
      img: "https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="py-10 px-5 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-indigo-800 font-bold text-lg mb-1">
                  {doc.name}
                </h3>
                <p className="font-semibold text-black uppercase text-sm mb-1">
                  {doc.specialty}
                </p>
                <p className="text-gray-700 text-sm">{doc.qualification}</p>
              </div>
              <div className="flex justify-around items-center gap-0.5 p-4">
                <Button className={"bg-white text-black border hover:bg-gray-300"}>
                  details
                </Button>
                <Button className={"bg-purple-700 hover:bg-purple-800"}>appointment</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Browse;
