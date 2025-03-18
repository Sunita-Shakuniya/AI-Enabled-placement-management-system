import express from "express";
import { getcompanies } from "../controllers/companies.controllers.js";

const CompaniesRouters = express.Router();

CompaniesRouters.get("/", getcompanies);  // Get all offers


export default CompaniesRouters;