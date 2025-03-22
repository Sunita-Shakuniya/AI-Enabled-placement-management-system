import axios from "axios";

export const fetchHackathons = async () => {
    try {
        const response = await axios.get("/api/hackathons");
        return response.data;
    } catch (error) {
        console.error("Error fetching hackathons data", error);
        return [];
    }
};
