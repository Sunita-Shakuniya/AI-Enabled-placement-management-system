import React, { useEffect, useState } from 'react';
import { fetchNewCompanies } from '../../../services/new_companies.services';
import { useNavigate } from 'react-router-dom';
import viewIcon from '../elements/view_icon.png';
import addIcon from '../../../components/elements/addicon.png';
import axios from 'axios';

function ListNewCompanies() {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [existingCompanies, setExistingCompanies] = useState([]); // Track existing companies
    const navigate = useNavigate(); // Initialize useNavigate
    const handleView = (id) => {
        navigate(`info/${id}`); // Navigate to the company details page
    };
   
    useEffect(() => {
        const getCompanies = async () => {
            try {
                const companiesData = await fetchNewCompanies();
                setCompanies(companiesData);
                // Fetch existing companies
                const response = await axios.get("/api/companies");
                setExistingCompanies(response.data.map((company) => company.company_name));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching companies:", error);
                setError("Failed to fetch companies");
                setLoading(false);
            }
        };

        getCompanies();
    }, []);
    const handleMoveToCompanies = async (id) => {
        try {
            const response = await axios.post(`/api/recruiter-forms/${id}/move-to-companies`);
            console.log("Data moved to companies:", response.data);
            // Add the company name to the list of existing companies
            setExistingCompanies((prev) => [...prev, organizationName]);
            // Refresh the list after moving
            const updatedCompanies = companies.filter((company) => company.id !== id);
            setCompanies(updatedCompanies);
        } catch (error) {
            console.error("Error moving data to companies:", error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="mb-8 mx-8">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">ID</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Organization Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Contact Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company) => (
                            <tr key={company.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-2">{company.id}</td>
                                <td className="px-6 py-2">{company.organization_name}</td>
                                <td className="px-6 py-2">{company.email}</td>
                                <td className="flex px-6 py-2 gap-x-2">
                                                      <button
                                                        onClick={() => handleView(company.id) }
                                                        className="flex text-black bg-blue-600 hover:bg-blue-800 rounded-lg font-small rounded-full space-x-1 text-sm px-2 py-2 text-center mb-2"
                                                      >
                                                        <img src={viewIcon} alt="icon" className="w-4 h-4" /> {/* Adjust size */}
                                                        <span>view</span> 
                                                      </button>
                                                      {/**
                                                      <button
                                                        onClick={() => handleMoveToCompanies(company.id)}
                                                        className="flex text-black bg-orange-300 hover:bg-orange-700 rounded-lg font-small rounded-full space-x-1 text-sm px-2 py-2 text-center mb-2"
                                                      >
                                                        <img src={addIcon} alt="icon" className="w-4 h-4" /> 
                                                        <span>Dive</span> 
                                                      </button> 
                                                      **/}
                                                      <button
                                                        onClick={() => handleMoveToCompanies(company.id,company.organization_name)}
                                                        className={`px-2 py-2 mb-2 rounded text-center font-small text-sm ${
                                                            existingCompanies.includes(company.organization_name)
                                                                ? "bg-gray-400 cursor-not-allowed"
                                                                : "bg-green-500 hover:bg-green-600"
                                                        } text-black`}
                                                        disabled={existingCompanies.includes(company.organization_name)} // Disable if already exists
                                                    >
                                                        {existingCompanies.includes(company.organization_name) ? "Aproved" : "Aprove"}
                                                    </button>
                                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListNewCompanies;