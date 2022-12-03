import React from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../../redux/slices/cart/cart.model";
import "./CartSummary.css"
interface IProps {
    items: CartItem[]
}
const CartSummary: React.FC<IProps> = ({items}) => {

    const navigate = useNavigate();

    const getCost = () => {
        let cost = 0;
        for(let itm of items){
            cost += itm.product.discountedPrice * itm.quantity
        } 
        return cost
    }

    const getTotalFee = () => {
        let cost = getCost()
        // 10 - temporary shipping fee
        return cost;
    }

    return (
        <div>
            <div className="cart-summary-container">
                <div className="cart-summary-title">
                    <h4 className="green-text"><b>Summary</b></h4>
                </div>
                <div className="summary-table">
                    <table>
                        <div className="summary-line-container">
                            <tr className="summary-line">
                                <td><b className="green-text">Cost:</b></td>
                                <td>{getCost()}$</td>
                            </tr>
                        </div>
                        {/* <div className="summary-line-container">
                            <tr className="summary-line">
                                <td><b className="green-text">Shipping fee:</b></td>
                                <td>10$</td>
                            </tr>
                        </div> */}
                        <div className="summary-line-container summary-total">
                            <tr className="summary-line ">
                                <td><b className="green-text">Total:</b></td>
                                <td><b>{getTotalFee()}$</b></td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
            <div className="btn-checkout">
                <button className="btn btn-success" onClick={() => navigate("/checkout")}>Checkout</button>
            </div>
            <div className="btn-backToMenu">
                <button className="btn btn-danger">Back to menu</button>
            </div>
        </div>
    )
}

export default CartSummary;