import { useEffect, useState } from "react";
import { fetchStudents } from "../services/studentService";
import Layout from "../components/layout/Layout";

function Recruiters() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  const [students, setStudents] = useState([]);
  
      useEffect(() => {
          async function getData() {
              const data = await fetchStudents();
              setStudents(data);
          }
          getData();
      }, []);
  return (
    <Layout>
    <section >
    <div className="container mx-auto p-6">
    <h1 className="text-2xl font-bold text-center mb-6">PlacementCRM - Student Details</h1>
    <p className="text-center text-gray-700">Total Students: {students.length}</p>

    <div className="flex flex-wrap justify-center gap-6">
      {students.map((student) => (
        <div
          key={student.id}
          className="p-4 md:w-1/2 w-full drop-shadow-lg cursor-pointer"
          onClick={() => window.location.href = `/studentinfo/${student.id}`}
        >
          <div className="h-full border-2 flex items-center hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden bg-white p-4">
            
            {/* Student Image on Left */}
            <div className="w-1/3 flex justify-center">
              <img
                className="rounded-xl w-32 h-32 object-cover"
                src="https://cdn-icons-png.flaticon.com/512/4196/4196591.png" // Replace with actual student image
                alt={student.first_name}
              />
            </div>

            {/* Student Details on Right */}
            <div className="w-2/3 px-4">
              <h1 className="text-lg font-medium text-gray-900 mb-2"><strong>Name:</strong> {student.first_name}{student.last_name}</h1>
              <p className="text-sm text-gray-700"><strong>Email:</strong> {student.email}</p>
              <p className="text-sm text-gray-700"><strong>Phone:</strong> {student.phone}</p>
              <p className="text-sm text-gray-700"><strong>Course:</strong> {student.degree}</p>
              <p className="text-sm text-gray-700"><strong>CGPA:</strong> {student.cgpa}</p>
              <p className="text-sm text-gray-700"><strong>Skills:</strong> {student.skills}</p>

              {/* Button for More Details */}
              <div className="flex mt-4">
                <button
                  type="button"
                  onClick={() => window.location.href = `/studentinfo/${student.id}`}
                  className="text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-4"
                  style={{ background: 'linear-gradient(to top,#0a3d9f, rgb(4 33 89))' }}
                >
                  View Profile
                </button>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div> 
        
    </section> 
    </Layout> 
  )
}

export default Recruiters
