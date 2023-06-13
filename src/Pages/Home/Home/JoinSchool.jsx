import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JoinSchool = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Adjust the animation duration as needed
      easing: 'ease-in-out', // Adjust the animation easing as needed
    });
  }, []);

  return (
    <div className="relative h-96">
      <div className="flex justify-center items-center h-full bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1611241893603-3c359704e0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)` }}>
        <div className="text-center px-3">
          <h1 className="text-xl font-bold text-orange-600" data-aos="fade-up">Join our school</h1>
          <p className="mt-1 md:text-5xl text-3xl text-white mb-6" data-aos="fade-up" data-aos-delay="200">Ready to start learning? Sign up now!</p>
          <button className="mt-4 bg-orange-600 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 hover:bg-black hover:text-gray-50 transition duration-500 ease-in-out">
            Learn More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinSchool;
