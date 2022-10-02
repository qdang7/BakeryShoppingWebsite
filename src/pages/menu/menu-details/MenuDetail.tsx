import React from "react";
import MenuDetailItem from "./menu-detail-item/MenuDetailItem";
import "./MenuDetail.css";
interface IProps{

}
const MenuDetail : React.FC<IProps> = () => {
    return (
        <div className="container-fluid">
            <div className="introduction-menu">
                <div className="image-container-menu">
                    <img src="https://www.tljus.com/wp-content/uploads/2019/11/topBanner-menu-2.jpg" />
                </div>
                <div className="introduction-text-menu detail">
                    <h1 className="introduction-text-menu-h1 detail-h1">Cakes</h1>
                    <p className="detail-p">Actual product may differ from image shown</p>
                </div>
            </div>
            <div className="item-list row">
                <div className="col-sm-3">
                    <MenuDetailItem  />
                </div>
                <div className="col-sm-3">
                    <MenuDetailItem  />
                </div>
                <div className="col-sm-3">
                    <MenuDetailItem  />
                </div>
                <div className="col-sm-3">
                    <MenuDetailItem  />
                </div>
                <div className="col-sm-3">
                    <MenuDetailItem  />
                </div>
                <div className="col-sm-3">
                    <MenuDetailItem  />
                </div>
                <div className="col-sm-3">
                    <MenuDetailItem  />
                </div>
                <div className="col-sm-3">
                    <MenuDetailItem  />
                </div>
            </div>
        </div>
    )
}

export default MenuDetail;