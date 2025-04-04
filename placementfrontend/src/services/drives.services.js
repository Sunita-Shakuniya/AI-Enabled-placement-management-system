import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
export const fetchPlacementDrives = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/drives`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Placement Drives", error);
        return [];
    }
};
