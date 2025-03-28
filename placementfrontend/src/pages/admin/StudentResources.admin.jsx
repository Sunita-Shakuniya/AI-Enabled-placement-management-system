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
              Explore our top list courses platforms which include recruiters such as 
              <span className='font-bold'> google, Amazon, Infosys,.. </span> etc as well as platform such as  
              <span className='font-bold'> coursera, unstop, udemy,.. </span> etc. 
              <br />
              <span className='dark:text-yellow-900 font-bold' >Learn Now!</span>
            </p>
          </Card>
          <Card href="/admin/resources/internships" className="max-w-sm bg-gradient-to-r from-indigo-600 to-violet-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Internships  
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Looking for new <span className='font-bold'> opportunities </span> but don't know! <br /> <span className='font-bold'>where to start?</span>
            </p>
          </Card>
          <Card href="/admin/resources/hackthons" className="max-w-sm bg-gradient-to-r from-indigo-700 to-violet-800">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hackthons
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Hacthons bring real leaning application.Explore the platforms which host hackthons and 
              <span className='font-bold'> choose the best 
              </span> which suit's you form web to Data Science to hardware edition.
            </p>
          </Card>
          <Card href="/admin/resources/references" className="max-w-sm bg-gradient-to-r from-indigo-800 to-violet-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              References 
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Learning can interesting and engaging if you explore the right platform.Reffer website, blogs, E-books,..etc resourses for free! 
              <br /> choose the best one which you <span className='font-bold'> like! </span> .
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
