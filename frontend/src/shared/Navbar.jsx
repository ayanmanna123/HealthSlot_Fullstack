import React, { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, User } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoding, setuser } from "@/Redux/authSilce.js";
const Navbar = () => {
  const dispatch = useDispatch();
  const { loding, user } = useSelector((store) => store.auth);
  const role = user?.role;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        dispatch(setLoding(true));
        const res = await axios.get(
          "https://health-slot-fullstack.vercel.app/api/v1/user/getUserDetails",
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          dispatch(setuser(res.data.user));
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        dispatch(setuser(null)); // not logged in
      } finally {
        dispatch(setLoding(false));
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <div className="max-w-full flex justify-between items-center shadow-2xs">
      <div className="p-2.5">
        <img
          src="https://files.softicons.com/download/application-icons/circle-icons-add-on-2-by-martz90/png/512x512/health.png"
          alt="logo"
          className="h-10 w-10 "
        />
      </div>
      <div className="p-2.5 gap-1.5 flex justify-center items-center">
        <ul className="flex front-medium items-center gap-5">
          {role === 'doctor' ? (
            <>
              {" "}
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Admin/appoinment">Appoinment</Link>
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
            <Link to="https://health-slot-fullstack.vercel.app/login">
              <Button variant="outline">Login</Button>
            </Link>

            <Link to="https://health-slot-fullstack.vercel.app/login">
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
                    user?.profilePicture ||
                    `https://api.dicebear.com/6.x/initials/svg?seed=${user?.name}`
                  }
                />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className="w-80 ">
              <div className="flex items-center ">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    className="object-cover"
                    src={
                      user?.profilePicture ||
                      `https://api.dicebear.com/6.x/initials/svg?seed=${user?.name}`
                    }
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{"Ayan"}</h4>
                </div>
              </div>
              <div className="flex flex-col my-2 text-gray-600">
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <User />
                  <Button variant="link">
                    <Link to={"/profile"}>view profile</Link>
                  </Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut />
                  <Link to="https://health-slot-fullstack.vercel.app/logout">
                    <Button variant="link">Logout</Button>
                  </Link>
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
