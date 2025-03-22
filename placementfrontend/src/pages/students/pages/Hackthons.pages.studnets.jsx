import { Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { fetchHackathons } from '../../../services/hackathons.services';

function Hackthons() {
  const [hackathons, sethackathons] = useState([]);
    useEffect(() => {
      async function getData() {
        const data = await fetchHackathons();
        sethackathons(data);
      }
      getData();
    }, []);
  return (
    <section className='bg-green-200 p-4 '>
      <h1 className="text-2xl font-bold text-center my-4">Hackathons Platforms</h1>    
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 my-4'>
            {hackathons.map((platform) => (
              <Card key={platform.id} className="bg-gradient-to-r from-blue-500 to-purple-600 mx-2 my-4 " href={platform.platform_link}>
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
    </section>
  )
}

export default Hackthons
