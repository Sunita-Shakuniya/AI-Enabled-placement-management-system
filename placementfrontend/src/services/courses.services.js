import axios from "axios";

export const fetchcourses = async () => {
    try {
        const response = await axios.get("/api/courses");
        return response.data;
    } catch (error) {
        console.error("Error fetching courses data", error);
        return [];
    }
};
