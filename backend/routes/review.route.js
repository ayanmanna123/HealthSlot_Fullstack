import express from "express";
import pkg from "express-openid-connect";
import { addReview } from "../controllers/review.controller.js";
const { requiresAuth } = pkg;
const review = express.Router();

review.route("/addReview").post(
  requiresAuth(),
  (req, res, next) => {
    req.id = req.oidc.user.sub;
    next();
  },
  addReview
);

export default review;
