import React, { useContext } from 'react';
import { FaCamera, FaCartPlus, FaChalkboard, FaCheckSquare, FaHome, FaPlusCircle, FaUserCog, FaCog } from 'react-icons/fa';
import { BsCash, BsFillBookmarkCheckFill, BsFillSuitHeartFill } from "react-icons/bs";
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { Helmet } from 'react-helmet-async';
import useInstructor from '../Hooks/useInstructor';
import { Authcontext } from '../Provider/AuthProvider';
import useCart from '../Hooks/classCart';
import { motion } from 'framer-motion';

const DashBoard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { currentUser } = useContext(Authcontext)
    const [classCart] = useCart()

    const drawerVariants = {
        open: { x: 0 },
        closed: { x: '-100%' }
    };

    const overlayVariants = {
        open: { opacity: 1, pointerEvents: 'auto' },
        closed: { opacity: 0, pointerEvents: 'none' }
    };

    return (
        <div className='drawer lg:drawer-open'>
            <Helmet>
                <title>Snap School | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open DashBoard
                </label>
            </div>
            <motion.div
                className="drawer-side bg-[#bd6c46]"
                initial="closed"
                animate="open"
                variants={drawerVariants}
                transition={{ duration: 0.5 }}
            >
                <motion.label
                    htmlFor="my-drawer-2"
                    className="drawer-overlay"
                    variants={overlayVariants}
                    transition={{ duration: 0.5 }}
                ></motion.label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {/* Sidebar content here */}
                    {isAdmin ? (
                        <>
                            <div className='md:mx-auto md:text-center'>
                                <img className='h-16 w-16 rounded-full md:ml-5' src={currentUser.photoURL} alt="" />
                                <h2 className='text-xl'>{currentUser.displayName}</h2>
                                <h2 className='text-3xl font-bold'>Admin</h2>
                            </div>
                            <div className="divider"></div>
                            <li className='mt-4'>
                                <NavLink to="/dashboard/manageClass"> <FaChalkboard className='text-xl text-teal-400'></FaChalkboard>Manage Class</NavLink>
                            </li>
                            <li className='mt-4'>
                                <NavLink to="/dashboard/manageUsers"> <FaUserCog className='text-xl text-primary-focus'></FaUserCog>Manage User</NavLink>
                            </li>
                        </>
                    ) : isInstructor ? (
                        <>
                            <div className='md:mx-auto md:text-center'>
                                <img className='h-16 w-16 rounded-full md:ml-5' src={currentUser.photoURL} alt="" />
                                <h2 className='text-xl'>{currentUser.displayName}</h2>
                                <h2 className='text-3xl font-bold'>Instructor</h2>
                            </div>
                            <div className="divider"></div>
                            <li className='mt-4 font-bold'>
                                <NavLink to="/dashboard/addClass"> <FaPlusCircle className='text-xl text-green-500' ></FaPlusCircle >Add Class</NavLink>
                            </li>
                            <li className='mt-4 font-bold'>
                                <NavLink to="/dashboard/myClasses"> <FaCamera className='text-xl text-red-600 '></FaCamera>My Classes</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <div className='md:mx-auto md:text-center'>
                                <img className='h-16 w-16 rounded-full md:ml-5' src={currentUser.photoURL} alt="" />
                                <h2 className='text-xl'>{currentUser.displayName}</h2>
                                <h2 className='text-3xl font-bold'>Student</h2>
                            </div>
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/dashboard/selectedClass">
                                    <button className="inline-flex items-center">
                                        <FaCartPlus className='text-2xl' />
                                        <div className="badge  badge-warning">+{classCart?.length || 0}</div>
                                    </button>
                                </NavLink>
                            </li>
                            <li className='mt-4'>
                                <NavLink to="/dashboard/myenrolledclasses"> <BsFillSuitHeartFill className='text-xl text-red-600'></BsFillSuitHeartFill>My Enrolled Classes</NavLink>
                            </li>
                            <li className='mt-4'>
                                <NavLink to="/dashboard/paymenthistory"> <BsCash className='text-xl text-green-500'></BsCash>Payment History</NavLink>
                            </li>
                        </>
                    )}
                    <div className="divider"></div>
                    <li className='mt-4'>
                        <NavLink to="/"> <FaHome className='text-2xl text-cyan-400'></FaHome>Home</NavLink>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default DashBoard;
