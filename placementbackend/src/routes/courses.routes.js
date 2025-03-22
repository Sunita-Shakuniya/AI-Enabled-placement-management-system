import express from "express";
import { getCourses } from "../controllers/courses.controllers.js";


const coursesRoutes = express.Router();

coursesRoutes.get("/", getCourses);  // Get all offers


export default coursesRoutes ;