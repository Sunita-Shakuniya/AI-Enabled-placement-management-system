import pool from "../config/database.js";

// Get all students
export const getHackathons = async (req, res) => {
    try {
        const [offers] = await pool.query("SELECT * FROM hackathons");
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: "Database error while fetching hackathons details" });
    }
};