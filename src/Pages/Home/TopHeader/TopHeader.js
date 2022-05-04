import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./TopHeader.css";
import { Link } from 'react-router-dom';
const TopHeader = () => {
    return (
        <div class="container linehight text-center" style={{ width: "100%" }}>
            <div class="topleft ">
                <span class="location">
                    <i
                        class="fas fa-map-marker-alt"
                        style={{ marginRight: "8px" }}
                    ></i>
                    Dhaka, Banladesh
                </span>
                <span class="phone">
                    <i
                        class="fas fa-phone rotate"
                        style={{ marginRight: "8px" }}
                    ></i>
                    +8801770000000
                </span>
                <span class="mail">
                    <i
                        class="fas fa-envelope"
                        style={{ marginRight: "8px" }}
                    ></i>
                    greenoorganic55@gmail.com
                </span>
            </div>
            <div class="topright mt-2">
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