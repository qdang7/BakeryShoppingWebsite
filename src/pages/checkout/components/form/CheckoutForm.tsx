import React, { useState } from "react";
import "./CheckoutForm.css";
interface IProps {
    
}
const CheckoutForm: React.FC<IProps> = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    return (
        <div className="checkoutForm-container">
            <div className="billing-title"><b>Billing Address</b></div>
            <div className="custom-control custom-checkbox checkbox-default-address">
                <input type="checkbox" className="custom-control-input" checked={isDisabled} onChange={() => setIsDisabled(!isDisabled)}/>
                <label className="custom-control-label" >Deliver to your address</label>
            </div>
            <div className="billing-form-container">
                <form>
                    <div className="row billing-row">
                        <div className=" col-sm-6 form-group">
                            <label className="bold">First Name:</label>
                            <input type="text" className="form-control" disabled={isDisabled} aria-describedby="emailHelp" placeholder="Enter your first name" />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label className="bold">Last Name:</label>
                            <input type="text" className="form-control" disabled={isDisabled} placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="form-group billing-row">
                        <label className="bold">Email (Optional):</label>
                        <input type="email" className="form-control" disabled={isDisabled} placeholder="Enter your email" />
                    </div>
                    <div className="form-group billing-row">
                        <label className="bold">Phone number:</label>
                        <input type="text" className="form-control" disabled={isDisabled} placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group billing-row">
                        <label className="bold">Address:</label>
                        <input type="text" className="form-control" disabled={isDisabled} placeholder="Enter your phone number" />
                    </div>
                    <div className="row billing-row">
                        <div className=" col-sm-6 form-group">
                            <label className="bold">City/Province:</label>
                            <select className="form-control" disabled={isDisabled}>
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label className="bold">District/State:</label>
                            <select className="form-control" disabled={isDisabled}>
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    {/* <button type="submit" className="btn btn-primary billing-btn">Submit</button> */}
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm;