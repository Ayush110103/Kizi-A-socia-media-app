import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();

/* READ */
// verifyToken is a middleware to check if the token is valid
router.get("/:id", verifyToken, getUser);
// get all friends of a user
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
// add or remove a friend
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
