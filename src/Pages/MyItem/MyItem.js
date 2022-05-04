import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Banner from "../Shared/Banner/Banner";
import Header from "../Shared/Header/Header";

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myProduct, setMyProduct] = useState([]);
    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/myProduct?email=${email}`)
            .then((res) => res.json())
            .then((data) => setMyProduct(data));
    }, [user]);
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h2>my item: {myProduct.length}</h2>
        </div>
    );
};

export default MyItem;
