import React from "react";
import "./Slider.css";
const Slider = () => {
    return (
        <div className="hero-container">
            <div className="heading">
                <h2 className="hero title">Healthy Food</h2>
                <p>
                    Grow your{" "}
                    <span style={{color:"#008037"}}>
                        <strong>strength</strong>
                    </span>{" "}
                </p>
                <div className="mt-3 read-more">
                    <a href="/">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
