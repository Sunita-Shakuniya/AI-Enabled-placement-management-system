import express from "express";
import { adddrive, getpublisheddrive } from "../controllers/published_drive.js";

const PublishedDriveRoutes = express.Router();

CompaniesRouters.get("/", getpublisheddrive);  // Get all offers
CompaniesRouters.post("/add", adddrive);  // Add new company

export default PublishedDriveRoutes;