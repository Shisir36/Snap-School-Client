import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Instructors = () => {
    const [instructors, setAllInstructors] = useState([]);
    const [cardColor, setCardColor] = useState('white');

    useEffect(() => {
        fetch('http://localhost:5000/users/instructors')
            .then((response) => response.json())
            .then((data) => {
                setAllInstructors(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            offset: 100,
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCardColor((prevColor) => (prevColor === 'rgba(0, 0, 0, 0.15)' ? 'white' : 'rgba(0, 0, 0, 0.15)'));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Snap School | Instructors</title>
            </Helmet>
            <div
                className="md:h-80 h-20 mt-2 bg-cover"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1486574655068-162e94137442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
                }}
            >
                <span className="titles md:text-6xl text-4xl text-white md:absolute md:right-[35%] md:top-36 ml-20 text-center">
                    Our <span className="text-orange-500">Instructors</span>
                </span>
            </div>
            <div className="md:grid grid-cols-3 py-10 gap-6">
                {instructors.map((instructor, index) => (
                    <div
                        key={instructor.id}
                        className="card md:w-96 w-80 bg-base-100 shadow-xl md:ml-7 ml-10 mb-3"
                        data-aos={index % 2 === 0 ? 'flip-right' : 'flip-left'}
                        style={{ backgroundColor: cardColor, color: cardColor === 'black' ? 'white' : 'black' }}
                    >
                        <figure className="px-10 pt-10">
                            <img src={instructor.image} alt="Shoes" className="rounded-xl h-48 w-48" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>{instructor.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructors;
