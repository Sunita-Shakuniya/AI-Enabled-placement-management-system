import express from "express";
import { getInternships } from "../controllers/Internship.controllers.js";

const internshipRoutes = express.Router();

internshipRoutes .get("/", getInternships);  // Get all offers


export default internshipRoutes ;