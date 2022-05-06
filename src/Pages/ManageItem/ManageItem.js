import React from "react";
import useItems from "../../hooks/useItems";
import "./ManageItem.css";
import Header from "../Shared/Header/Header";
import Banner from "../Shared/Banner/Banner";
import { useNavigate } from "react-router-dom";
const ManageItem = () => {
    const [items, setItems] = useItems();

    const navigate = useNavigate();
    const handleAddItem = () => {
        navigate("/additem");
    };

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <div className="container">
                <h2 className="mb-4 page-title">
                    All<span> Products</span>({items.length})
                </h2>
                <div className="list-unstyled">
                    <button
                        onClick={handleAddItem}
                        className="btn-custom-special mb-3"
                    >
                        If you want you can Add Item by clicking here
                    </button>
                    {items.map((item) => (
                        <div
                            key={item._id}
                            className="row row-cols-1 row-cols-md-2 mb-3 align-items-center justify-content-center custom-list"
                        >
                            <div className="col-md-5 text-center">
                                <img
                                    style={{ width: "350px", height: "300px" }}
                                    src={item.image}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="col-md-7">
                                <h5 className="mt-0 mb-3 display-6">
                                    {item.name}
                                </h5>
                                <h5>Price : $ {item.price} per KG</h5>
                                <h5>Quantity : {item.quantity} kg</h5>
                                <p className="text-justify">
                                    {item.description}
                                </p>
                                <p className="text-right">
                                    Supplier : {item.supplier}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ManageItem;
