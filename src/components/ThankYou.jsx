import React from "react";
import { useParams } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-success" role="alert">
                        <h2>Thank you for your purchase!</h2>
                        <p>Your order number is: {id} </p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ThankYou;