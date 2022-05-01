import React from "react";
import "./Banner.css";
const Banner = () => {
    return (
        <div className="hero-container">
            <div className="heading">
                <h2 className="hero title">Healthy Food</h2>
                <p>Grow your strength</p>
                <div className="mt-3 read-more">
                    <a href="/">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
