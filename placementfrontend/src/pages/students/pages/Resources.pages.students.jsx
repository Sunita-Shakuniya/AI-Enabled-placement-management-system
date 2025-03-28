import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { fetchresourses } from '../../../services/resources.services';

function Resources({limit}) {
    const [resources, setresources] = useState([]);
      useEffect(() => {
        async function getData() {
          const data = await fetchresourses();
          setresources(data);
        }
        getData();
      }, []);
      const displayResources = limit ? resources.slice(0, limit) : resources;  
  return (
    <section className=' p-4 '>
     <h1 className="text-2xl font-bold text-center my-4">Top resources Platforms</h1>  
                  <div className="App">
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 my-4'>
                     {displayResources.map((resource) => (
                       <Card key={resource.id} className="bg-gradient-to-r from-white to-gray-100 mx-2 my-4 " href={resource.platform_link}>
                         <div className="h-50 overflow-hidden">
                         <img src={resource.platform_logo} alt={resource.platform_name} className="w-20 h-full object-cover object-cover" />
                         </div>
                         <div className="text-center p-4">
                           <h2 className="text-xl font-bold text-center">{resource.platform_name}</h2>
                           <p className="text-sm text-gray-600 text-center mt-2">{resource.short_description}</p>
                         </div>
                         
                         <a
                           href={resource.platform_link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mt-4 inline-block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                         >
                           Explore Now
                         </a>
                       </Card>
                     ))}
                   </div>
                   {/* "View More" Button (only shows if there are more items than the limit) */}
                  {limit && resources.length > limit && (
                    <div className="text-center mt-6 ">
                      <button
                        onClick={() => navigate('/')} // Navigate to another page
                        className="w-10 h-10 hover:text-grey-800   bg-gradient-to-r from-white via-gray-200 to-blue-200 transition-colors text-center rounded-full animate-bounce"
                      > 
                      <svg className="w-6 h-6 text-indigo-800  hover:text-purple-800 dark:text-pink mx-2 my-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                      </svg>
            
                        
                      </button>
                    </div>
                  )}
                 </div>
    </section>
  )
}

export default Resources
