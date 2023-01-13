import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <Link to={"/cart"} className="btn-cart btn position-relative">
            <img src="/imagenes/cart.svg" alt="cart" width="45"/>
            <span className="number-cart">
                {cartTotal()}
            </span>
        </Link>
    )
}

export default CartWidget;