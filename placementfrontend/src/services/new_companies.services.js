import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

export const fetchNewCompanies = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/recruiter-forms`);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching recruiter forms:", error);
        throw new Error("Failed to fetch recruiter forms"); // Throw an error to handle it in the component
    }
};