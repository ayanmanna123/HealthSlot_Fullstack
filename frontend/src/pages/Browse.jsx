import React from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../components/ui/button";
import useGetselectedDoctor from "../hooks/useGetselectedDoctor";
import { useSelector } from "react-redux";

const Browse = () => {
  useGetselectedDoctor()
  const {searchdata} =useSelector((store)=>store.doctor)
  console.log(searchdata)
  const doctors = [
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
