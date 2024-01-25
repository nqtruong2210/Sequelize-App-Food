import express from "express";
import {
  deleteLike,
  getListLikeBasedOnUserID,
  getListRateBasedOnUserID,
  postLike,
  postOrder,
  postRate,
} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get(`/get-list-like/:user_id`, getListLikeBasedOnUserID);
userRoutes.get("/get-list-rate/:user_id", getListRateBasedOnUserID);
userRoutes.post("/post-like", postLike);
userRoutes.delete("/delete-like/:user_id/:res_id", deleteLike);
userRoutes.post("/post-order", postOrder);
userRoutes.post("/post-rate", postRate);

export default userRoutes;
