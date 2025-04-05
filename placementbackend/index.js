import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'; 
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

app.use(express.static('dist'));
// CORS Configuration (Add this before your routes)
const corsOptions = {
  origin: [
    'http://localhost:5173', // Your Vite frontend
    'http://127.0.0.1:5173', // Alternative localhost
    // Add other domains as needed for production
    'https://educareer-project.onrender.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
// Enable CORS with options
app.use(cors(corsOptions));

// Optional: Pre-flight request handling
app.options('*', cors(corsOptions));


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