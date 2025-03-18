import express from "express";
import { getStudents, addStudent } from "../controllers/student.controllers.js";

const StudentRoutes = express.Router();

StudentRoutes.get("/", getStudents);  // Get all students
StudentRoutes.post("/add", addStudent);  // Add new student

export default StudentRoutes;
