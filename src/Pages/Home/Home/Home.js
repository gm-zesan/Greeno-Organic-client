import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import FeateredItem from '../FeaturedItem/FeateredItem';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeateredItem></FeateredItem>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;