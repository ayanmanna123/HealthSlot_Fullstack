import React from "react";
import Navbar from "../shared/Navbar";

const Map = () => {
  return (
    <>
   
      <div className="inset-0 absolute">
         <Navbar/>
        <iframe
          width="100%"
          height="100%"
           
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=South%20City%20Mall,%20mall,%20Kolkata,%20India+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="south-city-mall-location"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
