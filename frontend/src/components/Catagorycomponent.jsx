import React from "react";
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

const Catagorycomponent = () => {
  const catagory = [
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      title: "Gynecologist/Obstetrician",
      description: "Explore for women’s health, pregnancy and infertility treatments",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      title: "Dietitian/Nutrition",
      description: "Get guidance on eating right, weight management and sports nutrition",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      title: "Physiotherapist",
      description: "Pulled a muscle? Get it treated by a trained physiotherapist",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      title: "General Surgeon",
      description: "Need to get operated? Find the right surgeon",
    },
     {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      title: "Gynecologist/Obstetrician",
      description: "Explore for women’s health, pregnancy and infertility treatments",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      title: "Dietitian/Nutrition",
      description: "Get guidance on eating right, weight management and sports nutrition",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      title: "Physiotherapist",
      description: "Pulled a muscle? Get it treated by a trained physiotherapist",
    },
    {
      img: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      title: "General Surgeon",
      description: "Need to get operated? Find the right surgeon",
    },
  ];

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
