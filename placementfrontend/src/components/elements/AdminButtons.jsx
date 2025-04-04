import React from 'react'
import icon from './addicon.png'
import { Link } from 'react-router-dom'
function AdminButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <Link to='/admin/addstudent'  className="flex text-black  bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-black-500/90 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-2 py-3 text-center me-2 mb-2 text-white">
        
        <span><span className='font-black'> + </span> student</span> 
      </Link>
      <Link to='/admin/addcompany'   className="flex text-black bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-black-500/90 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-2 py-3 text-center me-2 mb-2 text-white">
        
        <span><span className='font-black'> + </span>company</span> 
      </Link>
    </div>
  )
}

export default AdminButtons
