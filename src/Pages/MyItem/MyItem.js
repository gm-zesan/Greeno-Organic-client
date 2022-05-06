import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Banner from "../Shared/Banner/Banner";
import Header from "../Shared/Header/Header";
import "./MyItem.css";
const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const email = user.email;
        try {
            fetch(`http://localhost:5000/myproducts?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setMyProducts(data));
        } catch (error) {
            console.log(error.message);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log("Nah");
                signOut(auth);
                navigate("/login");
            }
        }
    }, [user]);
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
                        <div key={myProduct._id}>
                            <li className="media custom-list mb-3">
                                <div>
                                    <img
                                        style={{ width: "350px" }}
                                        src={myProduct.image}
                                        className="align-self-center mr-3"
                                        alt=""
                                    />
                                </div>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 display-6">
                                        {myProduct.name}
                                    </h5>
                                    <h5>Price : $ {myProduct.price}</h5>
                                    <h5>Quantity : {myProduct.quantity} kg</h5>
                                    <p>{myProduct.description}</p>
                                    <p>Supplier : {myProduct.supplier}</p>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyItem;
