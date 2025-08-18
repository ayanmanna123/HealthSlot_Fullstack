import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
 

import UPdtaeprofiledilog from "./UPdtaeprofiledilog";
import { useSelector } from "react-redux";
import { store } from "@/Redux/store";

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
        <div>
          <div className="gap-3 pl-5">
            <div className="flex items-center gap-3">
              <Mail />
              <span>{user?.email}</span>
            </div>
            <div className="flex gap-3 items-center">
              <Contact />
              <span>{user?.phone}</span>
            </div>
          </div>
        </div>
      </div>
      <UPdtaeprofiledilog open={open} setopen={setopen} />
    </div>
  );
};

export default Profile;
