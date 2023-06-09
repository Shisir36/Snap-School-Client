import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImage1 from "../../../../assets/banner-image/7xm.jpg"
import bannerImage2 from "../../../../assets/banner-image/bannerImg-3.jpg"
import bannerImage3 from "../../../../assets/banner-image/bannerImg-4.jpg"
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
        >
            <div className="carousel-slide relative">
                <img className="w-full md:h-[800px] h-[550px]" src={bannerImage1} alt="Slide 1" />
                <div className="carousel-content absolute md:top-[230px] top-[55px] md:left-5 md:p-8 p-0 text-white md:text-left text-center">
                    <h3 className=" font-bold mb-7 md:text-6xl text-[44px] md:text-left text-center">Learn from <br /> <span className='text-black mt-2'> Expert Instructors</span></h3>
                    <p className="text-lg mb-6">
                        Expand your photography skills with our experienced instructors.
                    </p>
                    <div className="carousel-buttons">
                        <button className="signup-button mb-3 bg-orange-600 text-white font-semibold md:px-12   py-5   px-8 rounded-full mr-4 inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out">
                            <span>Sign Up</span>
                            <FaArrowRight className="ml-1" />
                        </button>
                        <button className="readmore-button bg-gray-900 text-white font-semibold md:px-12   py-5   px-8 rounded-full inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900  transition duration-500 ease-in-out">
                            <span>Read More</span> <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-slide relative">
                <img className="w-full md:h-[800px] h-[550px]" src={bannerImage2} alt="Slide 2" />
                <div className="carousel-content absolute md:top-[230px] top-[55px] md:left-5 md:p-8 p-0 text-white md:text-left text-center">
                    <h3 className="font-bold mb-7 md:text-6xl  md:text-left  text-[44px] text-center">Explore a  <br /> <span className='text-black mt-2'> Variety of Courses</span></h3>
                    <p className="text-lg mb-6">
                        Discover a wide range of photography courses tailored to your interests.
                    </p>
                    <div className="carousel-buttons">
                        <button className="signup-button mb-3 bg-orange-600 text-white font-semibold md:px-12   py-5   px-8 rounded-full mr-4 inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900  transition duration-500 ease-in-out">
                            <span>Sign Up</span> <FaArrowRight />
                        </button>
                        <button className="readmore-button bg-gray-900 text-white font-semibold md:px-12   py-5   px-8 rounded-full inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900  transition duration-500 ease-in-out">
                            <span>Read More</span> <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-slide relative">
                <img className="w-full md:h-[800px] h-[550px]" src={bannerImage3} alt="Slide 3" />
                <div className="carousel-content absolute md:top-[230px] top-[55px] md:right-5 md:p-8 p-0 text-white md:text-left text-center">
                    <h3 className="font-bold mb-7 md:text-6xl text-[44px] md:text-left text-center">Unlock Your  <br /> <span className='text-black mt-2'> Creative Potential</span></h3>
                    <p className="text-lg mb-6">
                        Unleash your creativity and capture stunning photographs.
                    </p>
                    <div className="carousel-buttons">
                        <button className="signup-button mb-3 bg-orange-600 text-white font-semibold md:px-12   py-5   px-8 rounded-full mr-4 inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900  transition duration-500 ease-in-out">
                            <span>Sign Up</span> <FaArrowRight />
                        </button>
                        <button className="readmore-button bg-gray-900 text-white font-semibold md:px-12   py-5   px-8 rounded-full inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900  transition duration-500 ease-in-out">
                            <span>Read More</span> <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;
