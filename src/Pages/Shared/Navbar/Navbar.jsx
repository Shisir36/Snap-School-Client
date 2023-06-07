import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import wbLogo from "../../../assets/wb-logo/wb-logo-2.png";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleLogout = () => {
    };

    return (
        <nav className="shadow-sm ">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between " >
                <NavLink to="/" className=" flex items-center gap-0">
                    <img src={wbLogo} alt="" className="h-12 w-12" />
                    <h1 className='font-bold text-3xl'>Snap School</h1>
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
                <div className="hidden md:flex md:items-center justify-center space-x-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/instructors"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
                        }
                    >
                        Instructors
                    </NavLink>
                    <NavLink
                        to="/classes"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
                        }
                    >
                        Classes
                    </NavLink>
                    <NavLink
                        to="/signUp"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
                        }
                    >
                        Sign Up
                    </NavLink>
                </div>

                <div className="hidden md:flex items-center">
                    {/* <div>
                        <img
                            src={currentUser ? currentUser.photoURL : "https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"}
                            alt="User"
                            className="h-12 w-12 rounded-full ml-2"
                            title={currentUser?.displayName}
                        />
                    </div> */}
                    {/* <div className="ml-5">
                        {currentUser ? (
                            <button className="bg-red-500 font-bold text-white rounded-md py-2 px-4 mr-2" onClick={handleLogout}>
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="bg-[#FF6799] font-bold text-white rounded-md py-2 px-4 mr-2">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div> */}
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isNavOpen && (
                <div className="md:hidden h-full mx-auto flex flex-col items-center mt-10 "> {/* Added 'flex' and 'items-center' */}
                    <div className="mx-auto text-center">
                        {/* <div className="ml-7 mb-5">
                            <img
                                src={
                                    currentUser
                                        ? currentUser.photoURL
                                        : "https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"
                                }
                                alt="User"
                                className="h-12 w-12 rounded-full ml-2"
                                title={currentUser?.displayName}
                            />
                        </div> */}
                        <div>
                         <div className=' mb-3'>
                         <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
                                }
                            >
                                Home
                            </NavLink>
                         </div>
                         <div className=' mb-3'>
                         <NavLink
                                to="/instructors"
                                className={({ isActive }) =>
                                    isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
                                }
                            >
                                Instructors
                            </NavLink>
                         </div>
                            <div>
                            <NavLink
                                to="/classes"
                                className={({ isActive }) =>
                                    isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
                                }
                            >
                                Classes
                            </NavLink>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <div>
                                {/* <div className="ml-8">
                                    {currentUser ? (
                                        <button
                                            className="bg-red-500 font-bold text-white rounded-md mb-4 py-2 px-5 mr-2"
                                            onClick={handleLogout}
                                        >
                                            <FaSignOutAlt></FaSignOutAlt>
                                        </button>
                                    ) : (
                                        <Link to="/login">
                                            <button className="bg-[#FF6799] font-bold text-white rounded-md py-2 px-4 mr-6 mb-4">
                                                Login
                                            </button>
                                        </Link>
                                    )}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;


// <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// {user && user.email ? (
//     <div>
//         <div className="flex items-center">
//             <div className="mr-3">{/* User profile picture */}</div>
//             <button
//                 onClick={handleLogout}
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//                 Logout
//             </button>
//         </div>
//     </div>
// ) : (
//     <Link
//         to="/login"
//         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//     >
//         Login
//     </Link>
// )}
// </div>











// <div className="hidden md:block">
// {user && user.email ? (
//     <div className="flex items-center">
//         <div className="mr-3">{/* User profile picture */}</div>
//         <button
//             onClick={handleLogout}
//             className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//         >
//             Logout
//         </button>
//     </div>
// ) : (
//     <Link
//         to="/login"
//         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     >
//         Login
//     </Link>
// )}
// </div>









// import React, { useContext, useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import wbLogo from "../../../assets/wb-logo/wb-logo-2.png";

// const Navbar = () => {
//     const [isNavOpen, setIsNavOpen] = useState(false);
//     const handleNavToggle = () => {
//         setIsNavOpen(!isNavOpen);
//     };

//     const handleLogout = () => {
//     };

