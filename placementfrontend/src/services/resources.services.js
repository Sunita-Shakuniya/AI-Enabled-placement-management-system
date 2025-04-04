import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const fetchresourses = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/resources`);
        return response.data;
    } catch (error) {
        console.error("Error fetching resourses data", error);
        return [];
    }
};
