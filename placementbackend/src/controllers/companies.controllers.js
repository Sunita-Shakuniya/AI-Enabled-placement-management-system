import pool from "../config/database.js";

// Get all students
export const getcompanies = async (req, res) => {
    try {
        const [companies] = await pool.query("SELECT * FROM companies");
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};

//Add 

// update

//delete