//     return (
//         <nav className="shadow-sm " style={{ background: 'linear-gradient(to right, rgba(74, 205, 213, 0.1), rgba(255, 103, 153, 0.1))' }}>
//             <div className="container mx-auto px-4 py-3 flex items-center justify-between " >
//                 <NavLink to="/" className="font-bold text-3xl flex items-center gap-0">
//                     <img src={wbLogo} alt="" className="h-12 w-12" />
//                     <span>Snap School</span>
//                 </NavLink>

//                 {/* Mobile Nav */}
//                 <div className="md:hidden">
//                     <button
//                         onClick={handleNavToggle}
//                         type="button"
//                         className="focus:outline-none"
//                     >
//                         <div className="md:hidden">
//                             <button
//                                 onClick={handleNavToggle}
//                                 type="button"
//                                 className="focus:outline-none"
//                             >
//                                 {isNavOpen ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-6 w-6"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M6 18L18 6M6 6l12 12"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-6 w-6"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M4 6h16M4 12h16m-7 6h7"
//                                         />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </button>
//                 </div>

//                 {/* Desktop Nav */}
//                 <div className="hidden md:flex md:items-center justify-center">
//                     <NavLink
//                         to="/"
//                         className={({ isActive }) =>
//                             isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
//                         }
//                     >
//                         Home
//                     </NavLink>
//                     <NavLink
//                         to="/instructors"
//                         className={({ isActive }) =>
//                             isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
//                         }
//                     >
//                         Instructors
//                     </NavLink>
//                     <NavLink
//                         to="/classes"
//                         className={({ isActive }) =>
//                             isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
//                         }
//                     >
//                         Classes
//                     </NavLink>
//                 </div>

//                 <div className="hidden md:flex items-center">
//                     {/* <div>
//                         <img
//                             src={currentUser ? currentUser.photoURL : "https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"}
//                             alt="User"
//                             className="h-12 w-12 rounded-full ml-2"
//                             title={currentUser?.displayName}
//                         />
//                     </div> */}
//                     {/* <div className="ml-5">
//                         {currentUser ? (
//                             <button className="bg-red-500 font-bold text-white rounded-md py-2 px-4 mr-2" onClick={handleLogout}>
//                             </button>
//                         ) : (
//                             <Link to="/login">
//                                 <button className="bg-[#FF6799] font-bold text-white rounded-md py-2 px-4 mr-2">
//                                     Login
//                                 </button>
//                             </Link>
//                         )}
//                     </div> */}
//                 </div>
//             </div>

//             {/* Mobile Nav Dropdown */}
//             {isNavOpen && (
//                 <div className="md:hidden h-full mx-auto flex flex-col items-center mt-10 "> {/* Added 'flex' and 'items-center' */}
//                     <div className="mx-auto text-center">
//                         {/* <div className="ml-7 mb-5">
//                             <img
//                                 src={
//                                     currentUser
//                                         ? currentUser.photoURL
//                                         : "https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"
//                                 }
//                                 alt="User"
//                                 className="h-12 w-12 rounded-full ml-2"
//                                 title={currentUser?.displayName}
//                             />
//                         </div> */}
//                         <div>
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive }) =>
//                                     isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
//                                 }
//                             >
//                                 Home
//                             </NavLink>
//                             <NavLink
//                                 to="/instructors"
//                                 className={({ isActive }) =>
//                                     isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
//                                 }
//                             >
//                                 Instructors
//                             </NavLink>
//                             <NavLink
//                                 to="/classes"
//                                 className={({ isActive }) =>
//                                     isActive ? 'text-orange-400 font-bold text-xl' : 'text-gray-600 font-semibold text-xl'
//                                 }
//                             >
//                                 Classes
//                             </NavLink>
//                         </div>
//                         <div className="flex gap-3 mt-4">
//                             <div>
//                                 {/* <div className="ml-8">
//                                     {currentUser ? (
//                                         <button
//                                             className="bg-red-500 font-bold text-white rounded-md mb-4 py-2 px-5 mr-2"
//                                             onClick={handleLogout}
//                                         >
//                                             <FaSignOutAlt></FaSignOutAlt>
//                                         </button>
//                                     ) : (
//                                         <Link to="/login">
//                                             <button className="bg-[#FF6799] font-bold text-white rounded-md py-2 px-4 mr-6 mb-4">
//                                                 Login
//                                             </button>
//                                         </Link>
//                                     )}
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;