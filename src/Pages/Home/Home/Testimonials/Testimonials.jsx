import React from 'react';
import './test.css';
import { FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
    {
        id: 1,
        quote:
            'Taking the photography class was an incredible experience. I learned so much about composition, lighting, and storytelling. It has truly elevated my photography skills to the next level.',
        studentName: 'Yasin Khan',
        rating: 5,
        image:
            'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/327048263_554035913445374_7631258519047464264_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHUyGHOMNKJpFGF-BQHxAOr0HZNNjzbVlbQdk02PNtWVlqucTAeTPXEl8doYtt5mTL_0QCEDhh4jPwzUHh5asqk&_nc_ohc=bUDSg233jH0AX84EY2T&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCxmaQzOEeBdzyrEMG3YWpYltBlyj_0aX4aXiDkQ7DfcA&oe=648F2457',
    },
    {
        id: 2,
        quote:
            'I can confidently say that the photography class was a game-changer for me. The instructors were knowledgeable and supportive, and the hands-on assignments allowed me to apply what I learned. Highly recommended!',
        studentName: 'Reduan Shahriar',
        rating: 4.5,
        image:
            'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/315970712_1302308127278307_5504507472394253386_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHE0kTpXhXKeaA-x0Ep4XVCBhBXnmXAHn8GEFeeZcAef3Uq2IlpS_S9gJb9ZbPQoTEeyPpVC0vkSnHHHSQMPrRv&_nc_ohc=_-e6oT_KMc8AX_h3X8F&_nc_ht=scontent.fdac138-1.fna&oh=00_AfB9rv-fOxfI_XNuc1Xe7u6PTYUwMpOJ9pkRCfNWK72dIQ&oe=648F1F2D',
    },
    {
        id: 3,
        quote:
            'Being a part of the photography class was an unforgettable experience. I not only learned technical skills but also developed my artistic eye. The class provided a nurturing environment to explore my creativity.',
        studentName: 'Mahmud Hasan',
        rating: 4.7,
        image:
            'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/239565643_2886007085043138_5225329788800866246_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF9Q7ghTccjwW8M4jP7rK8rtbtU8W7YPD-1u1Txbtg8P00INO6BUc7u2xKdxLhKAsXVmLnGyijbUs9OklBIcB7W&_nc_ohc=L_gRlIfv1YQAX9P0hIN&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAV7Okla44rpsGV0NseM_eCp1YaQmQQwgGoVWeSpmIaOA&oe=648F222E',
    },
];

const Testimonials = () => {
    React.useEffect(() => {
        AOS.init(); // Initialize AOS library
    }, []);

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
        <section
            className="px-3 py-1"
            style={{
                backgroundImage:
                    'url(https://images.unsplash.com/photo-1523878288860-7ad281611901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)',
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
        >
            <h1 className="text-orange-600 text-center text-2xl titles pt-14 font-bold">Testimonials</h1>
            <p className="md:text-6xl text-4xl font-bold text-center titles mb-14">What our students say</p>
            <div className="md:flex justify-evenly gap-16">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        id={`card-${testimonial.id}`}
                        className="testimonial-card bg-white rounded-lg shadow-lg p-14 text-center md:w-[500px] transition-all relative mb-8"
                        onMouseEnter={() => handleMouseEnter(testimonial.id)}
                        onMouseLeave={handleMouseLeave}
                        style={getCardStyles(testimonial.id)}
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        <div className="content mt-10">
                            <div className="quote md:text-2xl text-xl font-semibold text-gray-500 titles">{testimonial.quote}</div>
                            <div>
                                <img
                                    src={testimonial.image}
                                    alt={`Student ${testimonial.id}`}
                                    className="w-14 mt-6 h-14 rounded-full mx-auto border-[3px] border-orange-500"
                                />
                            </div>
                            <div className="student-name mt-2 font-bold">{testimonial.studentName}</div>
                        </div>
                        <div className="absolute -top-6 md:left-48 left-[167px] bg-orange-600 p-5 rounded-full">
                            <FaQuoteLeft className="text-2xl text-white" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
