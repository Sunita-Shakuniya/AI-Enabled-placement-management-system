import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import { fetchHackathons } from '../../../services/hackathons.services';

function HackathonsResource() {
  const [hackathons, sethackathons] = useState([]);
      useEffect(() => {
        async function getData() {
          const data = await fetchHackathons();
          sethackathons(data);
        }
        getData();
      }, []);
  return (
    <div>
      <Navbar/>
      <section className="bg-blue-200 p-4">
        <h1 className="text-2xl font-bold text-center my-4">Hackathons Platforms</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            {/* Table Header */}
            <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Logo</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Platform</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Link</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {hackathons.map((Platform) => (
                <tr key={Platform.id} className="hover:bg-gray-50 transition-colors">
                  {/* Logo */}
                  <td className="px-6 py-4">
                    <img
                      src={Platform.platform_logo}
                      alt={Platform.platform_name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </td>

                  {/* Platform Name */}
                  <td className="px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">{Platform.platform_name}</h2>
                  </td>

                  {/* Description */}
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{Platform.short_description}</p>
                  </td>

                  {/* Action Button */}
                  <td className="px-6 py-4">
                    <p
                      className="text-sm text-gray-600"
                    >
                      {Platform.platform_link}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default HackathonsResource
