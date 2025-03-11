import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: '#042159' }}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    {/* Categories Section */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li><a className="text-gray-300 hover:text-pink-500 hover:font-bold">Home</a></li>
                            <li><a className="text-gray-300 hover:text-pink-500 hover:font-bold">Jobs</a></li>
                            <li><a className="text-gray-300 hover:text-pink-500 hover:font-bold">Recruters</a></li>
                            <li><a className="text-gray-300 hover:text-pink-500 hover:font-bold">Admin Panel</a></li>
                        </nav>
                    </div>

                    {/* Customer Service Section */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3 uppercase">Students Service</h2>
                        <nav className="list-none mb-10">
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">24/7 Support</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Personalized Consultation</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Issue Resolution</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Students Feedback</Link></li>
                        </nav>
                    </div>

                    {/* Services Section */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Services</h2>
                        <nav className="list-none mb-10">
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Courses</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Resourses</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Events</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Internships</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Problem Statements</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Projects</Link></li>
                            <li><Link to={'/'} className="text-gray-300 hover:text-pink-500 hover:font-bold">Resume Analysis</Link></li>
                        </nav>
                    </div>

                    {/* Payment Image */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <img src="https://img.freepik.com/free-vector/illustration-with-business-people-design_23-2148468477.jpg?t=st=1740405017~exp=1740408617~hmac=386469e08eaaa61de9883ee243eed601a7c5e5e139b6c716a95d08745a0b04ad&w=1380" alt="Payment Methods" />
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-200">
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={'/'} className="flex">
                        <div className="flex">
                            <h1 className="text-2xl font-bold text-black px-2 py-1 rounded">Event</h1>
                        </div>
                    </Link>
                    
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2025 EduCareer: Smart Learning and Placement  Analytics Hub —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">www.EduCareer.com</a>
                    </p>

                    {/* Social Media Links */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500 hover:text-blue-600">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-blue-400">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-pink-800">
                            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-blue-900">
                            <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}