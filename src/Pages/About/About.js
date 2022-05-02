import React from "react";
// import AboutImg from "../../images/ab1.png"
import "./About.css";
const About = () => {
    return (
        <div>
            <div className="container">
                <h2 className="text-center my-5">About Myself</h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p>
                            A web developer is a programmer who specializes in,
                            or is specifically engaged in, the development of
                            World Wide Web applications using a client–server
                            model.
                            <hr />I am Zesan. My goal is in 2022 to become a
                            fullstack developer. It is so much challanging to
                            me. But I have to do it.I want to be a fullstack
                            developer. I want to move forward with this in mind.
                            I think 2022 is going to be the most challenging for
                            me. And it will bring the biggest change in my life
                            inshallah.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="w-50 mx-auto">
                            {/* <img className="w-100" src={AboutImg} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
