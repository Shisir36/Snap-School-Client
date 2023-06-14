import React, { useEffect, useState } from 'react';
import Fade from 'react-awesome-reveal';

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        fetch("https://snap-school-server.vercel.app/classes/enrollment")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPopularClasses(data.slice(0, 6)); // Limiting data to 6 entries
            });
    }, []);

    return (
        <div className="mt-7">
            <h1 className="text-2xl titles text-orange-500 font-bold mb-4 text-center">Our</h1>
            <p className="md:text-5xl titles text-4xl text-center font-bold mb-5">Popular Classes </p>
            <hr className="w-1/2 mx-auto border-2 md:mb-14 mb-8" />
            <div className="md:flex flex-wrap gap-10 md:ml-14 ">
                {popularClasses.map(classData => (
                    <Fade key={classData.id} triggerOnce>
                        <div className="card md:w-96 w-80 bg-base-100 shadow-xl image-full md:mb-0 mb-4 mx-auto">
                            <figure>
                                <img src={classData.image} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-orange-500">{classData.name}</h2>
                                <div className="card-actions justify-end">
                                    <p>{classData.instructor}</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;
