import React, { useEffect, useState } from 'react'
import { fetchcompanies } from '../../../services/companies.service';

function ListCompany() {
    const [companies, setCompanies] = useState([]);
    
    // Fetch companies data using the fetchCompanies function
    useEffect(() => {
    const getCompanies = async () => {
        try {
        const companiesData = await fetchcompanies();

        setCompanies(companiesData);
        } catch (error) {
        console.error("Error fetching companies:", error);
        }
    };

    getCompanies();
    }, []);
    
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Companies</h1>
            {/* Companies Table */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Companies List</h2>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr className="bg-gray-100 border-b">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Company ID</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Company Name</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Industry</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Location</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Contact Email</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Website</th>
                    </tr>
                    </thead>
                    <tbody>
                    {companies.map((company) => (
                        <tr key={company.company_id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-2">{company.company_id}</td>    
                        <td className="px-6 py-2">{company.company_name}</td>
                        <td className="px-6 py-2">{company.industry}</td>
                        <td className="px-6 py-2">{company.location}</td>
                        <td className="px-6 py-2">{company.contact_email}</td>
                        <td className="px-6 py-2">
                            <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                            >
                            {company.website}
                            </a>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
    </div>
  )
}

export default ListCompany
