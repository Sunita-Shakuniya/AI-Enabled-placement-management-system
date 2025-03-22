import React from 'react'
import Layout from '../../../components/layout/Layout'
import CalendarView from '../../admin/visualize/CalenderView.admin'
import PlacementDrives from '../../../hooks/PlacementDrives.hooks';

function Result() {
  const placementDrives = PlacementDrives(); // Use the custom hook

  return (
    <div>
        <Layout>
            <h1 className="text-2xl font-bold text-center my-4">Result Section</h1>
            <h6 className='text-center dark:text-sky-400/100 my-4 '>Not Yet Disclosed...!!</h6>
            <h1 className="text-2xl font-bold text-center my-4">Upcomming Drives</h1>  
            <CalendarView placementDrives={placementDrives}/>
        </Layout>
        
      
    </div>
  )
}

export default Result
