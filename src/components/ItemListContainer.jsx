import React from "react";
import arrayProducts from "./json/products.json";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProducts.filter(item => item.category === id) : arrayProducts );
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);
    
    return (
        <div className="container">
            <ItemList items={items} />
            <ItemCount stock={20}/>
        </div>
    )
}

export default ItemListContainer;