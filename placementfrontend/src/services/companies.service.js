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

export const addCompany = async (companyData) => {
    try {
        const response = await axios.post("/api/companies/add", companyData);
        return response.data;
    } catch (error) {
        console.error("Error adding company", error);
        throw error; // Re-throw the error to handle it in the component
    }
};