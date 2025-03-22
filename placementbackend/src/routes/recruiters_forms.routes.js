import express from "express";
import { deleteRecruiterForm, getRecruiterFormById, getRecruiterForms, moveToCompanies, submitRecruiterForm } from "../controllers/recruiters_form.controllers.js";

const recruiterFormRoutes = express.Router();

// Submit recruiter form
recruiterFormRoutes.post("/submit", submitRecruiterForm);

// Get all recruiter forms
recruiterFormRoutes.get("/", getRecruiterForms);

// Get a single recruiter form by ID
recruiterFormRoutes.get("/:id", getRecruiterFormById);

// Delete a recruiter form
recruiterFormRoutes.delete("/:id", deleteRecruiterForm);

// Move recruiter form data to companies table
recruiterFormRoutes.post("/:id/move-to-companies", moveToCompanies);

export default recruiterFormRoutes;