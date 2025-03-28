import React, { useState } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import { addStudent } from '../../../services/student.service';

function AddStudentForm() {const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    degree: "",
    cgpa: "",
    skills: "",
    year_of_graduation: "",
    status: "Unplaced",
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await addStudent(formData);
        alert(response.message); // Show success message
        setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            degree: "",
            cgpa: "",
            skills: "",
            year_of_graduation: "",
            status: "Unplaced",
        }); // Reset form
    } catch (error) {
        alert("Error adding student"); // Show error message
    }
};

return (
    <div>
        <Navbar/>
        <section className="bg-blue-200 p-4 ">
        <h1 className="text-2xl font-bold text-center my-4">Add New company</h1>
        <div className="overflow-x-auto"> 
        <form onSubmit={handleSubmit}>
            <table className="min-w-full divide-y divide-gray-200 p-4">
                    <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <tr>
                            <th className="px-2 py-3 text-left text-sm font-semibold">First Name</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">Last Name</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">Email</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">Phone No</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">Degree</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">CGPA</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">skills</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">Year of Graduation</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">status</th>
                            <th className="px-2 py-3 text-left text-sm font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y  bg-gray-100 divide-gray-200'>
                    <tr className="hover:bg-gray-50 transition-colors">
                        {/* First Name */}
                        <td className="px-2 py-4">
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        </td>

                        {/* Last Name */}
                        <td className="px-2 py-4">
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        </td>

                        {/* Contact Email */}
                        <td className="px-2 py-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        </td>

                        {/* Phone No */}
                        <td className="px-2 py-4">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        </td>

                        {/* Degree */}
                        <td className="px-2 py-4">
                        <input
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            value={formData.degree}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        </td>
                        {/**cgpa */}
                        <td className="px-2 py-4">
                        <input
                            type="number"
                            name="cgpa"
                            placeholder="CGPA"
                            value={formData.cgpa}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            step="0.01"
                        />
                        </td>
                        {/**skill */}
                        <td className="px-2 py-4">
                        <input
                            type="text"
                            name="skills"
                            placeholder="Skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        </td>
                        {/** year of graduation*/}
                        <td className="px-2 py-4">
                        <input
                            type="number"
                            name="year_of_graduation"
                            placeholder="Year of Graduation"
                            value={formData.year_of_graduation}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        </td>
                        {/**status */}
                        <td className="px-4 py-4">
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="Unplaced">Unplaced</option>
                            <option value="Placed">Placed</option>
                        </select>
                        </td>
                        
                        {/* Submit Button */}
                        <td className="px-2 py-4">
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
export default AddStudentForm
