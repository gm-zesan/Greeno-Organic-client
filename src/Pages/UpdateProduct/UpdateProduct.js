import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import item from "../../images/200.png";
import Banner from "../Shared/Banner/Banner";
import Header from "../Shared/Header/Header";
import "./UpdateProduct.css";
const UpdateProduct = () => {
    const { productId } = useParams();
    
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);

    
    const updateQuantity=(event)=>{
        event.preventDefault();
        // const fieldQuantity = parseFloat(event.target.quantity.value);
        // const oldQuantity = parseFloat(product.quantity);
        // const newQuantity = oldQuantity + fieldQuantity;
        // setProduct(newQuantity)
        // console.log(oldQuantity, fieldQuantity, newQuantity);
        // fetch(`http://localhost:5000/fruit/${productId}`, {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify({product})
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data)
        //         event.target.reset()
        //     });
    }
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <div className="container my-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src={item} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p className="h2">{product.name}</p>
                        <p className="h4">Price : $ {product.price}</p>
                        <p className="h4 quantity">
                            Quantity : {product.quantity}
                        </p>
                        <p className="desc">{product.description}</p>
                        <p className="text-right">
                            <small>Supplier</small>
                        </p>
                        <button className="btn-custom">
                            Delever a Product
                        </button>
                        <div className="or-container">
                            <div className="line-separator"></div>
                            <div className="or-label">or</div>
                            <div className="line-separator"></div>
                        </div>
                        <Form onSubmit={updateQuantity}>
                            <div className="row">
                                <Form.Label>Add Quantity</Form.Label>
                                <div className="col-md-7">
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="number"
                                            name="quantity"
                                            placeholder="Increase your product quantity"
                                            required
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-md-5">
                                    <button className="btn-custom-special btn">
                                        Add quantity
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;
