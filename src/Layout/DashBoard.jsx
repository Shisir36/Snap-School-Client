import React, { useState } from 'react';
import { FaCamera, FaCheckSquare, FaUser } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const DashBoard = () => {
    const [isAdmin] = useAdmin()

    return (
        <div className='drawer lg:drawer-open'>
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
                    {isAdmin ? <> 
                    <li className=' mt-4'>
                        <NavLink to="/dashboard/manageClass"> <FaCheckSquare></FaCheckSquare>manageClass</NavLink>
                    </li>
                    <li className=' mt-4'>
                        <NavLink to="/dashboard/manageUsers"> <FaCheckSquare></FaCheckSquare>manageClass</NavLink>
                    </li>
                    </> : <>  
                    <li>
                        <NavLink to="/dashboard/selectedClass"><FaUser />My Selected  Classes</NavLink>
                    </li>
                        <li className=' mt-4'>
                            <NavLink> <FaCheckSquare></FaCheckSquare>My Enrolled Classes</NavLink>
                        </li>
                        <li className=' mt-4'>
                            <NavLink to="/dashboard/addClass"> <FaCheckSquare></FaCheckSquare>addClass</NavLink>
                        </li>
                        </>}
                    <div className="divider"></div>
                    <li className=' mt-4'>
                        <NavLink to="/"> <FaCheckSquare></FaCheckSquare>Home</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;
