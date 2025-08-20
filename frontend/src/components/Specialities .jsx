import React from "react";
import { useNavigate } from "react-router-dom";

const Specialities = () => {
  const items = [
    {
      title: "Period doubts or Pregnancy",
      img: "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
    },
    {
      title: "Acne, pimple or skin issues",
      img: "https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png",
    },
    {
      title: "Performance issues in bed",
      img: "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
    },
    {
      title: "Cold, cough or fever",
      img: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
    },
    {
      title: "Child not feeling well",
      img: "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
    },
    {
      title: "Depression or anxiety",
      img: "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Consult top doctors online for any health concern
            </h2>
            <p className="text-gray-600 mt-2">
              Private online consultations with verified doctors in all
              specialists
            </p>
          </div>
          <button className="mt-4 md:mt-0 border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
            View All Specialities
          </button>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              onClick={() => navigate(`/Browse`)}
            >
              <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gray-100 mb-4 shadow-sm hover:shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 h-28 object-contain"
                />
              </div>

              <h3 className="text-sm font-medium text-gray-800">
                {item.title}
              </h3>

              <a
                href="#"
                className="mt-2 text-blue-500 font-medium text-sm hover:underline"
              >
                CONSULT NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
