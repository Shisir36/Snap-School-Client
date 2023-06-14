import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImage1 from "../../../../assets/banner-image/7xm.jpg"
import bannerImage2 from "../../../../assets/banner-image/bannerImg-3.jpg"
import bannerImage3 from "../../../../assets/banner-image/number-3.jpg"
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            swipeable={true}
            emulateTouch={true}
        >
            <div className="carousel-slide relative">
                <img className="w-full md:h-[800px] h-[550px]" src={bannerImage1} alt="Slide 1" />
                <div className="carousel-content absolute md:w-2/4 md:top-[230px] top-[55px] md:left-5 md:p-8 p-0 text-white md:text-left text-center md:mt-0 mt-7">
                    <h3 className="font-bold md:mb-7 mb-3 md:text-7xl text-[44px] md:text-left text-center">Learn from <br /> <span className='text-black md:mt-2'><span className=' titles'>Expert</span> Instructors</span></h3>
                    <p className="text-lg text-gray-700 mb-6 font-semibold">
                        Expand your photography skills with our experienced instructors. Learn the latest techniques and master the art of capturing stunning photographs.
                    </p>
                    <div className=" ">
                        <Link to="/signUp">
                        <button className="signup-button mb-3 bg-orange-600 text-white font-semibold md:px-12 py-5 px-8 rounded-full mr-4 inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out">
                            <span>Sign Up</span>
                            <FaArrowRight className="ml-1" />
                        </button>
                        </Link>
                        <button className="readmore-button bg-gray-900 text-white font-semibold md:px-12 py-5 px-8 rounded-full inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out">
                            <span>Read More</span> <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-slide relative">
                <img className="w-full md:h-[800px] h-[550px]" src={bannerImage2} alt="Slide 2" />
                <div className="carousel-content absolute md:w-2/4 md:top-[230px] top-[55px] md:left-5 md:p-8 p-0 text-white md:text-left text-center md:mt-0 mt-7">
                    <h3 className="font-bold md:mb-7 mb-3 md:text-7xl text-[44px] md:text-left text-center">Explore a  <br /> <span className='text-black md:mt-2'><span className=' titles'>Variety</span> of Courses</span></h3>
                    <p className="text-lg text-gray-700 mb-6 font-semibold">
                        Discover a wide range of photography courses tailored to your interests. From landscape photography to portrait photography, we have courses that cater to all skill levels.
                    </p>
                    <div className="carousel-buttons">
                        <Link to="/signUp">
                        <button className="signup-button mb-3 bg-orange-600 text-white font-semibold md:px-12 py-5 px-8 rounded-full mr-4 inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out">
                            <span>Sign Up</span> <FaArrowRight />
                        </button>
                        </Link>
                        <button className="readmore-button bg-gray-900 text-white font-semibold md:px-12 py-5 px-8 rounded-full inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out">
                            <span>Read More</span> <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-slide relative">
                
                <div className="carousel-content md:w-2/4 absolute md:top-[230px] top-[55px] md:left-5 md:p-8 p-0 text-white md:text-left text-center md:mt-0 mt-7">
                    <h3 className="font-bold md:mb-7 mb-3 md:text-7xl text-[44px] md:text-left text-center">Unlock Your  <br /> <span className='text-black md:mt-2'><span className='titles'>Creative</span> Potential</span></h3>
                    <p className="text-lg text-gray-700 mb-6 font-semibold">
                        Unleash your creativity and capture stunning photographs. Our courses provide you with the knowledge and skills to express your unique vision through photography.
                    </p>
                    <div className="carousel-buttons">
                        <Link to='/signUp'>
                        <button className="signup-button mb-3 bg-orange-600 text-white font-semibold md:px-12 py-5 px-8 rounded-full mr-4 inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out">
                            <span>Sign Up</span> <FaArrowRight />
                        </button>                      
                        </Link>
                        <button className="readmore-button bg-gray-900 text-white font-semibold md:px-12 py-5 px-8 rounded-full inline-flex items-center space-x-1 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out">
                            <span>Read More</span> <FaArrowRight />
                        </button>
                    </div>
                </div>
                <img className="w-full md:h-[800px] h-[550px]" src={bannerImage3} alt="Slide 3" />
            </div>
        </Carousel>
    );
};

export default Banner;

