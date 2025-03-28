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
    <div className="bg-blue-200 ">
        <h1 className="text-2xl font-bold text-center my-4">Companies</h1>         
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <th className="px-6 py-3 text-left text-sm font-semibold">Company ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Company Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Industry</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Contact Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Website</th>
            </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
            {companies.map((company) => (
                <tr key={company.company_id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-2"><p className="text-sm text-gray-600">{company.company_id}</p></td>    
                <td className="px-6 py-2"><h6 className="text-sm font-semibold text-gray-900">{company.company_name}</h6></td>
                <td className="px-6 py-2"><p className="text-sm text-gray-600">{company.industry}</p></td>
                <td className="px-6 py-2"><p className="text-sm text-gray-600">{company.location}</p></td>
                <td className="px-6 py-2"><p className="text-sm text-gray-600">{company.contact_email}</p></td>
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
  )
}

export default ListCompany
