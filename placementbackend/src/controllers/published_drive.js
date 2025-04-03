import pool from "../config/database.js";

// Get all students
export const getpublisheddrive = async (req, res) => {
    try {
        const [offers] = await pool.query("SELECT * FROM published_drives");
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: "Database error while fetching published_drives " });
    }
};


// Add a company
export const adddrive = async (req, res) => {
    const { company_name, website, contact_email } = req.body;
    try {
        await pool.query(
            "INSERT INTO companies (company_name, website, contact_email) VALUES (?, ?, ?)",
            [company_name, website, contact_email]
        );
        res.status(201).json({ message: "Company added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding company" });
    }
};