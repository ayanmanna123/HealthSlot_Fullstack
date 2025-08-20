import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setsearchword } from "../Redux/doctorSlice";
  // ✅ Make sure you import this

const categories = [
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedic Surgeon",
  "Pediatrician",
  "Gynecologist",
  "Oncologist",
  "Psychiatrist",
  "Endocrinologist",
  "Gastroenterologist",
  "Pulmonologist",
  "Radiologist",
  "Nephrologist",
  "Urologist",
  "Ophthalmologist",
  "ENT Specialist",
  "General Physician",
  "Anesthesiologist",
  "Rheumatologist",
  "Hematologist",
  "Dentist",
  "Physiotherapist",
  "Plastic Surgeon",
  "Emergency Medicine Specialist"
];


const CatagoryCorouscomponent = () => {
  const dispatch = useDispatch();          
  const navigate = useNavigate();      

  const searchJobHandler = (query) => {
    dispatch(setsearchword(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-full max-w-2xl mx-auto my-8">
        <CarouselContent>
          {categories.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg-basis-1/5">
              <Button
                variant="outline"
                className="cursor-pointer rounded-full"
                onClick={() => searchJobHandler(cat)}  
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default CatagoryCorouscomponent;
