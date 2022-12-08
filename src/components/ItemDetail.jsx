import React from "react";

const ItemDetail = ({item}) => {

    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.img} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-md-4 detailText">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p><b>{item.price}</b></p>
            </div>
        </div>
    )
}

export default ItemDetail;