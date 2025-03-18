import pool from "../config/database.js";

// Get all students
export const getoffers = async (req, res) => {
    try {
        const [offers] = await pool.query("SELECT * FROM offers");
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};

//Add 

// update

//delete


