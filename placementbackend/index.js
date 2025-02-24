import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import pool from "./src/config/database.js"; // ✅ Import the database pool
import studentRoutes from "./src/routes/studentRoutes.js";
const app = express()
const port = process.env.PORT || 3000; // ✅ Use environment variable or default port
/*
app.get('/', (req, res) => {
  res.send('PlacementCRM backend setup is Completed using Express and Nodejs ')
})
*/
app.use(express.json()); // Middleware to parse JSON
app.use("/api/students", studentRoutes);

// ✅ New Route to Get Student Data
/*
app.get("/api/students", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM students");  // ✅ Fetch student data
    res.json(rows);  // ✅ Send as JSON response
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get('/login',(req, res)=>{
    res.send("<h1>login page display</h1>")

});
*/
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});