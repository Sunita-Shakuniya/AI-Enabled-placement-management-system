import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const fetchHackathons = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/hackathons`);
        return response.data;
    } catch (error) {
        console.error("Error fetching hackathons data", error);
        return [];
    }
};
