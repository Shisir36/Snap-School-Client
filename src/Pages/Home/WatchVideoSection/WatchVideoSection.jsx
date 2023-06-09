import React from 'react';
import { Parallax } from 'react-parallax';
import backgroundPhoto from '../../../assets/photoStudio/7xm.xyz226371.jpg';
import { FaPlay } from 'react-icons/fa';

const WatchVideoSection = () => {
    return (
        <Parallax bgImage={backgroundPhoto} strength={500}>
            <div className="relative md:h-screen h-[450px] flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-20 "></div>
                <div className="relative z-10 flex flex-col items-center">
                    <button className="bg-white hover:bg-orange-600 text-orange-600 transition duration-500 ease-in-out  hover:text-white font-semibold px-8 py-8 rounded-full" >
                        <FaPlay />
                    </button>
                    <h2 className="text-white mt-4 text-xl font-semibold">Watch Video</h2>
                </div>
            </div>
        </Parallax>
    );
};

export default WatchVideoSection;
