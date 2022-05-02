import React from 'react';
import "./SingleItem.css";
const SingleItem = ({ item }) => {
    const { name, price, quantity, description, image, supplier } = item;
    return (
        <div className="col mb-4">
            <div className="card h-100 card-degine">
                <img src={image} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center mb-3">{name}</h3>
                    <h6 className="text-center">Price: $ {price}</h6>
                    <h6 className="text-center">Quantity: {quantity}</h6>
                    <hr />
                    <p className="card-text">{description}</p>
                    <p className="text-right">Supplier : {supplier}</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn-custom">Update</button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;