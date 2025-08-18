import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setsingelDoctor } from "../Redux/doctorSlice";
const DoctorProfile = () => {
  const { singelDoctor } = useSelector((store) => store.doctor);
  const clinicTime = singelDoctor?.availableDays;
  const params = useParams();
  const doctorid = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingledoctor = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/Doctor/Doctors/${doctorid}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          console.log(res.data);
          dispatch(setsingelDoctor(res.data.doctor));
        }
      } catch (error) {
        console.error("Job fetch error:", error);
      }
    };
    fetchSingledoctor();
  }, [dispatch]);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {singelDoctor?.userId?.name}
          </h2>
          <p className="text-gray-600 mt-1">{singelDoctor?.specialization}</p>
          <div>{singelDoctor?.userId?.phone}</div>
          <h3 className="text-lg font-semibold text-red-600 mt-2">
            Clinic Time
          </h3>
        </div>
        <img
          src={singelDoctor?.userId?.profilePicture}
          alt="Doctor"
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mt-4 md:mt-0"
        />
      </div>

      {/* Clinic Time Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">start Time</th>
              <th className="border border-gray-300 px-4 py-2">EndTime</th>
            </tr>
          </thead>
          <tbody>
            {clinicTime.map((cat, index) => (
              <tr key={index} className="odd:bg-gray-50 even:bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  {cat}
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  {singelDoctor?.availableTime?.start}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {singelDoctor?.availableTime?.end}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* About Section */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold">Areas Of Interest:</span> Maternal
          Medicine and Perinatal Medicine, Management of High Risk Pregnancies,
          Management of Infertility, Reproductive Endocrinology, Hysteroscopy
          and Laparoscopic gynaecological surgeries, Management of
          Gynaecological cancers.
        </p>
        <p className="mt-3">
          <span className="font-semibold">Research Work / Publication:</span>{" "}
          Took part in many research projects and clinical audits in Obs. &
          Gynae. Participated as Faculty in many National and International
          conferences, made scientific presentations, published articles, and
          contributed chapters in books.
        </p>
        <p className="mt-3">
          <span className="font-semibold">Achievements:</span> Extensive
          clinical and surgical experience in India and UK, Member of National
          Academy of Medical Sciences (India), Fellow of the IMA Academy of
          Medical Specialities in Obs. & Gynae. Won many medals, certificates,
          and honorary professorships.
        </p>
      </div>
    </div>
  );
};

export default DoctorProfile;
