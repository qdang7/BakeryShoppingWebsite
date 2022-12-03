import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ADD_QUANTITY_TRANSACTION_CODE, CART_SESSION_ITEM, REDUCE_QUANTITY_TRANSACTION_CODE, REMOVE_FROM_CART, UPDATE_CART_TRANSACTION_CODE } from "../../constants/cart.constant";
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
        if (encodedItems) {
            setItems(JSON.parse(encodedItems))
        }
    }, [items])

    // useEffect(() => {
    //     sessionStorage.setItem(CART_SESSION_ITEM, JSON.stringify(items))
    // }, [items])

    const updateCart = (id: string, code: UPDATE_CART_TRANSACTION_CODE) => {
        let clonedItems = items
        let message = ""
        let willShowToast = false;
        for (let itm of clonedItems) {
            if (itm.product.productId && itm.product.productId === id) {
                switch (code) {
                    case ADD_QUANTITY_TRANSACTION_CODE:
                        itm.quantity++;
                        break;
                    case REDUCE_QUANTITY_TRANSACTION_CODE:
                        // Reduced to 0 - Remove from cart
                        if (itm.quantity == 1) {
                            clonedItems = clonedItems.filter(i => i.product.productId != itm.product.productId)
                            break;
                        }
                        itm.quantity--;
                        break;
                    case REMOVE_FROM_CART:
                        willShowToast = true
                        message = "Removed!"
                        clonedItems = clonedItems.filter(i => i.product.productId != itm.product.productId)
                        break;
                }
            }
        }
        
        setItems(clonedItems)
        sessionStorage.setItem(CART_SESSION_ITEM, JSON.stringify(clonedItems))
        if(willShowToast){
            toast.success(message, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1500,
            });
        }
    }
    return (
        <div className="container">
            <div className="cart-text"> Shopping Cart</div>
            <div className="cart-container row">
                <div className="cart-items-table col-sm-8">
                    <CartItemList items={items} updateCart={updateCart} />
                </div>
                <div className="col-sm-4">
                    <CartSummary items={items}/>
                </div>
            </div>
        </div>
    )
}
export default Cart;