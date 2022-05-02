import React, { useEffect, useState } from "react";
import SingleItem from "../SingleItem/SingleItem";
import "./FeaturedItem.css";
const FeateredItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/fruits")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className="container">
            <h2 className="mb-5 section-title">
                Ser<span>vices</span>
            </h2>
            <div className="row row-cols-1 row-cols-md-3">
                {items.map((item) => (
                    <SingleItem key={item._id} item={item}></SingleItem>
                ))}
            </div>
        </div>
    );
};

export default FeateredItem;
