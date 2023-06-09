import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./PhotoGallery.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../../assets/gallery/img_1.jpg';
import slide_image_2 from '../../../assets/gallery/img_2.jpg';
import slide_image_3 from '../../../assets/gallery/img_3.jpg';
import slide_image_4 from '../../../assets/gallery/img_4.jpg';
import slide_image_5 from '../../../assets/gallery/img_5.jpg';
import slide_image_6 from '../../../assets/gallery/img_6.jpg';
import slide_image_7 from '../../../assets/gallery/img_7.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function PhotoGallery() {
    return (
        <div className="md:px-5 px-0">
            <h1 className="text-center md:text-6xl text-4xl font-bold mt-10 titles"><span className=' text-orange-600'>Our Students </span><br />
                Works</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <FaArrowLeft className='ion-icon' name="arrow-back-outline"></FaArrowLeft>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <FaArrowRight className='ion-icon' name="arrow-forward-outline"></FaArrowRight>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default PhotoGallery;