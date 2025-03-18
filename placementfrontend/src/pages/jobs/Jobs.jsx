import React from 'react';
import Layout from '../../components/layout/Layout';
import PlacementDrives from '../../hooks/PlacementDrives.hooks';
import { Card } from 'flowbite-react';
import MainImg from './16.jpg';
function Jobs() {
  const placementDrives = PlacementDrives(); // Use the custom hook
  return (
    <Layout>
    <section>
    {/**Admin Section**/}
    < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2  ">
      <div className=" hidden sm:block">
      <h6 className='text-xl font-semibold mb-4 my-6 mx-4 '>
        <img src={MainImg} alt="icon"  /> {/* Adjust size */}
        <span>What's New...</span> 
      </h6> 
      </div>
      
      < div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 my-4 mx-4">
      <Card href="/admin/companies/top" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Recruiters
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card href="/admin/companies/top" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Recruiters
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card href="/admin/companies/top" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Recruiters
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card href="/admin/companies/top" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Recruiters
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card href="/admin/companies/top" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Recruiters
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card href="/admin/companies/top" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Recruiters
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      </div>
    </div>
  
    
    </section>    
    </Layout> 
  )
}

export default Jobs
