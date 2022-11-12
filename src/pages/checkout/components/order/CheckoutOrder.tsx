import React from "react";
import "./CheckoutOrder.css"
interface IProps {

}
const CheckoutOrder: React.FC<IProps> = () => {
    return (
        <div>
            <div className="cart-summary-container">
                <div className="cart-summary-title">
                    <h4 className="green-text"><b>Your order</b></h4>
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
                        <div className="summary-line-container">
                            <tr className="summary-line">
                                <td><b className="green-text">Discount:</b></td>
                                <td>25%</td>
                            </tr>
                        </div>
                        <div className="summary-line-container summary-total">
                            <tr className="summary-line ">
                                <td><b className="green-text">Total:</b></td>
                                <td><b>1250$</b></td>
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
                <button className="btn btn-danger">Back to cart</button>
            </div>
        </div>
    )
}

export default CheckoutOrder;