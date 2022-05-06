import React from 'react';
import Banner from '../Shared/Banner/Banner';
import Header from '../Shared/Header/Header';
import funnyface from '../../images/my.png'
import "./About.css"
const About = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container about-wrap">
                <h2 className="text-center">
                    ABOUT <span style={{ color: "#008037" }}>MYSELF</span>
                </h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className='text-justify'>
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
                        <div className="w-75 mx-auto text-center">
                            <img style={{width:"300px"}} className="img-fluid" src={funnyface} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;