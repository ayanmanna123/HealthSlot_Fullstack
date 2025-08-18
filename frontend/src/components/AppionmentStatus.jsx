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
        <TableCaption>A list of your applied job</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </div>
  );
};

export default AppionmentStatus;
