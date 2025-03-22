import pool from "../config/database.js";

// Get all students
export const getStudents = async (req, res) => {
    try {
        const [students] = await pool.query("SELECT * FROM students");
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: "Database error while fetching students" });
    }
};


// Add a student
export const addStudent = async (req, res) => {
    const { first_name, last_name, email, phone, degree, cgpa, skills, year_of_graduation, status } = req.body;
    try {
        await pool.query(
            "INSERT INTO students (first_name, last_name, email, phone, degree, cgpa, skills, year_of_graduation, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [first_name, last_name, email, phone, degree, cgpa, skills, year_of_graduation, status]
        );
        res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding student" });
    }
};
