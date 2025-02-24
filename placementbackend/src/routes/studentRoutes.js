import express from "express";
import { getStudents, addStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);  // Get all students
router.post("/add", addStudent);  // Add new student

export default router;
