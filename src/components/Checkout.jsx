import { addDoc, collection, getFirestore, updateDoc, doc, writeBatch, getDocs } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, clear, sumTotal} = useContext(CartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [repeatEmail, setrepeatEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = (e) => {
        e.preventDefault();
        const fecha = new Date();
        const order = {
            buyer: {name:name, phone:phone, email:email, repeatEmail:repeatEmail},
            items: cart.map(item => ({id:item.id, title:item.name, quantity:item.quantity, price:item.price, total_price:item.quantity * item.price})),
            total:sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };
        
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const generateOrder = doc(db, "orders", snapShot.id);
            updateDoc(generateOrder, {total:order.total * 1.21});

            /* const batch = writeBatch(db);
            const updateOrder = doc(db, "orders", snapShot.id);
            batch.update(updateOrder, {total:10000});
            batch.set(updateOrder, {...order, discount:sumTotal()*0.7});
            batch.commit(); */

            const ordersCollection = collection(db, "orders");
            const batch = writeBatch(db);
            getDocs(ordersCollection).then(results => {
                results.docs.map(item => {
                    let docModificado = doc(db, "orders", item.id);
                    batch.update(docModificado, {total:item.data()["total"] * 1.10});
                });
                batch.commit();
            })

            clear();
        });

    }    

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" placeholder="Put your name" onInput={(e) => {setName(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input type="number" className="form-control" placeholder="Put your phone" onInput={(e) => {setPhone(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" placeholder="Put your email adress" onInput={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Repeat Email:</label>
                        <input type="email" className="form-control" placeholder="Repeat your email adress" onInput={(e) => {setrepeatEmail(e.target.value)}} />
                    </div>
                    <button type="submit" className="btn btn-outline-dark mt-auto" onClick={generarOrden}>Generar orden</button>
                </form>

                </div>
                    <div className="col-md-6">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.img} alt={item.name} width={80} /></td>
                                        <td className="align-middle">{item.name}</td>
                                        <td className="align-middle">{item.quantity}</td>
                                        <td className="align-middle">${item.quantity * item.price}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-end"><b>Total:</b></td>
                                    <td className="text-end"><b>${sumTotal()}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <div className="alert alert-warning" role="alert">La orden generada es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;