import React from 'react';
import { motion } from 'framer-motion';

const Readmore = () => {
    return (
        <div className="bg-gray-100">
            <div
                className="md:h-24 h-20 mt-2 bg-cover md:block hidden"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1486574655068-162e94137442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
                }}
            >
            </div>
            <div className="container mx-auto px-4 mt-2">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <motion.img
                            src="https://images.unsplash.com/photo-1549470764-233f0cd62c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
                            alt="Snap School"
                            className="w-full h-auto rounded-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 font-bold md:text-left text-center">
                        <h1 className=" md:text-5xl text-3xl  font-bold text-black mb-4">Welcome to <span className=' titles'>Snap</span> <span className=' text-orange-500 titles'>School</span></h1>
                        <p className="text-gray-700 mb-6">
                            Are you passionate about photography? At Snap School, we believe that every picture has a story to tell. We are a premier online platform dedicated to the art and craft of photography, providing you with the tools and knowledge to capture stunning images and unleash your creative potential.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Whether you're a beginner taking your first steps in photography or an experienced photographer looking to expand your portfolio, Snap School offers a wide range of courses designed to cater to photographers of all levels. Our team of passionate instructors is here to guide you on your journey, providing you with valuable insights, techniques, and inspiration.
                        </p>
                        <p className="text-gray-700 mb-6">
                            At Snap School, we go beyond technical aspects and dive into the artistry and creativity behind photography. Our courses focus on composition, lighting, perspective, and other elements that help create compelling and impactful images. We believe that photography is more than just a skill; it's a means of self-expression and storytelling.
                        </p>
                        <p className="text-gray-700 mb-6">
                            With our flexible online learning platform, you can learn at your own pace, from anywhere in the world. Dive into high-quality video lessons, engage in interactive discussions with instructors and fellow students, and receive personalized feedback and guidance to elevate your photography skills to new heights.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Join our vibrant community of photographers, where you can connect, share your work, and gain inspiration. Participate in exciting photo contests, take up photography challenges, and explore diverse perspectives that will fuel your creativity. At Snap School, we believe in fostering a supportive environment that encourages growth and learning.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Embark on a transformative journey in photography with Snap School. Unleash your creativity, refine your skills, and capture the world through your unique lens. Let us guide you in your pursuit of photographic excellence and help you become the best photographer you can be.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Readmore;
