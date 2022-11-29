import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn-cart btn position-relative">
            <img src="./imagenes/cart-fill.svg" alt="cart" width="45"/>
            <span className="number-cart">1</span>
        </button>
    )
}

export default CartWidget;