import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { fetchinternships } from '../../../services/internship.services';
import { useNavigate } from 'react-router-dom';

function Internship({id, limit}) {
  const navigate = useNavigate();
  const [platforms, setPlatforms] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fetchinternships();
      setPlatforms(data);
    }
    getData();
  }, []);
  const displayInternships = limit ? platforms.slice(0, limit) : platforms;
  return (
    <section className=' p-4 '>
     <h1 className="text-2xl font-bold text-center my-4">Internship Platforms</h1>  
     <div className="App">
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 my-4'>
        {displayInternships.map((platform) => (
          <Card key={platform.id} className="bg-gradient-to-r from-white to-gray-100 mx-2 my-4 " href={platform.platform_link}>
            <div className="h-50 overflow-hidden">
            <img src={platform.platform_logo} alt={platform.platform_name} className="w-20 h-full object-cover object-cover" />
            </div>
            <div className="text-center p-4">
              <h2 className="text-xl font-bold text-center">{platform.platform_name}</h2>
              <p className="text-sm text-gray-600 text-center mt-2">{platform.short_description}</p>
            </div>
            
            <a
              href={platform.platform_link}
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
      {limit && platforms.length > limit && (
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
  );
}

export default Internship;