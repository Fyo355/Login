import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
import { verifyUser, adminOnly, businessOnly } from "../middleware/auth.js";

const router = express.Router();

router.get("/users", verifyUser);
router.get("/admin", verifyUser, adminOnly);
router.get("/business", verifyUser, businessOnly);
router.post("/users", createUser);
//router.patch('/users/:id', verifyUser, adminOnly, updateUser);
//router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

export default router;
