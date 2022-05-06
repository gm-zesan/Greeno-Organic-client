import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://desolate-plateau-21312.herokuapp.com/fruits")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return [items, setItems];
};

export default useItems;
