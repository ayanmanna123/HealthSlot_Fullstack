import axios from "axios";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ApplyAppoinment = () => {
  const { singelDoctor } = useSelector((store) => store.doctor);
  const timeSlots = singelDoctor?.availableTime; // ✅ doctor’s available time slots
  const availableDays = singelDoctor?.availableDays || []; // ✅ doctor’s available days

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const naveget = useNavigate();
  // 🔹 Utility: convert chosen date -> weekday name
  const getDayName = (dateStr) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(dateStr);
    return days[d.getDay()];
  };

  const handelClick = async () => {
    if (!date || !time) {
      toast.error("Please choose both date and time");
      return;
    }

    // ✅ Check if chosen date is in doctor's available days
    const chosenDay = getDayName(date);
    if (!availableDays.includes(chosenDay)) {
      toast.error(
        `Doctor not available on ${chosenDay}. Please select in bttween those days ${availableDays}`
      );
      return;
    }

    try {
      const doctorId = singelDoctor?._id;

      const res = await axios.post(
        "http://localhost:5000/api/v1/Appointment/Appointment",
        {
          doctorId,
          date,
          time,
        },
        { withCredentials: true }
      );

      toast.success(res.data.message || "Appointment booked successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div
        className="p-7"
        onClick={() => naveget(`/DoctorProfile/${singelDoctor?._id}`)}
      >
        <ArrowLeft />
      </div>

      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4">Book Appointment</h1>

        {/* Date Picker */}
        <label className="block mb-2 font-semibold">Choose Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-md px-3 py-2 w-full mb-4"
        />

        {/* Time Dropdown */}
        <label className="block mb-2 font-semibold">Choose Time:</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border rounded-md px-3 py-2 w-full mb-4"
        >
          <option value="">Select Time</option>
          {timeSlots &&
            Object.entries(timeSlots)?.map(([key, value], idx) => (
              <option key={idx} value={value}>
                {value}
              </option>
            ))}
        </select>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={handelClick}
        >
          Confirm Appointment
        </button>
      </div>
    </>
  );
};

export default ApplyAppoinment;
