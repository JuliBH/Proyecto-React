import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, cartTotal, removeItem, clear, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center pt-4">
                        <div className="alert alert-danger" role="alert">Wow! Such empty!</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-outline-dark mt-auto">Clear cart</Link></th>
                        </tr>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.name} width={80} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.price}</td>
                                    <td className="align-middle"><Link onClick={() => {removeItem(item.id)}}><img src={"/imagenes/trash.svg"} alt={"Eliminar producto"} width={32} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end"><b>Total:</b></td>
                                <td className="text-end"><b>${sumTotal()}</b></td> 
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-outline-dark mt-auto">Finalize purchase</Link></td>
                            </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;