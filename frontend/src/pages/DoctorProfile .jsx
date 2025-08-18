import React from "react";

const DoctorProfile = () => {
  const clinicTime = [
    { day: "SUN", time: "10:00 AM - 11:00 AM" },
    { day: "WED", time: "01:00 PM - 03:00 PM" },
    { day: "FRI", time: "01:00 PM - 03:00 PM" },
    { day: "SAT", time: "12:00 PM - 02:00 PM" },
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Dr. RAJIV DHALL (GYNAECOLOGY)
          </h2>
          <p className="text-gray-600 mt-1">
            MBBS, DGO, DNB (Gynae & Obs), MD (Gynae & Obs), FRCOG (London)
          </p>
          <h3 className="text-lg font-semibold text-red-600 mt-2">
            Clinic Time
          </h3>
        </div>
        <img
          src="https://via.placeholder.com/150"
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
              <th className="border border-gray-300 px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {clinicTime.map((slot, index) => (
              <tr key={index} className="odd:bg-gray-50 even:bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  {slot.day}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {slot.time}
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
