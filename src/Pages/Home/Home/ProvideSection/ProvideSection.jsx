import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import 'aos/dist/aos.css';
import Aos from 'aos';

const ProvideSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        Aos.refresh();
    };

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <section
            className="py-20 md:bg-cover bg-center"
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1521116583201-926fc9be4184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f"` }}
        >
            <div className=" mt-20 md:ml-10">
                <h2 className="titles md:text-7xl text-5xl text-center md:text-left font-bold text-white mb-8" data-aos="fade-up" data-aos-duration="1000">
                    Cognitive <br />
                    Video Lessons <br />
                    by Zoom
                </h2>
                <div className="md:flex  md:mt-0 mt-10 md:gap-3 md:ml-0 ml-20">
                    <button className="bg-orange-600 hover:bg-black text-gray-50 font-semibold md:px-14 px-10 py-4 rounded-full flex items-center space-x-1 " data-aos="fade-up">
                        <span>Read More</span>
                        <FaArrowRight />
                    </button>
                    <div className="flex items-center space-x-4 md:mt-0 mt-5">
                        <div className='flex items-center space-x-4 ' data-aos="fade-up">
                            <button onClick={openModal} className="bg-white hover:bg-black text-orange-600 transition duration-500 ease-in-out  hover:text-white font-semibold px-6 py-6 rounded-full ml-4 inline-flex items-center" >
                                <FaPlay />
                            </button>
                            <p><span className='text-white font-semibold titles'>Watch video</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <button className="modal-close" onClick={closeModal}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6L6 18"></path>
                                    <path d="M6 6L18 18"></path>
                                </svg>
                            </button>
                            <div className="modal-content">
                                <div className="p-5">
                                    <iframe
                                        title="Video"
                                        width="100%"
                                        height="280"
                                        src="https://www.youtube.com/embed/nKM3jkEOpuE"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProvideSection;
