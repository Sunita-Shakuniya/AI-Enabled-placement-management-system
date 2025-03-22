import React from 'react'
import icon from './addicon.png'
function AdminButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <a href='/admin/addstudent'  className="flex text-black bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-3 focus:ring-purple-300 font-small rounded-full space-x-2 text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        <img src={icon} alt="icon" className="w-6 h-6" /> {/* Adjust size */}
        <span>Student</span> 
      </a>
      <a href='/admin/addcompany'   className="flex text-black bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-3 focus:ring-purple-300 font-small rounded-full space-x-2 text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        <img src={icon} alt="icon" className="w-6 h-6" /> {/* Adjust size */}
        <span>Company</span> 
      </a>
    </div>
  )
}

export default AdminButtons
