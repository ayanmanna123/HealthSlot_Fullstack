import React from "react";
import { Button } from "../src/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LogOut, User } from "lucide-react";
const Navbar = () => {
  const role = "student";
  const user = false;
  return (
    <div className="max-w-full flex justify-between items-center shadow-2xs">
      <div className="p-2.5">
        <h1 className="text-red-500 font-bold text-2xl">
          Health <span className=" text-blue-700">Slot</span>
        </h1>
      </div>
      <div className="p-2.5 gap-1.5 flex justify-center items-center">
        <ul className="flex front-medium items-center gap-5">
          {role === "requiter" ? (
            <>
              {" "}
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/admin/compnaies">Company</Link>
              </li>
              <li>
                <Link to="/admin/jobs">Jobs</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/doctor">Doctor</Link>
              </li>
              <li>
                <Link to="/Browse">Browse</Link>
              </li>
            </>
          )}
        </ul>

        {!user ? (
          <div className="items-center gap-2 flex">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                Sign up
              </Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="object-cover"
                  src={
                     
                    `https://api.dicebear.com/6.x/initials/svg?seed=${"ayan"}`
                  }
                />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className="w-80 ">
              <div className="flex items-center ">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    className="object-cover"
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${"ayan"}`}
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{"Ayan"}</h4>
                </div>
              </div>
              <div className="flex flex-col my-2 text-gray-600">
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  {role === "student" && (
                    <>
                      <User/>
                      <Button variant="link">
                        <Link to={"/profile"}>view profile</Link>
                      </Button>
                    </>
                  )}
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default Navbar;
