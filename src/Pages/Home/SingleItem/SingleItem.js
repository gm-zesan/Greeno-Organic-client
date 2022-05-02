import React from 'react';
import "./SingleItem.css";
const SingleItem = ({ item }) => {
    const { name } = item;
    return (
        <div className="col mb-4">
            <div className="card h-100 card-degine">
                <img src="" className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center mb-3">{name}</h3>
                    <h6 className="text-center">Price: $ 500</h6>
                    <h6 className="text-center">Quantity: 10 Kg</h6>
                    <hr />
                    <p className="card-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Officiis totam possimus, nam, quis eum odit
                        perspiciatis
                    </p>
                    <p className="text-right">Supplier : Zesan</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn-custom">Update</button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;