import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import "./login.css"
const Login = () => {
    
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
    };
    return (
        <div className="register p-5 mt-5">
            <h2 className="text-center text-info pb-3">Login Here</h2>
            <Form onClick={handleLogin}>
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
                    Login
                </Button>
                <div className="forgot-password mt-3">
                    <Link to="/">Forgot Password</Link>
                </div>
            </Form>
            <p className="text-center sign-toggle mt-3">
                Don't Have account?
                <Link to="/register" className="ps-2 text-info">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;