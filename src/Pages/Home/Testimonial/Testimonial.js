import { Avatar } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avt from "../../../images/200.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import "./Testimonial.css";
const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "#008037", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "#008037", fontSize: "45px" }} />
        </div>
    );
};
const Testimonial = () => {
    return (
        <div className="test-wrap">
            <div className="testimonial mx-auto">
                <h2 className="text-center">
                    TESTI<span style={{ color: "#008037" }}>MONIAL</span>
                </h2>
                <Slider
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    dots autoplay 
                >
                    <div className="single-testimonial">
                        <Avatar
                            className="mx-auto"
                            src={avt}
                            style={{
                                width: 120,
                                height: 120,
                                marginBottom: "30px",
                            }}
                        ></Avatar>
                        <p>
                            Phasellus vitae suscipit justo. Mauris pharetra
                            feugiat ante id lacinia. Etiam faucibus mauris id
                            tempor egestas. Duis luctus turpis at accumsan
                            tincidunt. Phasellus risus risus, volutpat vel
                            tellus ac, tincidunt fringilla massa. Etiam
                            hendrerit dolor eget rutrum
                        </p>
                        <p style={{ fontStyle: "Italic", marginTop: "25px" }}>
                            <span className="usertest">Sonia patal</span>{" "}
                            Businessman
                        </p>
                    </div>
                    <div className="single-testimonial">
                        <Avatar
                            className="mx-auto"
                            src={avt}
                            style={{
                                width: 120,
                                height: 120,
                                marginBottom: "30px",
                            }}
                        ></Avatar>
                        <p>
                            Phasellus vitae suscipit justo. Mauris pharetra
                            feugiat ante id lacinia. Etiam faucibus mauris id
                            tempor egestas. Duis luctus turpis at accumsan
                            tincidunt. Phasellus risus risus, volutpat vel
                            tellus ac, tincidunt fringilla massa. Etiam
                            hendrerit dolor eget rutrum
                        </p>
                        <p style={{ fontStyle: "Italic", marginTop: "25px" }}>
                            <span className="usertest">Jhon bro</span>{" "}
                            Web-developer
                        </p>
                    </div>
                    <div className="single-testimonial">
                        <Avatar
                            className="mx-auto"
                            src={avt}
                            style={{
                                width: 120,
                                height: 120,
                                marginBottom: "30px",
                            }}
                        ></Avatar>
                        <p>
                            Phasellus vitae suscipit justo. Mauris pharetra
                            feugiat ante id lacinia. Etiam faucibus mauris id
                            tempor egestas. Duis luctus turpis at accumsan
                            tincidunt. Phasellus risus risus, volutpat vel
                            tellus ac, tincidunt fringilla massa. Etiam
                            hendrerit dolor eget rutrum
                        </p>
                        <p style={{ fontStyle: "Italic", marginTop: "25px" }}>
                            <span className="usertest">Deshi vai</span> Media
                            Analyst
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
