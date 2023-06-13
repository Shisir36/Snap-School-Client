import React, { useContext, useState } from 'react';
import { FaBookmark, FaCamera, FaCheckSquare,  FaHome, } from 'react-icons/fa';
import { BsFillBookmarkCheckFill, BsFillSuitHeartFill} from "react-icons/bs";
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { Helmet } from 'react-helmet-async';
import useInstructor from '../Hooks/useInstructor';
import { Authcontext } from '../Provider/AuthProvider';

const DashBoard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const {currentUser} = useContext(Authcontext)

    return (

        <div className='drawer lg:drawer-open'>
            <Helmet>
                <title>Snap School | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side bg-[#bd6c46]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {/* Sidebar content here */}
                    
                    {isAdmin ? (<>
                        <div className=' mx-auto text-center'>
                          <img className=' h-16 w-16 rounded-full ml-5' src={currentUser.photoURL} alt="" />
                          <h2 className='text-xl'>{currentUser.displayName}</h2>
                        <h2 className=' text-3xl font-bold'>Admin</h2>
                          </div>
                        <div className="divider"></div>
                        <li className=' mt-4'>
                            <NavLink to="/dashboard/manageClass"> <FaCheckSquare></FaCheckSquare>ManageClass</NavLink>
                        </li>
                        <li className=' mt-4'>
                            <NavLink to="/dashboard/manageUsers"> <FaCheckSquare></FaCheckSquare>manageUser</NavLink>
                        </li>
                    </>)


                        : isInstructor ? <>
                        <div className=' mx-auto text-center'>
                          <img className=' h-16 w-16 rounded-full ml-5' src={currentUser.photoURL} alt="" />
                          <h2 className='text-xl'>{currentUser.displayName}</h2>
                        <h2 className=' text-3xl font-bold'>Instructor</h2>
                          </div>
                        <div className="divider"></div>
                        
                         <li className=' mt-4'>
                            <NavLink to="/dashboard/addClass"> <FaBookmark></FaBookmark>Add Class</NavLink>
                        </li>
                        <li className=' mt-4'>
                            <NavLink to="/dashboard/myClasses"> <FaCamera></FaCamera>My Classes</NavLink>
                        </li>
                        
                         </>


                            : <>
                          <div className=' mx-auto text-center'>
                          <img className=' h-16 w-16 rounded-full ml-5' src={currentUser.photoURL} alt="" />
                          <h2 className='text-xl'>{currentUser.displayName}</h2>
                         <h2 className=' text-3xl font-bold'>Student</h2>
                          </div>
                        <div className="divider"></div>
                                <li>
                                    <NavLink to="/dashboard/selectedClass"><BsFillBookmarkCheckFill className=' text-green-500'></BsFillBookmarkCheckFill>My Selected  Classes</NavLink>
                                </li>
                                <li className=' mt-4'>
                                    <NavLink to= "/dashboard/myenrolledclasses"> <BsFillSuitHeartFill className=' text-xl text-red-600'></BsFillSuitHeartFill>My Enrolled Classes</NavLink>
                                </li>
                            </>}
                    <div className="divider"></div>
                    <li className=' mt-4'>
                        <NavLink to="/"> <FaHome className=' text-2xl'></FaHome>Home</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;
