import React from 'react'
import Layout from '../../components/layout/Layout'
import { Card } from 'flowbite-react'
import AdminButtons from '../../components/elements/AdminButtons'

function StudentsResources() {
  return (
    <Layout>
        <section > 
        <div className=" flex justify-center w-full ">
            <img src="https://media.istockphoto.com/id/1545800194/vector/sales-performance-isolated-set-financial-profit-growth-increase-in-earnings-people.jpg?s=612x612&w=0&k=20&c=bkq1w9zVBBg5Os-EgNeLxwceBFQtcL-iPk8UH50Hx1k=" alt="Payment Methods" />
        </div>   
            <div>  
                <h1 className="flex justify-center">Welcome to admin company page !!</h1>;
            </div> 
        </section> 
        <section>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
          <Card href="/admin/resources/courses" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Courses
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View the list of upcoming placement drives and their details.
            </p>
          </Card>
          <Card href="/admin/resources/internships" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Internships  
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View the list of upcoming placement drives and their details.
            </p>
          </Card>
          <Card href="/admin/resources/hackthons" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hackthons
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View the list of upcoming placement drives and their details.
            </p>
          </Card>
          <Card href="/admin/resources/references" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              References 
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View the list of upcoming placement drives and their details.
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
