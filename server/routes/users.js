import express from "express";
import {deleteUser, getAllUser, getSingleUser, updateUser} from "../controllers/userController.js";
const router = express.Router()

import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

// update user
router.put("/:id",verifyUser, updateUser);

//delete user
router.delete("/:id",verifyUser, deleteUser);

//get single user
router.get("/:id",verifyToken, getSingleUser);

//create new user
router.get("/",verifyAdmin, getAllUser);

export default router