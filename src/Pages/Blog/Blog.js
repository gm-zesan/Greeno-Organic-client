import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blog.css";
const Blog = () => {
    return (
        <div>
            <div className="container">
                <h2 className="text-center my-5">My Blogs</h2>
                <Accordion style={{ height: "400px" }} className="w-50 mx-auto">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Difference between authorization and authentication
                        </Accordion.Header>
                        <Accordion.Body>
                            Authentication is the process of verifying who
                            someone is. Authorization is the process of
                            verifying what specific application, files and data
                            a user has access to.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Why are you using firebase? What other options do
                            you have to implement authentication?
                        </Accordion.Header>
                        <Accordion.Body>
                            I am using firebse because it is a commplete package
                            of products that allows us to build web and mobile
                            application. It improves the application quality and
                            help your clients grow their business. it creates
                            Application without backend server.It brings a
                            highly secure authentication system that improves
                            the user experience while they sign-up and sign-in.
                            The other options are Parse, Back4App, Kuzzle,
                            Couchbase, Flutter.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            What other services does firebase provide other than
                            authentication
                        </Accordion.Header>
                        <Accordion.Body>
                            Other services does firebase provide other than
                            authentication are given bellow: 1. Cloud Firestore
                            2. Cloud Functions 3. Google Analytics 4.Hosting
                            5.Cloud Storage 6.Predictions 7. Remote Config
                            8.Dynamic Links 9.Cloud Messaging
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;
