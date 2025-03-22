import express from "express";
import { addCompany, getcompanies } from "../controllers/companies.controllers.js";

const CompaniesRouters = express.Router();

CompaniesRouters.get("/", getcompanies);  // Get all offers
CompaniesRouters.post("/add", addCompany);  // Add new company

export default CompaniesRouters;