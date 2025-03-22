import express from "express";
import { getResourses } from "../controllers/resources.controller.js";


const ResoursesRoutes = express.Router();

ResoursesRoutes.get("/", getResourses);  // Get all offers


export default ResoursesRoutes;