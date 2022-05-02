import React from "react";
import useItems from "../../hooks/useItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import pic from "../../images/200.png";
const ManageItem = () => {
    const [items, setItems] = useItems();
    return (
        <div className="container">
            <h2 className="mb-5 section-title">
                All<span> Products</span>
            </h2>
            <ul class="list-unstyled">
                {items.map((item) => (
                    <>
                        <li class="media align-items-center justify-content-between mb-3">
                            <img
                                src={pic}
                                class="align-self-center mr-3"
                                alt=""
                            />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1 display-6">{item.name}</h5>
                                <h5>Price : {item.price}</h5>
                                <h5>Quantity : {item.quantity}</h5>
                                <p>{item.description}</p>
                                <p>Supplier : {item.supplier}</p>
                            </div>
                            <div>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                                <FontAwesomeIcon icon={"faTrash"} />
                                <FontAwesomeIcon icon="fa-duotone fa-trash" />
                            </div>
                        </li>
                        <hr />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default ManageItem;
