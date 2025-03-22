import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import studentRoutes from "./src/routes/student.routes.js";
import offersRoutes from "./src/routes/offers.routes.js";
import CompaniesRouters from './src/routes/companies.routes.js';
import PlacementDriveRoutes from './src/routes/drives.routes.js';
import recruiterFormRoutes from './src/routes/recruiters_forms.routes.js';
import internshipRoutes from './src/routes/Internship.routes.js';
import coursesRoutes from './src/routes/courses.routes.js';
import ResoursesRoutes from './src/routes/resources.routes.js';
import hackathonsRoutes from './src/routes/hackathons.routes.js';

const app = express()
const port = process.env.PORT || 3000; // ✅ Use environment variable or default port

app.use(express.json()); // Middleware to parse JSON
app.use("/api/students", studentRoutes);
app.use("/api/offers", offersRoutes);
app.use("/api/companies", CompaniesRouters);
app.use("/api/drives", PlacementDriveRoutes);
app.use("/api/recruiter-forms", recruiterFormRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/resources", ResoursesRoutes);
app.use("/api/hackathons", hackathonsRoutes);




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});