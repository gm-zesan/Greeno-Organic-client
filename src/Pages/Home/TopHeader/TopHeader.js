import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./TopHeader.css";
import { Link } from "react-router-dom";
const TopHeader = () => {
    return (
        <div
            className="container linehight text-center"
            style={{ width: "100%" }}
        >
            <div className="topleft ">
                <span className="location">
                    <i
                        className="fas fa-map-marker-alt"
                        style={{ marginRight: "8px" }}
                    ></i>
                    Dhaka, Banladesh
                </span>
                <span className="phone">
                    <i
                        className="fas fa-phone rotate"
                        style={{ marginRight: "8px" }}
                    ></i>
                    +8801770000000
                </span>
                <span className="mail">
                    <i
                        className="fas fa-envelope"
                        style={{ marginRight: "8px" }}
                    ></i>
                    greenoorganic55@gmail.com
                </span>
            </div>
            <div className="topright mt-2">
                <Link to="/">
                    <FontAwesomeIcon
                        style={{ fontSize: "18px" }}
                        icon={faFacebook}
                    ></FontAwesomeIcon>
                </Link>
                <Link to="/">
                    <FontAwesomeIcon
                        style={{ fontSize: "18px" }}
                        icon={faTwitter}
                    ></FontAwesomeIcon>
                </Link>
                <Link to="/">
                    <FontAwesomeIcon
                        style={{ fontSize: "18px" }}
                        icon={faInstagram}
                    ></FontAwesomeIcon>
                </Link>
            </div>
        </div>
    );
};

export default TopHeader;
