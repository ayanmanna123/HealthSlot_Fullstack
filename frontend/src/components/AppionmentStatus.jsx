import React from "react";
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

import useGetAppoinment from "../../hooks/useGetAppoinment";

const AppionmentStatus = () => {
  useGetAppoinment();
  const { patentappoinment } = useSelector((store) => store.appoinment);

  return (
    <div>
      <Table>
        <TableCaption>A list of your appoinment</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Doctor Nmae</TableHead>
            <TableHead>Catagory</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patentappoinment.map((cat, index) => (
            <TableRow key={index}>
              <TableCell>{cat?.createdAt?.split("T")[0]}</TableCell>
              <TableCell>{cat?.time}</TableCell>
              <TableCell>{cat?.doctorId?.userId?.name}</TableCell>
              <TableCell>{cat?.doctorId?.specialization}</TableCell>
              <TableCell className="text-right">
                <Badge
                  className={`${
                    cat?.status === "cancelled"
                      ? "bg-red-500"
                      : cat?.status === "pending"
                      ? "bg-gray-600"
                      : cat?.status === "completed"
                      ? "bg-green-400"
                      : "bg-pink-400"
                  }`}
                >
                  {cat?.status.toUpperCase()}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppionmentStatus;
