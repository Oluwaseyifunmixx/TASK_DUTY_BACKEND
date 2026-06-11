import express from "express";
import { CreateTask, GetAllTask, GetSingleTask, UpdateATask, DeleteTask } from "../controllers/taskController";

const router = express.Router()

router.get("/", GetAllTask);
router.get("/:id", GetSingleTask);
router.post("/", CreateTask);
router.put("/:id", UpdateATask);
router.delete("/:id", DeleteTask)

export default router;