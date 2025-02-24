import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import myContext from '../../context/data/myContext';

function Navbar() {
    const context = useContext(myContext);
    const [open, setOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Logout = () => {
        localStorage.clear('user');
        window.location.href = "/";
    };

    const currentPath = location.pathname;

    return (
        <div style={{ width: "100%" }} className="bg-white sticky top-0 z-50 w-full">
            {/* Mobile Navigation */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                {/* Close Button */}
                                <div className="flex px-4 pb-2 pt-28">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <RxCross2 />
                                    </button>
                                </div>

                                {/* Sidebar Links */}
                                <div className="flex flex-col space-y-6 border-t border-gray-200 px-4 py-6">
                                    <Link to="/" className="text-sm font-medium text-gray-900">Home</Link>
                                    <Link to="/about" className="text-sm font-medium text-gray-900">About</Link>
                                    <Link to="/jobs" className="text-sm font-medium text-gray-900">Jobs</Link>
                                    <Link to="/recruiters" className="text-sm font-medium text-gray-900">Recruiters</Link>
                                    <Link to="/admin" className="text-sm font-medium text-gray-900">Admin Panel</Link>
                                    {user ? (
                                        <a onClick={Logout} className="text-sm font-medium text-gray-900 cursor-pointer">Logout</a>
                                    ) : (
                                        <Link to="/login" className="text-sm font-medium text-gray-900">Login</Link>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Main Header */}
            <header className="relative bg-white">
                <nav className="px-4 sm:px-6 lg:px-8 shadow-xl">
                    <div className="flex h-16 items-center">
                        {/* Mobile Menu Button */}
                        <button type="button" className="lg:hidden" onClick={() => setOpen(true)}>
                            <span className="sr-only">Open menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="ml-4 flex lg:ml-0">
                            <Link to="/" className="text-2xl font-bold text-black px-2 py-1">EduCareer:<span className='font-medium text-gray-900'>Smart Learning and Placement  Analytics Hub</span></Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="ml-auto hidden lg:flex lg:items-center lg:space-x-6">
                            <Link to="/" className="text-sm font-medium text-gray-900">Home</Link>
                            <Link to="/about" className="text-sm font-medium text-gray-900">About</Link>
                            <Link to="/jobs" className="text-sm font-medium text-gray-900">Jobs</Link>
                            <Link to="/recruiters" className="text-sm font-medium text-gray-900">Recruiters</Link>
                            <Link to="/admin" className="text-sm font-medium text-gray-900">Admin Panel</Link>
                            {user ? (
                                <a onClick={Logout} className="text-sm font-medium text-gray-900 cursor-pointer">Logout</a>
                            ) : (
                                <Link to="/login" className="text-sm font-medium text-gray-900">Login</Link>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
