import React from 'react'
import Layout from '../../components/layout/Layout'
import RecruiterForm from './RecruiterForm'
import coursesImg from './elements/hireImg.png';

function Recruiters() {

  return (
    <div>
      <Layout>
        <section>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 p-4 lg:p-6'>
        <img 
          src={coursesImg} 
          alt="Search" 
          className="w-full max-w-[500px] lg:max-w-[1000px] lg:w-[1000px]" 
        />
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Discover Top Talent from <span className="text-blue-600">[Your College Name]</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Our placement portal gives you direct access to skilled students ready for internships and full-time roles.
          </p>
          {/* CTA Section */}
          <div className="text-center mt-4 pt-2">
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a 
              href="/recruiters/form" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md transition duration-150 text-center"
            >
              Post a New Drive
            </a>
              <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg border border-gray-300 shadow-sm transition duration-150">
                Browse Student Database →
              </button>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">
              Average response time: <span className="font-medium">Under 24 hours</span> from our placement cell
            </p>
          </div>
        </div>                        
      </div>
          {/* Stats Panel */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600 mb-2">85%</p>
                <p className="text-gray-600">Placement Rate (2023)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600 mb-2">200+</p>
                <p className="text-gray-600">Pre-screened Candidates</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600 mb-2">4.8/5</p>
                <p className="text-gray-600">Recruiter Satisfaction</p>
              </div>
            </div>
          </div>
           
        </section>
        {/**Card Container */}
        <section>
          <div className="max-w-6xl mx-auto p-6">
              {/* First Row - Single Full-Width Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recruiter Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Shortlisting Section */}
                <div className="border-r border-gray-200 pr-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">Candidate Shortlisting</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      Filter by CGPA/Skills
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      Bulk select candidates
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      Export to Excel
                    </li>
                  </ul>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Manage Shortlist
                  </button>
                </div>

                {/* List Management Section */}
                <div className="border-r border-gray-200 pr-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">List Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">↻</span>
                      Real-time updates
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✎</span>
                      Edit candidate status
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">📊</span>
                      Track selection progress
                    </li>
                  </ul>
                  <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    Update Lists
                  </button>
                </div>

                {/* New Candidate Evaluation Section */}
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-3">Candidate Evaluation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-2">🛠️</span>
                      Skills analysis
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-2">📚</span>
                      Academic review
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-2">💻</span>
                      Project portfolio
                    </li>
                  </ul>
                  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                    Evaluate Candidates
                  </button>
                </div>
                </div>
              </div>
            {/* Second Row - Two Equal Width Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/*------> Second Row - first column Student Analysis Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Candidate Analysis</h3>
                <ul className="space-y-2">
                  {/* Skills Analysis */}
                  <li 
                    className="flex items-center p-3 rounded-lg transition cursor-pointer border hover:shadow-sm"
                    style={{
                      backgroundColor: 'rgba(239, 246, 255, 0.5)',
                      borderColor: 'rgba(191, 219, 254, 0.5)'
                    }}
                  >
                    <span className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3 flex-shrink-0 text-lg">🛠️</span>
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900">Skills Match</h4>
                      <p className="text-sm text-gray-600">Filter by required technical/soft skills</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">No of candidates</span>
                      
                    </div>
                  </li>

                  {/* Academic Performance */}
                  <li 
                    className="flex items-center p-3 rounded-lg transition cursor-pointer border hover:shadow-sm"
                    style={{
                      backgroundColor: 'rgba(240, 253, 244, 0.5)',
                      borderColor: 'rgba(209, 250, 229, 0.5)'
                    }}
                  >
                    <span className="bg-green-100 text-green-800 p-2 rounded-lg mr-3 flex-shrink-0 text-lg">📚</span>
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900">Academic Screening</h4>
                      <p className="text-sm text-gray-600">Filter by CGPA, backlogs, and department</p>
                    </div>
                  </li>

                  {/* Project Experience */}
                  <li 
                    className="flex items-center p-3 rounded-lg transition cursor-pointer border hover:shadow-sm"
                    style={{
                      backgroundColor: 'rgba(254, 242, 242, 0.5)',
                      borderColor: 'rgba(254, 202, 202, 0.5)'
                    }}
                  >
                    <span className="bg-red-100 text-red-800 p-2 rounded-lg mr-3 flex-shrink-0 text-lg">💻</span>
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900">Project Portfolio</h4>
                      <p className="text-sm text-gray-600">Review GitHub links and project complexity</p>
                    </div>
                  </li>

                  {/* Certifications */}
                  <li 
                    className="flex items-center p-3 rounded-lg transition cursor-pointer border hover:shadow-sm"
                    style={{
                      backgroundColor: 'rgba(245, 243, 255, 0.5)',
                      borderColor: 'rgba(221, 214, 254, 0.5)'
                    }}
                  >
                    <span className="bg-purple-100 text-purple-800 p-2 rounded-lg mr-3 flex-shrink-0 text-lg">🏆</span>
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900">Certification Check</h4>
                      <p className="text-sm text-gray-600">Verify domain-specific certifications</p>
                    </div>
                  </li>
                </ul>
                </div>
                {/* Button */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition shadow-md flex items-center justify-center"
                >
                  Analyze Now
                </button>
              </div>

              {/*-----> Second Row - Second column Create New Drive Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-8">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Hire for</h3>
                  <ul className="space-y-2">
                    {/* Fulltime Option */}
                    <li 
                      className="flex items-center p-3 rounded-lg transition cursor-pointer border hover:shadow-sm"
                      style={{
                        backgroundColor: 'rgba(239, 246, 255, 0.5)',
                        borderColor: 'rgba(191, 219, 254, 0.5)'
                      }}
                    >
                      <span className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3 flex-shrink-0 text-lg">💼</span>
                      <div className="flex-grow">
                        <h4 className="font-medium text-gray-900">Fulltime Positions</h4>
                        <p className="text-sm text-gray-600">Permanent roles with competitive benefits</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">Most Popular</span>
                      </div>
                    </li>

                    {/* Internship Option */}
                    <li 
                      className="flex items-center p-3 rounded-lg transition cursor-pointer border hover:shadow-sm"
                      style={{
                        backgroundColor: 'rgba(240, 253, 244, 0.5)',
                        borderColor: 'rgba(209, 250, 229, 0.5)'
                      }}
                    >
                      <span className="bg-green-100 text-green-800 p-2 rounded-lg mr-3 flex-shrink-0 text-lg">👩‍💻</span>
                      <div className="flex-grow">
                        <h4 className="font-medium text-gray-900">Internship Programs</h4>
                        <p className="text-sm text-gray-600"> Summer Internships <br/> Winter Internships <br /> Graduate opportunities</p>
                      </div>
                    </li>

                    {/* Training Program Option */}
                    <li 
                      className="flex items-center p-3 rounded-lg transition cursor-pointer border hover:shadow-sm"
                      style={{
                        backgroundColor: 'rgba(245, 243, 255, 0.5)',
                        borderColor: 'rgba(221, 214, 254, 0.5)'
                      }}
                    >
                      <span className="bg-purple-100 text-purple-800 p-2 rounded-lg mr-3 flex-shrink-0 text-lg">📚</span>
                      <div className="flex-grow">
                        <h4 className="font-medium text-gray-900">Training Programs</h4>
                        <p className="text-sm text-gray-600">Upskill candidates with specialized courses</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="/recruiters/form" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition shadow-md flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Hire Now
                </a>
              </div>
            </div>
          </div> 
        </section>
        <section>
          
          {/* Footer Note */}
          <div className="text-center text-gray-600 border-t border-gray-200 p-8">
            <p>
              Need help? Contact our placement officer at{' '}
              <a href="mailto:placement@college.edu" className="text-blue-600 hover:underline">
                placement@college.edu
              </a>{' '}
              or <span className="font-medium">+91 XXXXX XXXXX</span>
            </p>
          </div>
          
        </section>
        
      </Layout>
    </div>
  )
}

export default Recruiters
