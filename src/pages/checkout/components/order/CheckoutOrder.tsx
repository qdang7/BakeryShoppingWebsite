import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CART_SESSION_ITEM } from "../../../../constants/cart.constant";
import { CartItem } from "../../../../redux/slices/cart/cart.model";
import "./CheckoutOrder.css"
interface IProps {

}
const CheckoutOrder: React.FC<IProps> = () => {
    const navigate = useNavigate()
    const encodedItems = sessionStorage.getItem(CART_SESSION_ITEM)
    const [items, setItems] = useState<CartItem[]>([])
    useEffect(() => {
        if (encodedItems) {
            setItems(JSON.parse(encodedItems))
        }
    }, [items])

    const getCost = () => {
        let cost = 0;
        for(let itm of items){
            cost += itm.product.discountedPrice * itm.quantity
        } 
        return cost
    }

    const getTotal = () => {
        return getCost()
    }

    return (
        <div>
            <div className="cart-summary-container">
                <div className="cart-summary-title">
                    <h4 className="green-text"><b>Your order</b></h4>
                </div>
                <div className="summary-table">
                    <table>
                        <div className="checkout-line-container">
                            <tr className="checkout-line">
                                <td><b className="green-text">Cost:</b></td>
                                <td>{getCost()}$</td>
                            </tr>
                        </div>
                        {/* <div className="checkout-line-container">
                            <tr className="summary-line">
                                <td><b className="green-text">Shipping fee:</b></td>
                                <td>50$</td>
                            </tr>
                        </div> */}
                        <div className="checkout-line-container">
                            <tr className="checkout-line">
                                <td className="checkout-line-td"><b className="green-text">Discount:</b></td>
                                <td>0%</td>
                            </tr>
                        </div>
                        <div className="checkout-line-container summary-total">
                            <tr className="checkout-line ">
                                <td className="checkout-line-td"><b className="green-text">Total:</b></td>
                                <td className="checkout-line-td"><b>{getTotal()}$</b></td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
            <div className="voucher-container row input-group">
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Enter promotion code" />
                </div>
                <div className="col-sm-2 input-group-append btnSubmitVoucher">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
            <div className="btn-checkout">
                <button className="btn btn-success">Checkout</button>
            </div>
            <div className="btn-backToMenu">
                <button className="btn btn-danger" onClick={() => navigate("/cart")}>Back to cart</button>
            </div>
        </div>
    )
}

export default CheckoutOrder;