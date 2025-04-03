import React from 'react'
import Layout from '../../components/layout/Layout'
import { Card } from 'flowbite-react'
import AdminButtons from '../../components/elements/AdminButtons'
import headerImg from './elements/stdMain.png';
function StudentsResources() {
  return (
    <Layout>
        <section > 
        <div className=" flex justify-center w-full ">
            <img src={headerImg} alt="Search" className=" left- top- h- w- opacity-" style={{ height: "200px" }}/>
          </div>   
          <div>  
              <h1 className="flex text-2xl font-bold text-center my-2 text-indigo-800 justify-center">Welcome To  Student Resource Related Details!</h1>;
          </div>  
        </section> 
        <section>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
          <Card href="/admin/resources/courses" className="max-w-sm bg-gradient-to-r from-indigo-700 to-violet-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  ">
              Courses
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Explore the list courses platform or add new
            </p>
          </Card>
          <Card href="/admin/resources/internships" className="max-w-sm bg-gradient-to-r from-indigo-600 to-violet-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Internships  
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Add new <span className='font-bold'> opportunities </span> 
            </p>
          </Card>
          <Card href="/admin/resources/hackathons" className="max-w-sm bg-gradient-to-r from-indigo-700 to-violet-800">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hackathons
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Explore the platforms added to hackathons. 
              <span className='font-bold'> found something new ?
              </span>
            </p>
          </Card>
          <Card href="/admin/resources/references" className="max-w-sm bg-gradient-to-r from-indigo-800 to-violet-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              References 
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Wanna add new website or github or new blogs.
            </p>
          </Card>
        {/* Add more cards here */}
        </div>
        </section>
        
        <AdminButtons/>
    </Layout>
  )
}

export default StudentsResources
