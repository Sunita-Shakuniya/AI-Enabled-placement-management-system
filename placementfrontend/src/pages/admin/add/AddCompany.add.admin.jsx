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
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    name="contact_email"
                    placeholder="Contact Email"
                    value={formData.contact_email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="contact_email"
                    placeholder=" Industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="contact_email"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    Add Company
                </button>
            </form>
        </div>
     );
    }    
export default AddCompanyForm
