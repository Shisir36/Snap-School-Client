import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const JoinSchool = () => {
  return (
    <div className="flex justify-center items-center h-96 bg-black bg-opacity-60 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)` }}>
      <div className="text-center">
        <h1 className="text-xl font-bold text-orange-600 titles">Join our school</h1>
        <p className="mt-2 md:text-5xl text-4xl text-white titles mb-7">Ready to start learning? Sign up now!</p>
        <button className="bg-orange-600 text-white font-semibold py-4 px-10 rounded-full inline-flex items-center gap-2 hover:bg-black hover:text-gray-50 transition duration-500 ease-in-out">
          Learn More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default JoinSchool;

