import axios from 'axios';

export const fetchNewCompanies = async () => {
    try {
        const response = await axios.get('/api/recruiter-forms');
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching recruiter forms:", error);
        throw new Error("Failed to fetch recruiter forms"); // Throw an error to handle it in the component
    }
};