import React from "react";
import "./FeaturedItem.css"
const FeateredItem = () => {
    return (
        <div className="container">
            <h2 className="mb-5 section-title">
                Ser<span>vices</span>
            </h2>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card h-100 card-degine">
                        <img
                            src=""
                            className="card-img-top mx-auto"
                            alt="..."
                        />
                        <div className="card-body">
                            <h3 className="card-title text-center mb-3">
                                Mango
                            </h3>
                            <h6 className="text-center">Price: $ 500</h6>
                            <h6 className="text-center">Quantity: 10 Kg</h6>
                            <hr />
                            <p className="card-text">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Officiis totam possimus, nam,
                                quis eum odit perspiciatis
                            </p>
                            <p className="text-right">Supplier : Zesan</p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn-checkout">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeateredItem;
