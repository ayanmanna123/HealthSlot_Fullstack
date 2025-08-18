import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../components/ui/button";
import { Calendar, Contact, Mail, MapPin, Pen } from "lucide-react";

import UPdtaeprofiledilog from "./UPdtaeprofiledilog";
import { useSelector } from "react-redux";
import { store } from "@/Redux/store";
import AppionmentStatus from "../components/AppionmentStatus";

// const skilles = ["React", "Node.js", "Tailwind", "MongoDB"];

const Profile = () => {
  const ishaveresume = true;
  let [open, setopen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl   mx-auto bg-white border border-gray-300 rounded-2xl my-5 p-8">
        <div className="flex  gap-6 justify-between">
          <div className="flex items-center gap-4 ">
            <Avatar className="h-24 w-24">
              <AvatarImage
                className="object-cover"
                src={
                  user?.profilePicture ||
                  `https://api.dicebear.com/6.x/initials/svg?seed=${user?.name}`
                }
              />
              {/* <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback> */}
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">{user?.name}</h1>
            </div>
          </div>
          <Button
            onClick={() => setopen(true)}
            className={"text-right"}
            variant={"outline"}
          >
            <Pen />
          </Button>
        </div>
        <div className="gap-3.5">
          <div className="gap-4 pl-5">
            <div className="flex items-center gap-3 p-1.5">
              <Mail />
              <span>{user?.email}</span>
            </div>
            <div className="flex gap-3 items-center p-1.5">
              <Contact />
              <span>{user?.phone}</span>
            </div>
            <div className="flex gap-3 items-center p-1.5">
              <MapPin />
              <span>{user?.address}</span>
            </div>
            <div className="flex gap-3 items-center p-1.5 ">
              <Calendar />
              <span>
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl ">
        <h1 className={"font-bold"}>applied jobs</h1>
         <AppionmentStatus/>
      </div>
      <UPdtaeprofiledilog open={open} setopen={setopen} />
    </div>
  );
};

export default Profile;
