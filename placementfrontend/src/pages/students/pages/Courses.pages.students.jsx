import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import { fetchcourses } from '../../../services/courses.services';
function Courses() {
    const [courses, setcourses] = useState([]);
      useEffect(() => {
        async function getData() {
          const data = await fetchcourses();
          setcourses(data);
        }
        getData();
      }, []);
  return (
    <section className='bg-blue-200 p-4 '>
        <h1 className="text-2xl font-bold text-center my-4">Top Courses Platforms</h1>  
             <div className="App">
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 my-4'>
                {courses.map((course) => (
                  <Card key={course.id} className="bg-gradient-to-r from-blue-500 to-purple-600 mx-2 my-4 " href={course.platform_link}>
                    <div className="h-50 overflow-hidden">
                    <img src={course.platform_logo} alt={course.platform_name} className="w-20 h-full object-cover object-cover" />
                    </div>
                    <div className="text-center p-4">
                      <h2 className="text-xl font-bold text-center">{course.platform_name}</h2>
                      <p className="text-sm text-gray-600 text-center mt-2">{course.short_description}</p>
                    </div>
                    
                    <a
                      href={course.platform_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                      Explore Now
                    </a>
                  </Card>
                ))}
              </div>
            </div>
    </section>
  )
}

export default Courses
