import React from 'react';
import "./test.css"
import { FaQuoteLeft } from 'react-icons/fa';
const testimonials = [
    {
        id: 1,
        quote:
            'Taking the photography class was an incredible experience. I learned so much about composition, lighting, and storytelling. It has truly elevated my photography skills to the next level.',
        studentName: 'John Doe',
        rating: 5,
        image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        id: 2,
        quote:
            'I can confidently say that the photography class was a game-changer for me. The instructors were knowledgeable and supportive, and the hands-on assignments allowed me to apply what I learned. Highly recommended!',
        studentName: 'Jane Smith',
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: 3,
        quote:
            'Being a part of the photography class was an unforgettable experience. I not only learned technical skills but also developed my artistic eye. The class provided a nurturing environment to explore my creativity.',
        studentName: 'David Johnson',
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
];

const Testimonials = () => {
    const handleMouseEnter = (id) => {
        const cards = document.getElementsByClassName('testimonial-card');
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id !== `card-${id}`) {
                cards[i].classList.add('blur');
            }
        }
    };

    const handleMouseLeave = () => {
        const cards = document.getElementsByClassName('testimonial-card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('blur');
        }
    };

    const getCardStyles = (id) => {
        const styles = {};
        switch (id) {
            case 1:
                styles.borderRadius = '20% 0 20% 0';
                break;
            case 2:
                styles.borderRadius = '20% 0 20% 0';
                break;
            case 3:
                styles.borderRadius = '20% 0 20% 0';
                break;
            default:
                break;
        }
        return styles;
    };

    return (
        <section className="my-20">
            <h1 className=' text-orange-600 text-center text-2xl titles'>Testimonials</h1>
            <p className=' text-6xl font-bold text-center titles mb-14'>What our students say <br />
                about courses</p>
            <div className='md:flex justify-evenly gap-16'>
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        id={`card-${testimonial.id}`}
                        className="testimonial-card bg-white rounded-lg shadow-lg p-14 text-center border md:w-[500px] transition-all relative mb-8 "
                        onMouseEnter={() => handleMouseEnter(testimonial.id)}
                        onMouseLeave={handleMouseLeave}
                        style={getCardStyles(testimonial.id)}
                    >
                        <div className="content mt-10">
                            <div className="quote text-2xl font-semibold text-gray-500 titles">{testimonial.quote}</div>
                            <div>
                                <img
                                    src={testimonial.image}
                                    alt={`Student ${testimonial.id}`}
                                    className="w-14 mt-6 h-14 rounded-full mx-auto border-2 border-orange-600"
                                />
                            </div>
                            <div className="student-name font-bold">{testimonial.studentName}</div>
                        </div>
                        <div className=' absolute -top-6 md:left-48 left-[167px] bg-orange-600 p-5 rounded-full'>
                            <FaQuoteLeft className=' text-2xl text-white '></FaQuoteLeft>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
