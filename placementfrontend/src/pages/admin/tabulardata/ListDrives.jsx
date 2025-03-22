import React from 'react'

import PlacementDrives from '../../../hooks/PlacementDrives.hooks';

function ListDrives() {
    const placementDrives = PlacementDrives(); // Use the custom hook

  return (
    <div>
        <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Drives</h2>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Drive ID</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Company ID</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Drive Date</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {placementDrives.map((drive) => (
                        <tr key={drive.drive_id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-2">{drive.drive_id}</td>
                        <td className="px-6 py-2">{drive.company_id}</td>
                        <td className="px-6 py-2">{drive.drive_date}</td>
                        <td className="px-6 py-2">{drive.status}</td>
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
