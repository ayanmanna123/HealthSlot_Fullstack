import express from "express";
import pkg from "express-openid-connect";
import { Appointmentcreat } from "../controllers/appointment.controller.js";
const { requiresAuth } = pkg;
const Appointment = express.Router();

Appointment.route("/Appointment").post(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
   Appointmentcreat
);

export default Appointment;
