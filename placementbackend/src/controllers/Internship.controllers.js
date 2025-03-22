import pool from "../config/database.js";

// Get all students
export const getInternships = async (req, res) => {
    try {
        const [offers] = await pool.query("SELECT * FROM platforms");
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: "Database error while fetching Internship details" });
    }
};