import React, { useState } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import { addCompany } from '../../../services/companies.service';

function AddCompanyForm() {
    const [formData, setFormData] = useState({
        company_name: "",
        website: "",
        contact_email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addCompany(formData);
            alert(response.message); // Show success message
            setFormData({ company_name: "", website: "", contact_email: "" }); // Reset form
        } catch (error) {
            alert("Error adding company"); // Show error message
        }
    };

    return (
        <div>
            <Navbar/>
            <section className="p-4 ">
            <h1 className="text-2xl font-bold text-center my-4">Add New company</h1>
            <div className="overflow-x-auto">  
            <form onSubmit={handleSubmit}>
            <table className="min-w-full divide-y divide-gray-200 p-4">
                    <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Company Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Website link</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Contact Email</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Industry</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y  bg-gray-100 divide-gray-200'>
                    <tr className="hover:bg-gray-50 transition-colors">
                        {/* Company Name */}
                        <td className="px-6 py-4">
                        <input
                            type="text"
                            name="company_name"
                            placeholder="name"
                            value={formData.company_name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        </td>

                        {/* Website */}
                        <td className="px-6 py-4">
                        <input
                            type="text"
                            name="website"
                            placeholder="link"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        </td>

                        {/* Contact Email */}
                        <td className="px-6 py-4">
                        <input
                            type="email"
                            name="contact_email"
                            placeholder="email"
                            value={formData.contact_email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        </td>

                        {/* Industry */}
                        <td className="px-6 py-4">
                        <input
                            type="text"
                            name="industry"
                            placeholder="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        </td>

                        {/* Location */}
                        <td className="px-6 py-4">
                        <input
                            type="text"
                            name="location"
                            placeholder="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        </td>

                        {/* Submit Button */}
                        <td className="px-6 py-4">
                        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                            Add 
                        </button>
                        </td>
                    </tr>
                    </tbody>
            </table>
            </form>
            </div> 
            </section>
            
        </div>
     );
    }    
export default AddCompanyForm
