import { Router } from "express";
import {
  getTasks,
  getTaskById,
  createTask,
} from "../controllers/index.controllers";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createTask);
// router.put("/tasks/:id", getTasks);
// router.delete("/tasks", getTasks);

export default router;
