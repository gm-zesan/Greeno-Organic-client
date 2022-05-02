import { Link } from "react-router-dom";
import useItems from "../../../hooks/useItems";
import SingleItem from "../SingleItem/SingleItem";
import "./FeaturedItem.css";
const FeateredItem = () => {
    const [items, setItems] = useItems();
    return (
        <div className="container">
            <h2 className="mb-5 section-title">
                Featured<span> Products</span>
            </h2>
            <div className="row row-cols-1 row-cols-md-3">
                {items.map((item) => (
                    <SingleItem key={item._id} item={item}></SingleItem>
                ))}
            </div>
            <div className="mt-5 w-25 mx-auto">
                <Link to="/items" className="btn-custom-special btn">
                    Manage Item
                </Link>
            </div>
        </div>
    );
};

export default FeateredItem;
