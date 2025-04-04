import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const fetchcompanies = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/companies`);
        return response.data;
    } catch (error) {
        console.error("Error fetching companies", error);
        return [];
    }
};

export const addCompany = async (companyData) => {
    try {
        const response = await axios.post(`${baseURL}/api/companies/add`, companyData);
        return response.data;
    } catch (error) {
        console.error("Error adding company", error);
        throw error; // Re-throw the error to handle it in the component
    }
};