import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import ProvideSection from '../ProvideSection/ProvideSection';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';
import WatchVideoSection from '../../WatchVideoSection/WatchVideoSection';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <ProvideSection/>
            <PhotoGallery/>
            <WatchVideoSection/>
            <Testimonials/>
        </div>
    );
};

export default Home;