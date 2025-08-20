import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setsearchword } from "../Redux/doctorSlice";
import CatagoryCorouscomponent from "./CatagoryCorouscomponent";
// ✅ import your action

const HeroSection = () => {
  const [search, setSearch] = useState(""); // local input state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      dispatch(setsearchword(search)); // ✅ save to redux
      navigate(`/Browse`); // ✅ go to browse page
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-10 px-6 bg-white">
      <p className="mt-4 text-gray-600 text-lg max-w-2xl">
        Your health, your time — book doctor appointments with ease.
      </p>

      {/* Search Bar */}
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center mx-auto gap-4">
        <input
          type="text"
          placeholder="Find your Doctor"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // ✅ update local state
          className="outline-none border-none w-full h-6"
        />
        <Button
          className={"rounded-r-full bg-[#6A38C2]"}
          onClick={handleSearch}
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      <CatagoryCorouscomponent />
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className={`flex items-center justify-center h-56 bg-blue-50`}>
              <img
                src={
                  "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
                }
                alt="Instant Video Consultation"
                className="h-48 object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
                Instant Video Consultation
              </h3>
              <p className="text-gray-600 mt-2">Connect within 60 secs</p>
            </div>
          </div>
          <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition" onClick={()=> navigate("/find/map")}>
            <div className={`flex items-center justify-center h-56 bg-teal-50`}>
              <img
                src={
                  "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
                }
                alt="Instant Video Consultation"
                className="h-48 object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
                Find Doctors Near You
              </h3>
              <p className="text-gray-600 mt-2">Confirmed appointments</p>
            </div>
          </div>
           <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className={`flex items-center justify-center h-56 bg-purple-50`}>
              <img
                src={
                  "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                }
                alt="Instant Video Consultation"
                className="h-48 object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
               Surgeries
              </h3>
              <p className="text-gray-600 mt-2">Safe and trusted surgery centers</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
