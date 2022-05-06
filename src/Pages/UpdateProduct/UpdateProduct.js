import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Header from "../Shared/Header/Header";
import "./UpdateProduct.css";
const UpdateProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://desolate-plateau-21312.herokuapp.com/product/${productId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, [productId]);

    const handleDecrease = () => {
        fetch(
            `https://desolate-plateau-21312.herokuapp.com/fruit/${productId}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ product }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                product.quantity = product.quantity - 1;
                setProduct({ ...product });
                toast.success("Product delevired");
            });
    };

    const increaseQuantity = (event) => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value);
        fetch(
            `https://desolate-plateau-21312.herokuapp.com/increaseqnty/${productId}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ quantity }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                product.quantity = product.quantity + parseInt(quantity);
                setProduct({ ...product });
                toast.success("Product's quantity added");
                event.target.reset();
            });
    };
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <div className="container my-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src={product.image} alt="" />
                    </div>

                    <div className="col-md-6">
                        <p className="h2">{product.name}</p>
                        <p className="h4">Price : $ {product.price} per KG</p>
                        <p className="h4 quantity">
                            Quantity : {product.quantity} kg
                        </p>
                        <p className="desc">{product.description}</p>
                        <p className="text-right">
                            <small>Supplier : {product.supplier}</small>
                        </p>
                        {product.quantity > 0 ? (
                            <button
                                onClick={handleDecrease}
                                className="btn-custom"
                            >
                                Delever a Product
                            </button>
                        ) : (
                            <p>SOLD-OUT</p>
                        )}
                        <div className="or-container">
                            <div className="line-separator"></div>
                            <div className="or-label">or</div>
                            <div className="line-separator"></div>
                        </div>
                        <Form onSubmit={increaseQuantity}>
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
