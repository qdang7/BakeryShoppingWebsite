import React from "react";
import CartFrontImg from '../../assets/img/Cart_FrontImg.jpeg';
import "./Cart.css";
import CartItemList from "./components/item-list/CartItemList";
import CartSummary from "./components/summary/CartSummary";
interface IProps {

}
const Cart: React.FC<IProps> = () => {
    return (
        <div className="container">
            <div className="cart-text"> Shopping Cart</div>
            <div className="cart-container row">
                <div className="cart-items-table col-sm-8">
                    <CartItemList />
                </div>
                <div className="col-sm-4">
                    <CartSummary />
                </div>
            </div>
        </div>
    )
}
export default Cart;