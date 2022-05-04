import React from "react";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Comment from "../Comment/Comment";
import FeateredItem from "../FeaturedItem/FeateredItem";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";
import TopHeader from "../TopHeader/TopHeader";
import "./Home.css";
const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <Slider></Slider>
            <About></About>
            <FeateredItem></FeateredItem>
            <Testimonial></Testimonial>
            <div className="bg1">
                <div className="overlayuser text-center">
                    <h2>Are You Impressed With Us?</h2>
                    <p className="p d-inline-block">
                        Greeno Organic is responsive multipurpose business
                        theme. It can be used for business, corporate,
                        portfolio, digital agency, landing page, blog,
                        entertainment and all informative websites. Making your
                        website your own is easier than ever before with
                        Business Point.
                    </p>

                    <div
                        style={{ backgroundColor: "transparent" }}
                        className="button"
                    >
                        <button type="button" className="btn btn-lg b">
                            Learn More
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg outline"
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
