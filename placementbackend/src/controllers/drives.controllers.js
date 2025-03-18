import pool from "../config/database.js";

// Get all students
export const getdrives = async (req, res) => {
    try {
        const [placement_drives] = await pool.query("SELECT * FROM placement_drives");
        res.json(placement_drives);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};

//Add 

// update

//delete


