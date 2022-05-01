import React from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Registration = () => {
    return (
        <div className="register p-5 mt-5">
            <h2 className="text-center text-info pb-3">Registration</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        className="input-form"
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        className="input-form"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="input-form"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                {/* =================================
                                Custome Error n
                    ====================================*/}
                <p className="text-danger">{/* {error} */}</p>

                <Button className="registration-btn mt-3" type="submit">
                    Registration
                </Button>
            </Form>
            <p className="text-center sign-toggle mt-3">
                Already Have an account?
                <Link to="/login" className="ps-2 text-info">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Registration;