import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { fetchresourses } from '../../../services/resources.services';

function Resources() {
    const [resources, setresources] = useState([]);
      useEffect(() => {
        async function getData() {
          const data = await fetchresourses();
          setresources(data);
        }
        getData();
      }, []);
  return (
    <section className='bg-gray-200 p-4 '>
     <h1 className="text-2xl font-bold text-center my-4">Top resources Platforms</h1>  
                  <div className="App">
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 my-4'>
                     {resources.map((resource) => (
                       <Card key={resource.id} className="bg-gradient-to-r from-blue-500 to-purple-600 mx-2 my-4 " href={resource.platform_link}>
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
                 </div>
    </section>
  )
}

export default Resources
