import pool from "../config/database.js";

// Get all students
export const getCourses = async (req, res) => {
    try {
        const [offers] = await pool.query("SELECT * FROM courses");
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch courses details" });
    }
};