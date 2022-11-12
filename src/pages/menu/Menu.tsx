import React from "react";
import MenuItem from "./components/MenuItem";
import "./Menu.css"
interface IProps {

}
const Menu: React.FC<IProps> = () => {
    return (
        <div className="container-fluid">
            <div className="introduction-menu">
                <div className="image-container-menu">
                    <img src="https://dangminhquan.blob.core.windows.net/bakeryshop/menu-header-1.jpg" />
                </div>
                <div className="introduction-text-menu">
                    <h1 className="introduction-text-menu-h1">Menu</h1>
                    <p>Made from the finest ingredients</p>
                </div>
            </div>
            <div className="menu-item-container row">
                <div className="col-sm-4">
                    <MenuItem
                        imageUrl="https://dangminhquan.blob.core.windows.net/bakeryshop/menu-catering.jpg"
                        imageText="Bread & Pastry"
                    />
                </div>
                <div className="col-sm-4">
                    <MenuItem
                        imageUrl="https://dangminhquan.blob.core.windows.net/bakeryshop/menu-cake.jpg"
                        imageText="Cake"
                    />
                </div>
                <div className="col-sm-4">
                    <MenuItem
                        imageUrl="https://dangminhquan.blob.core.windows.net/bakeryshop/menu-beverage.jpg"
                        imageText="Beverages"
                    />
                </div>
                <div className="col-sm-4">
                    <MenuItem
                        imageUrl="https://dangminhquan.blob.core.windows.net/bakeryshop/menu-beverage.jpg"
                        imageText="Beverages"
                    />
                </div>
            </div>
        </div>
    )
}
export default Menu;