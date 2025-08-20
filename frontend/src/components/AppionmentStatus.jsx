import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import useGetAppoinment from "../hooks/useGetAppoinment";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const AppionmentStatus = () => {
  useGetAppoinment();
  const { patentappoinment } = useSelector((store) => store.appoinment);
  const [selectedRating, setSelectedRating] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleRating = async (doctorId, rating) => {
    setSelectedRating((prev) => ({ ...prev, [doctorId]: rating }));

    try {
      setSubmitting(true);
      const res = await axios.post(
        "http://localhost:5000/api/v1/review/addReview",
        {
          doctorId,
          givenrating: rating,
        },
        {
          withCredentials: true,
        }
      );

      if (res.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
      const data = res.data;

      setSubmitting(false);
    } catch (error) {
      toast.error(error.message);
      console.error("Error submitting review:", error);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your appoinments</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Doctor Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Give Rating</TableHead>
            <TableHead className="text-right">Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patentappoinment?.map((cat, index) => (
            <TableRow key={index}>
              <TableCell>{cat?.createdAt?.split("T")[0]}</TableCell>
              <TableCell>{cat?.time}</TableCell>
              <TableCell>{cat?.doctorId?.userId?.name}</TableCell>
              <TableCell>{cat?.doctorId?.specialization}</TableCell>
              <TableCell>
                <Badge
                  className={`${
                    cat?.status === "cancelled"
                      ? "bg-red-500"
                      : cat?.status === "pending"
                      ? "bg-yellow-100 text-yellow-700 border-yellow-400"
                      : cat?.status === "completed"
                      ? "bg-blue-100 text-blue-700 border-blue-400"
                      : "bg-green-100 text-green-700 border-green-400"
                  }`}
                >
                  {cat?.status.toUpperCase()}
                </Badge>
              </TableCell>

              <TableCell>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 cursor-pointer ${
                        cat?.rating >= star
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => handleRating(cat?.doctorId?._id, star)}
                    />
                  ))}
                </div>
              </TableCell>

              <TableCell className="text-right">
                {cat?.doctorId?.rating || "—"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppionmentStatus;
