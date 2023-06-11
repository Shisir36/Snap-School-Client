import React, { useState } from 'react';
import { FaCamera, FaCheckSquare, FaCriticalRole, FaHome, FaUser } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { Helmet } from 'react-helmet-async';
import useInstructor from '../Hooks/useInstructor';

const DashBoard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

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
                    <h1 className=' text-4xl '>Student Dashboard</h1>
                    {isAdmin ? (<>
                        <li className=' mt-4'>
                            <NavLink to="/dashboard/manageClass"> <FaCheckSquare></FaCheckSquare>ManageClass</NavLink>
                        </li>
                        <li className=' mt-4'>
                            <NavLink to="/dashboard/manageUsers"> <FaCheckSquare></FaCheckSquare>manageUser</NavLink>
                        </li>
                    </>)


                        : isInstructor ? <> <li className=' mt-4'>
                            <NavLink to="/dashboard/addClass"> <FaCriticalRole></FaCriticalRole>addClass</NavLink>
                        </li>
                        <li className=' mt-4'>
                            <NavLink to="/dashboard/myClasses"> <FaCriticalRole></FaCriticalRole>My Classes</NavLink>
                        </li>
                        
                         </>


                            : <>
                                <li>
                                    <NavLink to="/dashboard/selectedClass"><FaUser />My Selected  Classes</NavLink>
                                </li>
                                <li className=' mt-4'>
                                    <NavLink> <FaCheckSquare></FaCheckSquare>My Enrolled Classes</NavLink>
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
