import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { confirm } from "react-confirm-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import auth from "../../firebase.init";
import Banner from "../Shared/Banner/Banner";
import Header from "../Shared/Header/Header";
import axios from "axios";
import "./MyItem.css";
import toast from "react-hot-toast";
const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            const email = user?.email;
            const url = `https://greeno-organic.onrender.com/myproducts?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                });
                setMyProducts(data);
            } catch (error) {
                if (
                    error.response.status === 401 ||
                    error.response.status === 403
                ) {
                    signOut(auth);
                    navigate("/login");
                    toast.error(error.message);
                }
            }
        };
        getProducts();
    }, [user]);

    const handleDelete = async (id) => {
        const options = {
            closeOnOverlayClick: true,
            labels: {
                confirmable: "Yes",
                cancellable: "No",
            },
        };
        const result = await confirm("Are you sure?", options);
        if (result) {
            const url = `https://greeno-organic.onrender.com/fruit/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = myProducts.filter(
                        (myProduct) => myProduct._id !== id
                    );
                    setMyProducts(remaining);
                    toast.success("Product deleted successfully");
                });
        }
    };

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container">
                <h2 className="mb-5 page-title">
                    My<span> Products</span> ({myProducts.length})
                </h2>

                <ul className="list-unstyled">
                    {myProducts.map((myProduct) => (
                        <div
                            className="row row-cols-1 row-cols-md-3 mb-3 align-items-center justify-content-center custom-list"
                            key={myProduct._id}
                        >
                            <div className="col-md-4">
                                <img
                                    style={{ width: "100%" }}
                                    src={myProduct.image}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="col-md-6">
                                <h5 className="mt-0 mb-1 display-6">
                                    {myProduct.name}
                                </h5>
                                <h5>Price : $ {myProduct.price} per KG</h5>
                                <h5>Quantity : {myProduct.quantity} kg</h5>
                                <p className="text-justify">
                                    {myProduct.description}
                                </p>
                                <p className="text-right">
                                    Supplier : {myProduct.supplier}
                                </p>
                            </div>
                            <div className="col-md-2 text-center">
                                <button
                                    onClick={() => handleDelete(myProduct._id)}
                                    className="btn btn-danger"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyItem;
