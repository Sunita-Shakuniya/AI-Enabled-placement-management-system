import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { fetchcourses } from '../../../services/courses.services';
import { useNavigate } from 'react-router-dom';
import coursesImg from '../elements/courses.png';
function Courses({limit}) {
  const navigate = useNavigate();
    const [courses, setcourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      async function getData() {
        try {
          setLoading(true);
          const data = await fetchcourses();
          setcourses(Array.isArray(data) ? data : []);
        } catch (err) {
          setError("Failed to load courses. Please try again.");
          setcourses([]);
        } finally {
          setLoading(false);
        }
      }
      getData();
    }, []);
      const displayCourses = limit ? courses.slice(0, limit) : courses;
  return (
    <section className='  p-4 '>
        <div className='flex flex-row items-center justify-center gap-4'>
          <img src={coursesImg} alt="Search" className="w-[300px]" />
          <h1 className="text-5xl font-extrabold text-center 
                      [-webkit-text-stroke:_0.5px_black]
                      bg-gradient-to-b from-blue-900 via-blue-700 via-blue-500 to-indigo-500 bg-clip-text text-transparent
                      hover:scale-105 transition-transform duration-300"> Best Courses</h1>  
        </div>
             <div className="App">
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 my-4'>
                {displayCourses.map((course) => (
                  <Card key={course.id} className="bg-gradient-to-r from-white  via-gray-100 to-gray-200 border  !border-gray-300  focus:border-pink-600 mx-2 my-4 " href={course.platform_link}>
                    <div className="h-50  overflow-hidden">
                    <img src={course.platform_logo} alt={course.platform_name} className="w-20 h-20 h-full object-cover object-cover" />
                    </div>
                    <div className="text-center p-4">
                      <h2 className="text-xl font-bold text-center">{course.platform_name}</h2>
                      <p className="text-sm text-gray-600 text-center mt-2">{course.short_description}</p>
                    </div>
                    
                    <a
                      href={course.platform_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-gray-200 bg-gradient-to-r from-blue-300 via-indigo-500 to-indigo-900 hover:bg-gradient-to-br 
                      focus:ring-4 focus:outline-none focus:ring-indigo-100 dark:focus:ring-indigo-100 
                      shadow-lg shadow-black-500/90 dark:shadow-lg dark:shadow-indigo-400/100 
                      font-medium rounded-lg text-sm py-3 mx-24 text-center mb-2 "
                      >
                      Explore Now
                    </a>
                  </Card>
                ))}
              </div>
              {/* "View More" Button (only shows if there are more items than the limit) */}
              {limit && courses.length > limit && (
              <div className="text-center mt-6 ">
                <button
                  onClick={() => navigate('/')} // Navigate to another page
                  className="w-10 h-10 hover:text-grey-800   bg-gradient-to-r from-white via-gray-200 to-blue-200 transition-colors text-center rounded-full animate-bounce"
                > 
                <svg className="w-6 h-6 text-indigo-800  hover:text-purple-800 dark:text-pink mx-2 my-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                </svg>
      
                  
                </button>
              </div>
              )}
            </div>
    </section>
  )
}

export default Courses
