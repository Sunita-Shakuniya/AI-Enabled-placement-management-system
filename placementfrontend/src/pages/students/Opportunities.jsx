import React from 'react';
import Layout from '../../components/layout/Layout';
import { Card } from 'flowbite-react';
import MainImg from './elements/16.jpg';
import Courses from './pages/Courses.pages.students';
import Internship from './pages/Internship.pages.students';
import Resources from './pages/Resources.pages.students';
import Hackthons from './pages/Hackthons.pages.studnets';
import FAQSection from './pages/FAQ.pages.students';
import scrollToSection from './function';
import result from './elements/result.png';
import track from './elements/track.png';

function Opportunities() {
  return (
    <Layout>
    <section className='my-8'>
    {/**Admin Section**/}
    < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2  ">
      <div className=" hidden sm:block">
      <h6 className='text-xl font-semibold  mx-4  '>
      
        <img src={MainImg} alt="icon"  className="w-50 h-50 " /> {/* Adjust size */}
         
      </h6> 
      </div>
      
      < div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 my-4 mx-4 lg:w-50 lg:h-40">
    
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('internship');}} className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Internship
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Explore opportunities..
          </p>
     
      </Card>
 
    
      <Card  onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('courses');}} className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Courses
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('hackthons');}} className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hackthons
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('resources');}} className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Resourses
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('internship');}} className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Practice
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('faq');}} className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          FAQ
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          View the list of upcoming placement drives and their details.
        </p>
      </Card>
      </div>
    </div>    
    </section>
    <section className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mx-4 my-4'> 
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 '>
        <a href="opportunities/result" >
        <div  className="max-w-sm p-6  flex flex-row justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-4 mx-2">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Results Out</h5>
            <img src={result} alt="icon" className="w-20 h-" />            
        </div></a>
        <a href="opportunities/result" >
        <div className="max-w-sm p-6 flex flex-row justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-4 mx-2">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Next Drive</h5>
            <img src={track} alt="icon" className="w-20 h-" />
        </div></a>
      </div>
      <div className="w-2/3 px-4 py-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
        {/* Headline */}
        <h1 className="text-2xl font-bold text-white mb-4">Unlock Your Potential!</h1>

        {/* Description with Icons */}
        <div className="space-y-3">
          <p className="text-sm text-blue-100 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385V4.804zM10 4.804A7.968 7.968 0 0114.5 4c1.255 0 2.443.29 3.5.804v10A7.968 7.968 0 0014.5 14c-1.669 0-3.218.51-4.5 1.385V4.804z" />
            </svg>
            Need <strong>Resume Feedback</strong>?
          </p>
          <p className="text-sm text-blue-100 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            <strong> LinkedIn & GitHub </strong> assistance!
          </p>
          <p className="text-sm text-blue-100">Then what are you waiting for?</p>
        </div>

  {/* Call-to-Action Button */}
  <div className="flex mt-6">
    <button
      type="button"
      onClick={() => window.location.href = "#"}
      className="w-full bg-white text-blue-600 hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm py-2 px-4 transition-all duration-300"
    >
      Grab Your Opportunities Now!
    </button>
  </div>
</div>
    </section> 
    <section id='internship'><Internship /></section> 
    
    <section id='courses' className=''><Courses /></section>
    <section id='resources'><Resources /></section>
    <section id='hackthons'><Hackthons /></section>
    <section id='faq'><FAQSection /> </section>
    </Layout> 
  )
}

export default Opportunities
