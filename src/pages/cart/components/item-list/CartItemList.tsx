import React from "react";
import { ADD_QUANTITY_TRANSACTION_CODE, REDUCE_QUANTITY_TRANSACTION_CODE, REMOVE_FROM_CART, UPDATE_CART_TRANSACTION_CODE } from "../../../../constants/cart.constant";
import { CartItem } from "../../../../redux/slices/cart/cart.model";
import { _getAllProducts } from "../../../../redux/slices/product/product.slice";
import "./CartItemList.css";
interface IProps {
    items: CartItem[],
    updateCart : (id: string, code: UPDATE_CART_TRANSACTION_CODE) => void
}
const CartItemList: React.FC<IProps> = ({ items, updateCart }) => {
    return (
        <div>
            <table className="table">
                <tbody>
                    {items.map((i, index) => (
                        <tr>
                            <th scope="row">
                                <p style={{marginTop: "1.2em"}}>{index + 1}</p>
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
                                <div>
                                    <div className="flex item-quantity">
                                        <button className="btn btn-sucess" onClick={() => updateCart(i.product.productId ? i.product.productId : "" , ADD_QUANTITY_TRANSACTION_CODE)}>+</button>
                                        <p style={{marginTop: "1.2em"}}><b>{i.quantity}</b></p>
                                        <button className="btn btn-sucess" onClick={() => updateCart(i.product.productId ? i.product.productId : "" , REDUCE_QUANTITY_TRANSACTION_CODE)}>-</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="item-price-box" >
                                    <div><del className="gray-text">{i.product.originalPrice * i.quantity}$</del> <b>{i.product.discountedPrice * i.quantity}$</b></div>
                                </div>
                            </td>
                            <td>
                                <div className="btn-container-cart">
                                    <button className="btn btn-danger btn-sm" onClick={() => updateCart(i.product.productId ? i.product.productId : "" , REMOVE_FROM_CART)}>-</button>
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