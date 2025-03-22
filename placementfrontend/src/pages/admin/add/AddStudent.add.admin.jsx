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
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={formData.degree}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="number"
                name="cgpa"
                placeholder="CGPA"
                value={formData.cgpa}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                step="0.01"
            />
            <input
                type="text"
                name="skills"
                placeholder="Skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="number"
                name="year_of_graduation"
                placeholder="Year of Graduation"
                value={formData.year_of_graduation}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            >
                <option value="Unplaced">Unplaced</option>
                <option value="Placed">Placed</option>
            </select>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                Add Student
            </button>
        </form>
    </div>
);
}
export default AddStudentForm
