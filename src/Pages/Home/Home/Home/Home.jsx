import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import ProvideSection from '../ProvideSection/ProvideSection';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';
import WatchVideoSection from '../../WatchVideoSection/WatchVideoSection';
import Testimonials from '../Testimonials/Testimonials';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import { Helmet } from 'react-helmet-async';
import PopularClasses from '../PopularClasses/PopularClasses';
import JoinSchool from '../JoinSchool';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Snap School | Home</title>  
            </Helmet>
            <Banner />
            <About />
            <PopularInstructors />
            <ProvideSection />
            <PopularClasses/>
            <WatchVideoSection />
            <Testimonials />
            <PhotoGallery />
            <JoinSchool/>
        </div>
    );
};

export default Home;