import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-6 col-7 col-lg-3">
            <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                <div className="itemBox p-4" key={item.id}>
                    <div className="card h-100 shadow">
                        <img className="card-img-top" src={item.img} alt="imagen de producto" />
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5>{item.name}</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                    </div>
                                <span className="text-muted text-decoration-line-through"></span>
                                ${item.price}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;