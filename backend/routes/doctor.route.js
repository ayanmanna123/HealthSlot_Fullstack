import express from "express";

import pkg from "express-openid-connect";
 
import { createDoctor } from "../controllers/doctor.controllers.js";
const { requiresAuth } = pkg;
const doctorroute = express.Router();
doctorroute.route("/createDoctor").put(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
    createDoctor
);

 
export default doctorroute;
