import express from "express";
import pkg from "express-openid-connect";
import { Appointmentcreat, appointmentsStatus,  deleteappointment, doctorAppointments, patientappointments } from "../controllers/appointment.controller.js";
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

Appointment.route("/patientappointments").get(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
  patientappointments
);

Appointment.route("/doctorappointments/:id").get(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
  doctorAppointments
);
Appointment.route("/appointments/:id/status").patch(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
   appointmentsStatus
);

Appointment.route("/deleteappointment/:id").delete(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
   deleteappointment
);
export default Appointment;
