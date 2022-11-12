import React from "react";
import "./Checkout.css";
import CheckoutForm from "./components/form/CheckoutForm";
import CheckoutOrder from "./components/order/CheckoutOrder";
interface IProps{

}
const Checkout : React.FC<IProps> = () => {
    return (
        <div className="container">
            <div className="checkout-text">Checkout</div>
            <div className="checkout-container row">
                <div className="checkout-form col-sm-8">
                    <CheckoutForm />
                </div>
                <div className="col-sm-4">
                    <CheckoutOrder />
                </div>
            </div>
        </div>
    )
}

export default Checkout;