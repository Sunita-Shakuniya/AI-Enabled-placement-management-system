import pool from "../config/database.js";

// Get all students
export const getStudents = async (req, res) => {
    try {
        const [students] = await pool.query("SELECT * FROM students");
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};

// Add a student
export const addStudent = async (req, res) => {
    const { name, cgpa, skills, internship, placement_status } = req.body;
    try {
        await pool.query("INSERT INTO students (name, cgpa, skills, internship, placement_status) VALUES (?, ?, ?, ?, ?)", 
            [name, cgpa, skills, internship, placement_status]);

        res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding student" });
    }
};
