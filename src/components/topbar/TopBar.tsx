import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopBar.css";
interface IProps {

}
const TopBar: React.FC<IProps> = () => {
    const navigate = useNavigate();
    return (
        <div className="topbar-container">
            <div className="logo-container">
                {/* <img className="logo" src="https://dangminhquan.blob.core.windows.net/bakeryshop/RDNLRD-NEW-TEMPLATE.jpg"/> */}
                <img className="logo" src="https://www.tljus.com/wp-content/themes/tlj/images/Tous_les_Jours--logo.png"/>
            </div>
            <div className="topbar-navigator-container">
                <div className="topbar-navigator-item" onClick={() => navigate("/menu")}>
                    Menu
                </div>
                <div className="topbar-navigator-item">
                    Our Story
                </div>
                <div className="topbar-navigator-item">
                    News & Events
                </div>
                <div className="topbar-navigator-item">
                    Location
                </div>
            </div>
            <div className="identification-container">
                <div className="identitfication-item" onClick={() => navigate("/cart")}>
                    Cart
                </div>
                <div className="identitfication-item">
                    Mr.Quan
                </div>
            </div>

        </div>
    )
}

export default TopBar;