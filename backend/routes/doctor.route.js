import express from "express";

import pkg from "express-openid-connect";
import {
  createDoctor,
  doctors,
  getAllDoctor,
  updateByAdmin,
  getAllDoctorByQuiry,
} from "../controllers/doctor.controller.js";
const { requiresAuth } = pkg;
const Doctor = express.Router();

Doctor.route("/createDoctor").post(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
  createDoctor
);
Doctor.route("/getAllDoctor").get(getAllDoctor);

Doctor.route("/Doctors/:id").get(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
  doctors
);
 

Doctor.route("/isApproved/:id").put(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
   updateByAdmin
);
Doctor.route("/find/doctor/quiry").get(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
  getAllDoctorByQuiry
);
export default Doctor;
