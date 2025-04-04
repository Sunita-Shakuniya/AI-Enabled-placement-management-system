import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const fetchcourses = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/courses`);
        return response.data;
    } catch (error) {
        console.error("Error fetching courses data", error);
        return [];
    }
};
