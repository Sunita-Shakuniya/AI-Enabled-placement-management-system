import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const fetchinternships = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/internships`);
        return response.data;
    } catch (error) {
        console.error("Error fetching internship data", error);
        return [];
    }
};
