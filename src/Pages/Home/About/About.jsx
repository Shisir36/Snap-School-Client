import React from "react";
import { FaArrowRight, FaCheck, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="md:flex items-center md:py-20 py-24">
      <div className="relative w-full">
        <motion.img
          src="https://images.unsplash.com/photo-1667567469453-878cdf593c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt="Big Photo"
          className="mb-4 md:ml-20 h-[500px] md:w-[40%] rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 10 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1543824387-b7359a9e1354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="Small Photo"
          className="absolute top-[10%] left-[42%] h-[70%] w-[28%] rounded-lg md:block hidden"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.9, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="bg-orange-600 text-white md:rounded-lg rounded-md px-1 text-center md:py-10 py-10 absolute md:bottom-0 bottom-14 md:left-72 left-44 md:w-1/5 w-[50%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <p className="text-3xl ">
            <span className="text-yellow-300 font-extrabold text-6xl">16</span>
            <br /> Years of Experience
          </p>
        </motion.div>
      </div>
      <div className="md:w-1/2 text-center md:text-left md:mt-0 mt-10">
        <h2 className="text-xl text-orange-500 font-bold mb-4">About our School</h2>
        <motion.p
          className="text-4xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          Online Graduate School for Adults & Children
        </motion.p>
        <motion.p
          className="mb-4 inline-flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          <FaCheck className="text-orange-500" /> Flexible training programs
        </motion.p>
        <motion.p
          className="mb-4 inline-flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
        >
          <FaCheck className="text-orange-500" /> Experienced teachers
        </motion.p>
        <motion.p
          className="mb-4 inline-flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.9 }}
        >
          <FaCheck className="text-orange-500" /> Free incoming lessons with right mark
        </motion.p>
        <motion.div
          className="md:flex md:items-center md:space-x-10 md:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
        >
          <div>
            <motion.button
              className="bg-orange-600 text-white font-semibold py-4 px-10 rounded-full inline-flex items-center gap-2 hover:bg-black hover:text-gray-50 transition duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <FaArrowRight />
            </motion.button>
          </div>
          <div className="flex items-center mt-4 space-x-3 md:ml-0 ml-20">
            <FaPhone className="text-5xl rounded-full text-green-600 border-green-800 border p-2" />
            <span className="font-bold">+1 (123) 456-7890</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
