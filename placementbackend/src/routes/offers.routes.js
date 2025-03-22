import express from "express";
import { getoffers } from "../controllers/offers.controllers.js";


const offersRoutes = express.Router();

offersRoutes .get("/", getoffers);  // Get all offers


export default offersRoutes ;