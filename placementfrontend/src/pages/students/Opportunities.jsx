import React from 'react';
import Layout from '../../components/layout/Layout';
import { Card } from 'flowbite-react';
import MainImg from './elements/Main.png';
import loginImg from './elements/Work_7.png';
import Courses from './pages/Courses.pages.students';
import Internship from './pages/Internship.pages.students';
import Resources from './pages/Resources.pages.students';
import FAQSection from './pages/FAQ.pages.students';
import scrollToSection from './function';
import result from './elements/result.png';
import track from './elements/track.png';
import Hackathons from './pages/Hackathons.pages.studnets';

function Opportunities() {
  return (
    <Layout>
    <section className='p-8 min-h-screen flex flex-col'>
    {/**Admin Section**/}
    
    < div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 flex-grow  ">
      <div className="   hidden lg:block sm:w-3/4">
        
        <img src={MainImg} 
        alt="icon"  
        className="w-full max-w-[600px] h-auto mx-auto" /> {/* Adjust size */}
          
        <h6 className='text-xl font-semibold  mx-4  text-center'>Explore The Opportunities Now!</h6>
        
      </div>
 
      < div className="grid grid-cols-1 h-1/3 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2   gap-4 p-4">
    
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('internship');}} className="max-w-sm bg-gradient-to-r from-indigo-800 via-indigo-800 to-indigo-600 h-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Internship
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Looking for new <span className='font-bold'> opportunities </span> but don't know! <br /> <span className='font-bold'>where to start?</span>
          </p>
     
      </Card>
 
    
      <Card  onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('courses');}} className="max-w-sm  bg-gradient-to-r from-indigo-800 via-indigo-700 via-indigo-800 to-blue-700">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Courses
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Discover top courses from recruiters like 
          <span className='font-bold'> Google, Amazon, Infosys, </span> etc and platforms like 
          <span className='font-bold'> Coursera, Udemy.</span>
          <br />
          <span className='dark:text-yellow-300 font-bold' >Learn Now!</span>
        </p>
      </Card>
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('hackathons');}} className="max-w-sm bg-gradient-to-r from-indigo-800 via-indigo-600 via-indigo-800 to-blue-800">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hackathons
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Hackathons turn learning into action. Explore top platforms hosting events—from 
          <span className='font-bold'> web to Data Science to hardware. </span>
          Find the best one for you!
        </p>
      </Card>
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('resources');}} className="max-w-sm bg-gradient-to-r from-indigo-800 via-indigo-700 via-indigo-800 to-violet-700">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Resourses
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Explore free resources—websites, blogs, e-books, and more.  
        choose the best one which you <span className='font-bold'> Pick what you like! </span> .
        </p>
      </Card>
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('internship');}} className="max-w-sm bg-gradient-to-r from-indigo-800 via-indigo-600 via-indigo-800 to-violet-800">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Practice
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Master skills by applying them—tackle real projects & solve real-world problems!
        </p>
      </Card>
      <Card onClick={(e) => {
        e.stopPropagation(); // Prevent default behavior
        scrollToSection('faq');}} className="max-w-sm bg-gradient-to-r from-indigo-800 via-indigo-700 via-indigo-800 to-indigo-600">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          FAQ
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Do you need any clarification ? Explore the FAQ section..
        </p>
      </Card>
      </div>
    </div>    
    </section>
    <section className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 p-2 bg-gradient-to-r from-indigo-100 via-violet-500 to-violet-800 border-4 border-indigo-100'> 
     
    {/**Image */}
    <div className="pl-15 w-3/4  hidden sm:block">
      <img src={loginImg} alt="icon"  className="w-50 h-200 " /> {/* Adjust size */} 
    </div>
    {/**Cotent */}
    <div className="w-2/3 my-4 py-6 ">
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
          className="w-1/2 bg-white text-indigo-900 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm py-2 px-4 transition-all duration-300"
        >
          Create Profile Now!
        </button>
      </div>
    </div>
    
    {/**Result and Track drive */}
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 p-8 '>
      <a href="opportunities/result" >
      <div  className="max-w-sm p-2  flex flex-row justify-between bg-gradient-to-r from-white-100 to-back-100 border border-indigo-900 rounded-lg shadow-sm   mx-2">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-indigo-900 dark:text-indigo">Results Out</h5>
          <img src={result} alt="icon" className="w-20 h-" />            
      </div></a>
      <a href="opportunities/result" >
      <div className="max-w-sm p-2  flex flex-row justify-between bg-gradient-to-r from-white-100 to-black-100 border border-indigo-900 rounded-lg shadow-sm   mx-2">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-indigo-900 dark:text-indigo">Next Drive</h5>
          <img src={track} alt="icon" className="w-20 h-" />
      </div></a>
    </div>
    </section> 
    <section id='internship'><Internship limit={4} /></section> 
    
    <section id='courses' className='border-t border-gray-200'><Courses limit={4} /></section>
    <section id='resources' className='border-t border-gray-200'><Resources limit={4} /></section>
    <section id='hackathons' className='border-t border-gray-200'><Hackathons limit={4}/></section>
    <section id='faq' className='border-t border-gray-200'><FAQSection  limit={4}/> </section>
    </Layout> 
  )
}

export default Opportunities
