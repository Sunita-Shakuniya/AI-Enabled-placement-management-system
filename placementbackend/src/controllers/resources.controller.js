import pool from "../config/database.js";

// Get all students
export const getResourses = async (req, res) => {
    try {
        const [offers] = await pool.query("SELECT * FROM resources");
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch courses details" });
    }
};