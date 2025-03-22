import axios from "axios";

export const fetchresourses = async () => {
    try {
        const response = await axios.get("/api/resources");
        return response.data;
    } catch (error) {
        console.error("Error fetching resourses data", error);
        return [];
    }
};
