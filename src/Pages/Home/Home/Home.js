import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Comment from '../Comment/Comment';
import FeateredItem from '../FeaturedItem/FeateredItem';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';
import TopHeader from '../TopHeader/TopHeader';
import "./Home.css"
const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <Slider></Slider>
            <About></About>
            <FeateredItem></FeateredItem>
            <Testimonial></Testimonial>
            <div class="bg1">
                <div class="overlayuser text-center">
                    <h2>Are You Impressed With Us?</h2>
                    <p class="p d-inline-block">
                        Greeno Organic is responsive multipurpose business theme.
                        It can be used for business, corporate, portfolio,
                        digital agency, landing page, blog, entertainment and
                        all informative websites. Making your website your own
                        is easier than ever before with Business Point.
                    </p>

                    <div style={{backgroundColor:"transparent"}} class="button">
                        <button type="button" class="btn btn-lg b">
                                Learn More
                            </button>
                            <button
                                type="button"
                                class="btn btn-outline-secondary btn-lg outline"
                            >
                                Buy Pro
                            </button>
                    </div>
                </div>
            </div>
            <Comment></Comment>
        </div>
    );
};

export default Home;