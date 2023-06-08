import React from 'react';
import { FaArrowRight, FaCheck, FaPhone } from 'react-icons/fa';
const About = () => {
    return (
        <section className="md:flex items-center md:py-20 py-24">
            <div className="relative w-full">
                <img src="https://images.unsplash.com/photo-1667567469453-878cdf593c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Big Photo" className="mb-4 md:ml-20 h-[500px] md:w-[40%] rounded-lg" />
                <img src="https://images.unsplash.com/photo-1543824387-b7359a9e1354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Small Photo" className="absolute top-[10%] left-[40%] h-[70%] w-1/3 rounded-lg md:block hidden" />
                <div className="bg-orange-600 text-white md:rounded-lg rounded-md px-1 text-center md:py-10 absolute bottom-0 md:left-72 left-32 md:w-1/4">
                    <p className="text-3xl "><span className=' text-yellow-300 font-extrabold'>16</span> Years of Experience</p>
                </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-xl text-orange-500 font-bold mb-4">About our School</h2>
                <p className="text-4xl mb-4">
                    Online Graduate School for Adults & Children
                </p>
                <p className="mb-4 inline-flex items-center gap-2"><FaCheck className = " text-orange-500"></FaCheck>Flexible training programs</p>
                <div>
                <p className="mb-4 inline-flex items-center gap-2"><FaCheck className = " text-orange-500"></FaCheck>Experienced teachers</p>
                </div>
               <div>
               <p className="mb-4 inline-flex items-center gap-2"><FaCheck className = " text-orange-500"></FaCheck>Free incoming lessons with right mark</p>
               </div>
                <div className=' md:flex md:items-center md:space-x-10 md:mt-6'>
                <div>
                <button className="bg-orange-600 text-white font-semibold py-4 px-10 rounded-full inline-flex items-center gap-2 hover:bg-black hover:text-gray-50 transition duration-500 ease-in-out">
                    Learn More <FaArrowRight></FaArrowRight>
                </button>
                </div>
                <div className="flex items-center mt-4 space-x-3 md:ml-0 ml-20">
                    <FaPhone className=' text-5xl rounded-full text-green-600 border-green-800 border p-2'/><span className=' font-bold'>+1 (123) 456-7890</span>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;
