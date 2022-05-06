import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Banner from "../Shared/Banner/Banner";
import Header from "../Shared/Header/Header";
import toast from "react-hot-toast";
import "./AddItem.css";
const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const supplier = event.target.supplier.value;

        const url = `https://desolate-plateau-21312.herokuapp.com/fruit`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name,
                price,
                quantity,
                description,
                image,
                supplier,
                email: user.email,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("Product added successfully");
                event.target.reset();
            });
    };
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <div className="addproduct">
                <h2 className="text-center text-info pb-3">Add a Product</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Product name will be here"
                            required
                        />
                    </Form.Group>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    placeholder="$ pre kg"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Product Quantity</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="quantity"
                                    placeholder="Enter quantity in kg"
                                    required
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label>Add a description</Form.Label>
                        <textarea
                            className="form-control"
                            rows="5"
                            type="text"
                            name="description"
                            placeholder="Write somthing"
                            required
                        />
                    </Form.Group>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="image"
                                    placeholder="Image url"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Supplier Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="supplier"
                                    placeholder="Enter Supplier name"
                                    required
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="mt-5">
                        <Button className="btn-custom-special" type="submit">
                            Add Product
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default AddItem;
