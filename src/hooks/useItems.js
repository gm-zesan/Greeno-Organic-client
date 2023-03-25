import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://greeno-organic.onrender.com/fruits")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return [items, setItems];
};

export default useItems;
