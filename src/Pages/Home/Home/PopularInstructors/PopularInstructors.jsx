import React, { useEffect, useState } from 'react';
import { FaShare, FaShareAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://snap-school-server.vercel.app/users/instructors')
            .then((response) => response.json())
            .then((data) => {
                setInstructors(data.slice(0, 6));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Split instructors into groups of three
    const groupedInstructors = instructors.reduce((acc, curr, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(curr);
        return acc;
    }, []);

    return (
        <div className="w-full mx-auto mb-7">
            <h1 className="text-2xl titles text-orange-500 font-bold mb-4 text-center">Our team</h1>
            <p className="md:text-5xl titles text-4xl text-center font-bold mb-5"> Our Popular Instructors</p>
            <hr className="w-1/2 mx-auto border-2 md:mb-14 mb-8" />
            <Carousel
                showThumbs={true}
                showArrows={true}
                autoPlay
                infiniteLoop
                interval={8000}
                className="relative"
                style={{ maxWidth: '1000px' }}
                renderIndicator={() => null}
            >
                {groupedInstructors.map((group, index) => (
                    <div key={index} className="flex justify-center md:gap-20">
                        {group.map((instructor) => (
                            <div key={instructor.id} className="mx-4">
                                <div className="rounded-full w-[112px] h-[112px] md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-60 xl:h-60 mx-auto relative">
                                    <img
                                        src={instructor.image}
                                        alt={instructor.name}
                                        className="object-cover w-full h-full transition-transform  transform hover:scale-105 rounded-full"
                                        style={{ border: '4px solid orange' }}
                                    />
                                    <div >
                                    <FaShareAlt className=' absolute top-4 md:right-3 right-0 bg-orange-600 w-6 h-6 md:w-12 md:h-12 rounded-full md:p-4 p-2 text-white '/>
                                    </div>
                                </div>
                                <p className="text-center mt-2 text-lg font-bold">{instructor.name}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default PopularInstructors;






















































