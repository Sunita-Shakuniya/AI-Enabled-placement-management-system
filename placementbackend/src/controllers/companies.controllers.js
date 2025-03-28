import pool from "../config/database.js";

// Get all students
export const getcompanies = async (req, res) => {
    try {
        const [companies] = await pool.query("SELECT * FROM companies");
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: "Database error while fetching companies detail at initial " });
    }
};

// Add a company
export const addCompany = async (req, res) => {
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
// update

//delete


