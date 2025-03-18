import axios from "axios";

export const fetchOffers = async () => {
    try {
        const response = await axios.get("/api/offers");
        return response.data;
    } catch (error) {
        console.error("Error fetching offers", error);
        return [];
    }
};
