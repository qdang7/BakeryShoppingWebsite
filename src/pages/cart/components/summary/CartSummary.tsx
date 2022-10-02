import React from "react";
import "./CartSummary.css"
interface IProps {

}
const CartSummary: React.FC<IProps> = () => {
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
                                <td>1200$</td>
                            </tr>
                        </div>
                        <div className="summary-line-container">
                            <tr className="summary-line">
                                <td><b className="green-text">Shipping fee:</b></td>
                                <td>50$</td>
                            </tr>
                        </div>
                        <div className="summary-line-container summary-total">
                            <tr className="summary-line ">
                                <td><b className="green-text">Total:</b></td>
                                <td><b>920$</b></td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
            <div className="btn-checkout">
                <button className="btn btn-success">Checkout</button>
            </div>
            <div className="btn-backToMenu">
                <button className="btn btn-danger">Back to menu</button>
            </div>
        </div>
    )
}

export default CartSummary;