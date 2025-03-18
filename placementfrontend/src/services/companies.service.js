import axios from "axios";

export const fetchcompanies = async () => {
    try {
        const response = await axios.get("/api/companies");
        return response.data;
    } catch (error) {
        console.error("Error fetching companies", error);
        return [];
    }
};
