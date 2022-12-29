import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => { 
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [sold, setSold] = useState(false);

    const decrementarStock = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    const incrementarStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const addToCart = (quantity) => {
        if (counter <= itemStock) {
        setCounter(1);
        setItemStock(itemStock - quantity);
        setSold(true);
        onAdd(quantity);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}> - </button>
                    <button type="button" className="btn btn-outline-primary">{counter}</button> 
                    <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}> + </button>
                </div>
                <div className="card-footer pt-3 pb-3 border-top-0 bg-transparent">
                    {sold ? <Link to={"/cart"} className="btn btn-outline-dark mt-auto">Terminar compra</Link> : <button type="button" className="btn btn-outline-dark mt-auto" onClick={() => { addToCart(counter) }}>Agregar al carrito</button>} 
                </div>
            </div>
        </div>
    )
}

export default ItemCount;