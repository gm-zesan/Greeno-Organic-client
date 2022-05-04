import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import "./login.css"
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Header from '../../Shared/Header/Header';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";
    let loadingElement;
    let errorElement;


    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        loadingElement = (
            <div>
                <p className="text-info">Loading...</p>
            </div>
        );
    }

    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    };
    return (
        <>
            <Header></Header>
            <div className="register p-5 mt-5">
                <h2 className="text-center text-info pb-3">Login Here</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="input-form"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                        />
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
                    </Form.Group>
                    {loadingElement}

                    <Button className="btn-custom-special mt-3" type="submit">
                        Login
                    </Button>
                    <div className="forgot-password mt-3">
                        <Link to="/">Forgot Password</Link>
                    </div>
                </Form>
                {errorElement}
                <p className="text-center sign-toggle mt-3">
                    Don't Have account?
                    <Link to="/register" className="ps-2 text-info">
                        Register
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Login;