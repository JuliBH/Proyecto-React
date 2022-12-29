import React, { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

    return (
        <div className="row pb-5">
            <div className="col-md-4 offset-md-2">
                <img src={item.img} alt={item.name} className="img-fluid pt-5" />
            </div>
            <div className="col-md-4 detailText">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p><b>{item.price}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;