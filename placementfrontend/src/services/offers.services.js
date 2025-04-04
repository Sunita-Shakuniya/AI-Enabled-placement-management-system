import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const fetchOffers = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/offers`);
        return response.data;
    } catch (error) {
        console.error("Error fetching offers", error);
        return [];
    }
};
