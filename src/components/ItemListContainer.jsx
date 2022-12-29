import React, { useState, useEffect } from "react";
/* import arrayProducts from "./json/products.json"; */
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    /*useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProducts.filter(item => item.category === id) : arrayProducts );
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);*/

    /* useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "Items");

        arrayProducts.forEach((item) => {
            addDoc(itemCollection, {name:item.name, price:item.price, description:item.description, category:item.category, img:item.img, quantity:item.quantity, stock:item.stock});
        })

    }, []); */

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "Items");

        const q = id ? query(itemCollection, where("category", "==", id)) : itemCollection;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => (
                {id:doc.id, ...doc.data()}
            )))
        });
    }, [id])
    
    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;