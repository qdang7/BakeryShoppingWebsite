import React from "react";
import "./FeatureItem.css";
interface IProps{
    imageUrl: string,
    title: string,
    description: string
}
const FeatureItem : React.FC<IProps> = ({imageUrl, title, description}) => {
    return (
        <div>
            <div className="thumnail-container">
                <img src={imageUrl}/>
            </div>
            <div className="description">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default FeatureItem;