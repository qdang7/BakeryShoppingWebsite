import React from "react";
import "./MenuItem.css";
interface IProps {
    imageUrl: string,
    imageText: string
}
const MenuItem: React.FC<IProps> = ({ imageUrl, imageText }) => {
    return (
        <div>
            <div className="image-container-menu-item">
                <img src={imageUrl} />
                <h3>{imageText}</h3>
            </div>
        </div>
    )
}

export default MenuItem;