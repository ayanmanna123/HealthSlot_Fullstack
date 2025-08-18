import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoding } from "../Redux/authSilce";
import { setdoctor } from "../Redux/doctorSlice";

const Catagorycomponent = () => {
  const catagory = [];
  const dispatch = useDispatch();
  const { doctor } = useSelector((store) => store.doctor);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/Doctor/getAllDoctor",
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          console.log(res.data.AllDoctor);
          dispatch(setdoctor(res.data.AllDoctor));
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    };

    fetchUser();
  }, [dispatch]);
  return (
    <div className=" px-30 py-10 relative">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2 text-center md:text-left">
        Book an appointment for an in-clinic consultation
      </h1>
      <p className="text-gray-500 mb-8 text-center md:text-left">
        Find experienced doctors across all specialties
      </p>

      {/* Carousel */}
      <Carousel className="relative">
        <CarouselContent>
          {catagory.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-3/4 md:basis-1/3 lg:basis-1/4 px-3"
            >
              <Card className="shadow-none border-none">
                {/* Image */}
                <CardHeader className="p-0">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-44 object-cover rounded-lg"
                  />
                </CardHeader>

                {/* Text */}
                <CardContent className="p-0 mt-3">
                  <CardTitle className="text-base font-semibold">
                    {cat.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {cat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" />
        <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" />
      </Carousel>
    </div>
  );
};

export default Catagorycomponent;
