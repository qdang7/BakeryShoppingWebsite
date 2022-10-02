import React from "react";
import "./TopBar.css";
interface IProps {

}
const TopBar: React.FC<IProps> = () => {
    return (
        <div className="topbar-container">
            <div className="logo-container">
                <img className="logo" src="https://www.tljus.com/wp-content/themes/tlj/images/Tous_les_Jours--logo.png"/>
            </div>
            <div className="topbar-navigator-container">
                <div className="topbar-navigator-item">
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
                <div className="identitfication-item">
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