import express from "express";
import { getdrives } from "../controllers/drives.controllers.js";

const PlacementDriveRoutes = express.Router();

PlacementDriveRoutes.get("/", getdrives);  // Get all offers


export default PlacementDriveRoutes;