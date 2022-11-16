import React from "react";
import "./MenuItem.css";
interface IProps {
    imageUrl: string,
    imageText: string
    onClick : () => void
}
const MenuItem: React.FC<IProps> = ({ imageUrl, imageText, onClick }) => {
    return (
        <div>
            <div className="image-container-menu-item" onClick={() => onClick()}>
                <img src={imageUrl} />
                <h3>{imageText}</h3>
            </div>
        </div>
    )
}

export default MenuItem;