import axios from "axios";

export const fetchPlacementDrives = async () => {
    try {
        const response = await axios.get("/api/drives");
        return response.data;
    } catch (error) {
        console.error("Error fetching Placement Drives", error);
        return [];
    }
};
