import React from 'react'

import PlacementDrives from '../../../hooks/PlacementDrives.hooks';

function ListDrives() {
    const placementDrives = PlacementDrives(); // Use the custom hook

  return (
    <div>
        <div className="bg-blue-200">
                <h2 className="text-2xl font-bold text-center my-4">List Of All Drives</h2>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <th className="px-6 py-3 text-left text-sm font-semibold">Drive ID</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Company ID</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Drive Date</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                    {placementDrives.map((drive) => (
                        <tr key={drive.drive_id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-2"><p className='text-sm text-gray-600'>{drive.drive_id}</p></td>
                        <td className="px-6 py-2"><p className='text-sm text-gray-600'>{drive.company_id}</p></td>
                        <td className="px-6 py-2"><p className='text-sm text-gray-600'>{drive.drive_date}</p></td>
                        <td className="px-6 py-2"><p className='text-sm text-gray-600'>{drive.status}</p></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
      
    </div>
  )
}

export default ListDrives
