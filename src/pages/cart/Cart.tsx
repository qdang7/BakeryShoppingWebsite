import React, { useEffect, useState } from "react";
import CartFrontImg from '../../assets/img/Cart_FrontImg.jpeg';
import { CART_SESSION_ITEM } from "../../constants/cart.constant";
import useSelector from "../../hook/use-selector";
import { CartItem } from "../../redux/slices/cart/cart.model";
import "./Cart.css";
import CartItemList from "./components/item-list/CartItemList";
import CartSummary from "./components/summary/CartSummary";
interface IProps {

}
const Cart: React.FC<IProps> = () => {
    const encodedItems = sessionStorage.getItem(CART_SESSION_ITEM)
    const [items, setItems] = useState<CartItem[]>([])
    useEffect(() => {
        if(encodedItems){
            setItems(JSON.parse(encodedItems))
        }
    },[])
    return (
        <div className="container">
            <div className="cart-text"> Shopping Cart</div>
            <div className="cart-container row">
                <div className="cart-items-table col-sm-8">
                    <CartItemList items={items}/>
                </div>
                <div className="col-sm-4">
                    <CartSummary />
                </div>
            </div>
        </div>
    )
}
export default Cart;