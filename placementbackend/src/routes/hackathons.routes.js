import express from "express";
import { getHackathons } from "../controllers/hackathons.controllers.js";


const hackathonsRoutes = express.Router();

hackathonsRoutes.get("/", getHackathons);  // Get all offers


export default hackathonsRoutes ;