import React from "react";
import "./MenuDetailItem.css";
interface IProps {

}
const MenuDetailItem: React.FC<IProps> = () => {
    return (
        <div className="item-wrapper">
            <div className="card">
                <img className="card-img-top" src="https://www.tljus.com/wp-content/uploads/2022/07/Web_PDP_ChocoCloudCake.png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title item-title">Iced Pumpkin Pie Macchiato</h5>
                    <div className="btn-container">
                        <a href="#" className="btn btn-success">Add to cart</a>
                        <a href="#" className="btn btn-light">View details</a>
                    </div>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>

    )
}

export default MenuDetailItem;