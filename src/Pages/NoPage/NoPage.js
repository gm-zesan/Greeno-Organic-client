import React from "react";
import noPage from "../../images/404.jpg";
import Header from "../Shared/Header/Header";
import "./NoPage.css";
const NoPage = () => {
    return (
        <>
            <Header></Header>
            <div className="container error">
                <div className="error-img">
                    <img className="img-fluid" src={noPage} alt="" />
                </div>
            </div>
        </>
    );
};

export default NoPage;
