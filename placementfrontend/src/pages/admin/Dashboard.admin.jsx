import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import AdminButtons from "../../components/elements/AdminButtons";
import searchIcon from './elements/search_icon.png';
import downloadIcon from './elements/download_icon.png';
import viewIcon from './elements/view_icon.png';
import editIcon from './elements/edit_icon.gif';
import { fetchStudents } from "../../services/student.service";
import PlacementCharts from "./visualize/PlacementCharts.admin";
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [students, setStudents] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Ensure this is a number
  const [itemsPerPage] = useState(5); // Ensure this is a number

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function getData() {
      const data = await fetchStudents();
      setStudents(data);
    }
    getData();
  }, []);

  // Sorting function
  const sortedStudents = [...students].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  // Searching function
  const filteredStudents = sortedStudents.filter(student => {
    if (!student) return false; // Skip if student is null/undefined
    
    return Object.values(student).some(value => {
      if (value == null) return false; // Skip null/undefined values
      
      try {
        return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      } catch (e) {
        console.warn('Failed to process value:', value, e);
        return false;
      }
    });
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage; // Ensure both are numbers
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Ensure both are numbers
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  // Handle download
  const handleDownload = () => {
    // Use filtered data if search term exists, otherwise use the entire dataset
    const dataToDownload = searchTerm ? filteredStudents : students;

    // Convert data to CSV
    const csvContent = convertToCSV(dataToDownload);

    // Create a Blob with the CSV data
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "students_data.csv"; // File name
    link.click();

    // Clean up
    URL.revokeObjectURL(link.href);
  };

  // Helper function to convert data to CSV
  const convertToCSV = (data) => {
    if (data.length === 0) return ""; // Handle empty data
    const headers = Object.keys(data[0]).join(","); // CSV headers
    // Process rows
    const rows = data.map((student) =>
      Object.values(student)
        .map((value) => {
          // Wrap values containing commas in double quotes
          if (typeof value === "string" && value.includes(",")) {
            return `"${value}"`;
          }
          return value;
        })
        .join(",") // Join fields with commas
    );

    // Combine headers and rows
    return [headers, ...rows].join("\n");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center my-4">Placement Data Analysis</h1>    
      <PlacementCharts />
      <section className="bg-blue-200">
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-center my-4"> Student Details</h1>
          <div className="flex flex-col my-4">
            <p className="text-center text-gray-700 my-2">Total Students: {students.length}</p>
            <div className="flex">
              {/* Search Input */}
              <div className=" flex w-full max-w-md mx-auto mb-1">
                <img
                  src={searchIcon}
                  alt="Search"
                  className="absolute left-3 top-2.5 h-5 w-5 opacity-60"
                />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                onClick={handleDownload}
                className="flex text-black bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full space-x-2 text-sm px-5 py-2.5 text-center mb-2">
                  <img src={downloadIcon} alt="icon" className="w-6 h-6" /> {/* Adjust size */}
                    <span>Data</span> 
              </button>
            </div>
          </div>
          

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <th className="px-6 py-3 text-left text-sm font-semibold cursor-pointer" onClick={() => handleSort('student_id')}>Student ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold cursor-pointer" onClick={() => handleSort('first_name')}>Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold cursor-pointer" onClick={() => handleSort('email')}>Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold cursor-pointer" onClick={() => handleSort('phone')}>Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold cursor-pointer" onClick={() => handleSort('degree')}>Course</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold cursor-pointer" onClick={() => handleSort('cgpa')}>CGPA</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold cursor-pointer" onClick={() => handleSort('skills')}>Skills</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold cursor-pointer" onClick={() => handleSort('status')}>Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {currentItems.map((student) => (
                  <tr key={student.student_id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-2"><p className="text-sm text-gray-600"></p>{student.student_id}</td>
                    <td className="px-6 py-2"><h4 className="text-sm font-semibold text-gray-900"></h4>{student.first_name} {student.last_name}</td>
                    <td className="px-6 py-2"><p className="text-sm text-gray-600"></p>{student.email}</td>
                    <td className="px-6 py-2"><p className="text-sm text-gray-600"></p>{student.phone}</td>
                    <td className="px-6 py-2"><p className="text-sm text-gray-600"></p>{student.degree}</td>
                    <td className="px-6 py-2"><p className="text-sm text-gray-600"></p>{student.cgpa}</td>
                    <td className="px-6 py-2"><p className="text-sm text-gray-600"></p>{student.skills}</td>
                    <td className="px-6 py-2"><h6 className="text-sm font-semibold text-gray-900"></h6>{student.status}</td>
                    <td className="flex px-6 py-2 gap-x-2">
                      <button
                        onClick={() => navigate(`/studentinfo/${student.id}`)}
                        className="px-4 m-2  flex items-center justify-center text-black bg-blue-600 hover:bg-blue-700 rounded-lg font-small rounded-full space-x-1 text-sm px-2 py-2 text-center mb-2"
                      >
                        <img src={viewIcon} alt="icon" className="w-4 h-4 p-2" /> {/* Adjust size */}
                        <span>view</span> 
                      </button>
                      <button
                        onClick={() => navigate(`/studentinfo/${student.id}`)}
                        className="px-4 m-2  flex items-center justify-center flex text-black bg-pink-700 hover:bg-blue-700 rounded-lg font-small rounded-full space-x-1 text-sm px-2 py-2 text-center mb-2"
                      >
                        <img src={editIcon} alt="icon" className="w-4 h-4" /> {/* Adjust size */}
                        <span>edit</span> 
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(filteredStudents.length / itemsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
      <AdminButtons />
    </Layout>
  );
}

export default AdminDashboard;