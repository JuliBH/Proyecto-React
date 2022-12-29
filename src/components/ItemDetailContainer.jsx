import React, { useState, useEffect } from "react";
/* import arrayProducts from "./json/products.json"; */
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    /*useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProducts.find(item => item.id === parseInt(id)));
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);*/

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "Items", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data() })
            } else {
                console.log("Product does not exist.")
            }
        })
    }, []);

    return (
        <div className="container">
        <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;