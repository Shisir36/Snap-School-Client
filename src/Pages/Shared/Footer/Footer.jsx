import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaSkype, FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import wbLogo from "../../../assets/wb-logo/wb-logo-2.png"
const Footer = () => {
    // Dummy gallery images for demonstration
    const galleryImages = [
        "https://images.unsplash.com/photo-1565004569929-4f400c11e9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1209&q=80",
        "https://images.unsplash.com/photo-1541515929569-1771522cbaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1602445470458-d67e1c9ae852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        "https://images.unsplash.com/photo-1612144788280-c9096c34486a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1542567455-cd733f23fbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ];

    return (
        <div>
            <footer className="bg-gray-800 md:py-8 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-gray-300 text-center md:text-left">
                            <NavLink to="/" className=" flex items-center gap-0 mb-2 ml-16 md:ml-0">
                                <img src={wbLogo} alt="" className="h-10 w-10" />
                                <h1 className='font-bold text-3xl'>Snap School</h1>
                            </NavLink>
                            <p className="text-sm">
                                Our photography school is committed to providing high-quality photography education and training to aspiring photographers. We offer a wide range of courses, workshops, and resources to help you enhance your photography skills and unleash your creative potential.
                            </p>
                            <p className=' inline-flex space-x-1 items-center mt-9'>
                                <FaPhone className=' text-lg text-green-600'></FaPhone> <span className=' font-extrabold text-2xl'>(123) 456-7890</span>
                            </p>
                            <p className="text-sm">
                                Email: info@photographyschool.com
                            </p>
                            <div className='mt-3 inline-flex space-x-5  text-2xl items-center'>
                                <p className=' text-blue-500'><FaFacebook /></p>
                                <p className=' text-sky-400'><FaTwitter /></p>
                                <p className=' text-red-500'><FaInstagram /></p>
                                <p className=' text-sky-300'><FaSkype /></p>
                            </div>
                        </div>
                        <div className="text-gray-300 md:block hidden">
                            <h3 className="text-2xl font-semibold  ">Useful Links</h3>
                            <div className="mt-4 mb-3">
                                <div className="w-full h-0.5 bg-gradient-to-r from-orange-600 to-black" />
                            </div>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/courses" className="text-sm hover:text-orange-700">Courses</a>
                                </li>
                                <li>
                                    <a href="/instructors" className="text-sm hover:text-orange-700">Instructors</a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-sm hover:text-orange-700">Blog</a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-sm hover:text-orange-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className=' md:block hidden'>
                            <h3 className="text-2xl font-semibold   text-white">Galleries</h3>
                            <div className="mt-4 mb-3">
                                <div className="w-full h-0.5 bg-gradient-to-r from-orange-600 to-black" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {galleryImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-full h-full rounded-md"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-700" />
                    <div className="mt-8 text-center text-gray-300">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Snap School. All rights reserved.
                        </p>
                        <p className=' mt-2'>Created by <span className=' titles text-orange-500'>Al Mamun Shisir</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;