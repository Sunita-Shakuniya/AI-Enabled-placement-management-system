import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the ID from the URL
import AdminButtons from '../../../components/elements/AdminButtons';
import Layout from '../../../components/layout/Layout';

function CompanyInfo() {
    const { id } = useParams(); // Get the ID from the URL
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch company details using the ID
        const fetchCompany = async () => {
            try {
                const response = await fetch(`/api/recruiter-forms/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch company details');
                }
                const data = await response.json();
                setCompany(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching company details:', error);
                setError('Failed to fetch company details');
                setLoading(false);
            }
        };

        fetchCompany();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!company) return <p>No data found</p>;

    return (
        <Layout>
        <div className="p-6 bg-white rounded-lg shadow-md my-8">
            <h2 className="text-2xl font-bold mb-6">Company Details</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Organization Name</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.organization_name}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.email}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Website URL</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.website_url}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.email}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">opportunity_type</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.opportunity_type}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Person Name</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.contact_person_name}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.contact_number}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Alternate Contact Number</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.alternate_contact_number}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mode of Drive</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.mode_of_drive}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">country</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.country}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">state</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.state}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">city</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.city}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">location</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.location}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Dates</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.preferred_dates}</p>
                </div>
                
                {/* Add more fields as needed */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">required_skills</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.required_skills}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">job_description</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.job_description}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">number_of_rounds</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.number_of_rounds}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">package_offered</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.package_offered}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">role_offered</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.role_offered}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">eligibility_criteria</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.eligibility_criteria}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">documents_required</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.documents_required}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">created_at</label>
                    <p className="mt-1 p-2 bg-gray-100 rounded">{company.created_at}</p>
                </div>
                
            </div>
        </div>
        <AdminButtons/>
        </Layout>
    );
}

export default CompanyInfo;