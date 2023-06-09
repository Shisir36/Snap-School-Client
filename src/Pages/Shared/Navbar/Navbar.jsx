import React, { useContext, useState } from 'react';
import { NavLink, } from 'react-router-dom';
import wbLogo from "../../../assets/wb-logo/wb-logo-2.png";
import { FaCartPlus, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import Darkreader from 'react-darkreader';
import { Authcontext } from '../../../Provider/AuthProvider';
import useCart from '../../../Hooks/classCart';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { currentUser, logout } = useContext(Authcontext)
    const [classCart] = useCart()
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleLogout = () => {
        logout()
    };

    return (
        <nav className=" md:absolute z-20 w-full">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between " >
                <NavLink to="/" className=" flex items-center gap-0">
                    <img src={wbLogo} alt="" className="md:h-12 md:w-12 h-9 w-9" />
                    <h1 className='titles font-extrabold md:text-4xl text-3xl'>Snap School</h1>
                </NavLink>
                {/* Mobile Nav */}
                <div className="md:hidden">
                    <button
                        onClick={handleNavToggle}
                        type="button"
                        className="focus:outline-none"
                    >
                        <div className="md:hidden">
                            <button
                                onClick={handleNavToggle}
                                type="button"
                                className="focus:outline-none"
                            >
                                {isNavOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center justify-between space-x-5 mx-auto">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-500 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/instructors"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-500 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                        }
                    >
                        Instructors
                    </NavLink>
                    <NavLink
                        to="/classes"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-500 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                        }
                    >
                        Classes
                    </NavLink>
                </div>
                <div className="hidden md:flex items-center ml-auto">
                    <div>
                        {currentUser ? <img
                            src={currentUser ? currentUser.photoURL : ""}
                            className="h-12 w-12 rounded-full ml-2"
                            title={currentUser?.displayName}
                        />
                            : ""

                        }

                    </div>
                    <div className="ml-5">
                        {currentUser ? (
                            <button className="bg-red-500 font-extrabold text-white rounded-md py-2 px-3 mr-3" onClick={handleLogout}>
                                <FaSignOutAlt></FaSignOutAlt>
                            </button>
                        ) : (
                            <NavLink
                                to="/signUp"
                                className={({ isActive }) =>
                                    isActive ? 'text-orange-500 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                                }
                            >
                                <FaUserPlus className=' text-3xl mr-7' />
                            </NavLink>
                        )}
                    </div>
                    <button className=" inline-flex items-center mr-4">
                        <FaCartPlus className=' text-2xl' />
                        <div className="badge badge-secondary">+{classCart?.length || 0}</div>
                    </button>
                    <Darkreader></Darkreader>
                </div>

            </div>

            {/* Mobile Nav Dropdown */}
            {isNavOpen && (
                <div className="md:hidden h-full mx-auto flex flex-col items-center mt-10 "> {/* Added 'flex' and 'items-center' */}
                    <div className="mx-auto text-center">
                        <div className='ml-6 mb-5'>
                            {currentUser ? <img
                                src={currentUser ? currentUser.photoURL : ""}
                                className="h-12 w-12 rounded-full ml-2"
                                title={currentUser?.displayName}
                            />
                                : ""

                            }

                        </div>
                        <div>
                            <div className=' mb-3'>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-600 font-semibold md:text-[23px] text-[19px]'
                                    }
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div className=' mb-3'>
                                <NavLink
                                    to="/instructors"
                                    className={({ isActive }) =>
                                        isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-600 font-semibold md:text-[23px] text-[19px]'
                                    }
                                >
                                    Instructors
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/classes"
                                    className={({ isActive }) =>
                                        isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px] ' : 'text-gray-600 font-semibold md:text-[23px] text-[19px]'
                                    }
                                >
                                    Classes
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <div>
                                <div className="ml-8">
                                    {currentUser ? (
                                        <button
                                            className="bg-red-500 font-extrabold text-white rounded-md mb-4 py-2 px-5 mr-6"
                                            onClick={handleLogout}
                                        >
                                            <FaSignOutAlt></FaSignOutAlt>
                                        </button>
                                    ) : (
                                        <NavLink
                                            to="/signUp"
                                            className={({ isActive }) =>
                                                isActive ? 'text-orange-500 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold md:text-[23px] text-[19px]'
                                            }
                                        >
                                            <FaUserPlus className=' text-3xl mr-7' />
                                        </NavLink>
                                    )}
                                </div>
                                <div className=' md:mt-3 mb-3'>
                                    <button className=" inline-flex items-center md:mr-4">
                                        <FaCartPlus className=' text-2xl' />
                                        <div className="badge badge-secondary">+{classCart?.length || 0}</div>
                                    </button>
                                    <div>
                                    <Darkreader></Darkreader>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;




