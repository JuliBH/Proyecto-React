import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const Document = () => {

    /*useEffect(() => {
        const [producto, setProducto] = useState({});

        const db = getFirestore();
        const item = doc(db, "Items", "sASqoadM9hPjI9gtsZl8");
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data());
            } else {
                console.log("Product does not exist.")
            }
        })
    }, []);*/

    return (
        <h1>Document</h1>
    )
}

export default Document;