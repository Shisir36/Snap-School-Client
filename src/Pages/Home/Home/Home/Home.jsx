import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import ProvideSection from '../ProvideSection/ProvideSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <ProvideSection/>
        </div>
    );
};

export default Home;