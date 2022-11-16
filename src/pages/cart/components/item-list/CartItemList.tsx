import React from "react";
import { CartItem } from "../../../../redux/slices/cart/cart.model";
import { _getAllProducts } from "../../../../redux/slices/product/product.slice";
import "./CartItemList.css";
interface IProps {
    items: CartItem[]
}
const CartItemList: React.FC<IProps> = ({ items }) => {
    return (
        <div>
            <table className="table">
                <tbody>
                    {items.map((i, index) => (
                        <tr>
                            <th scope="row">
                                {index}
                            </th>
                            <td className="item-img-box">
                                <div className="itemList-imgContainer">
                                    <img src={i.product.imageUrl} />
                                </div>
                            </td>
                            <td>
                                <h4>{i.product.productName}</h4>
                                <p className="gray-text">{i.product.description}</p>
                                {/* <p className="gray-text">Size: L, Topping: Mixed Fruit, Candles </p> */}
                                
                            </td>
                            <td>
                                <div className="item-price-box">
                                    <p><del className="gray-text">{i.product.originalPrice}$</del> <b>{i.product.discountedPrice}$</b></p>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CartItemList;