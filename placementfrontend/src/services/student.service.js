import axios from "axios";

export const fetchStudents = async () => {
    try {
        const response = await axios.get("/api/students");
        return response.data;
    } catch (error) {
        console.error("Error fetching students", error);
        return [];
    }
};

export const addStudent = async (studentData) => {
    try {
        const response = await axios.post("/api/students/add", studentData);
        return response.data;
    } catch (error) {
        console.error("Error adding student", error);
        throw error; // Re-throw the error to handle it in the component
    }
};