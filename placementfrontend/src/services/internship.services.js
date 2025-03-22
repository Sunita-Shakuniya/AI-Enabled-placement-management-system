import axios from "axios";

export const fetchinternships = async () => {
    try {
        const response = await axios.get("/api/internships");
        return response.data;
    } catch (error) {
        console.error("Error fetching internship data", error);
        return [];
    }
};
