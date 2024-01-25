import express from "express";
import {
  getListLikeBasedOnResID,
  getListRateBasedOnResID,
} from "../controllers/restaurantController.js";
const restaurantRoutes = express.Router();

restaurantRoutes.get("/get-list-like-res/:res_id", getListLikeBasedOnResID);
restaurantRoutes.get("/get-list-rate-res/:res_id", getListRateBasedOnResID);

export default restaurantRoutes;
