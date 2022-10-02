import React from "react";
import "./CartItemList.css";
interface IProps {

}
const CartItemList: React.FC<IProps> = () => {
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td className="item-img-box">
                            <div className="itemList-imgContainer">
                                <img src="https://www.tljus.com/wp-content/uploads/2022/07/Web_PDP_ChocoCloudCake.png" />
                            </div>
                        </td>
                        <td>
                            <h4>Strawberry Cake</h4>
                            <p className="gray-text">Strawberry cake description here</p>
                            <p className="gray-text">Size: L, Topping: Mixed Fruit, Candles </p> 
                        </td>
                        <td>
                            <div className="item-price-box">
                                <p><del className="gray-text">520$</del> <b>440$</b></p>
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td className="item-img-box">
                            <div className="itemList-imgContainer">
                                <img src="https://www.tljus.com/wp-content/uploads/2022/07/Web_PDP_ChocoCloudCake.png" />
                            </div>
                        </td>
                        <td>
                            <h4>Strawberry Cake</h4>
                            <p className="gray-text">Strawberry cake description here</p>
                            <p className="gray-text">Size: L, Topping: Mixed Fruit, Candles </p> 
                        </td>
                        <td>
                            <div className="item-price-box">
                                <p><del className="gray-text">520$</del> <b>440$</b></p>
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            3
                        </th>
                        <td className="item-img-box">
                            <div className="itemList-imgContainer">
                                <img src="https://www.tljus.com/wp-content/uploads/2022/07/Web_PDP_ChocoCloudCake.png" />
                            </div>
                        </td>
                        <td>
                            <h4>Strawberry Cake</h4>
                            <p className="gray-text">Strawberry cake description here</p>
                            <p className="gray-text">Size: L, Topping: Mixed Fruit, Candles </p> 
                        </td>
                        <td>
                            <div className="item-price-box">
                                <p><del className="gray-text">520$</del> <b>440$</b></p>
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartItemList;