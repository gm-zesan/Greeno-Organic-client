import React from "react";
import { useNavigate } from "react-router-dom";
import "./SingleItem.css";
const SingleItem = ({ item }) => {
    const { _id, name, price, quantity, description, image, supplier } = item;

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="col mb-4">
            <div className="card h-100 card-degine">
                {quantity > 0 || (
                    <span className="soldout-badge badge rounded-pill bg-danger">
                        sold-out
                        <span className="visually-hidden">unread messages</span>
                    </span>
                )}

                <img src={image} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center mb-3">{name}</h3>
                    <h6 className="text-center">Price: $ {price} / kg</h6>
                    <h6 className="text-center">Quantity: {quantity} kg</h6>
                    <hr />
                    <p className="card-text text-truncate">{description}</p>
                    <p className="text-right">Supplier : {supplier}</p>
                </div>
                <div className="card-footer text-center">
                    <button
                        onClick={() => handleUpdate(_id)}
                        className="btn-custom"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
