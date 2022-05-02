import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./AddItem.css";
const AddItem = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const supplier = event.target.supplier.value;
        const data = { name, price, quantity, description, image, supplier };
        console.log(data);
        
        const url = `http://localhost:5000/fruit`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };
    return (
        <div className="addproduct p-3">
            <h2 className="text-center text-info pb-3">Add a Product</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
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
                                placeholder="Enter price"
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
                                placeholder="Enter quantity"
                                required
                            />
                        </Form.Group>
                    </div>
                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Add a description</Form.Label>
                    <textarea
                        className="form-control"
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

                <Button className="btn-custom-special" type="submit">
                    Add Product
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;
