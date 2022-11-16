import React from "react";
import { CART_SESSION_ITEM } from "../../../../constants/cart.constant";
import useDispatch from "../../../../hook/use-dispatch";
import useSelector from "../../../../hook/use-selector";
import { CartItem } from "../../../../redux/slices/cart/cart.model";
import { _addItems } from "../../../../redux/slices/cart/cart.slice";
import { Product } from "../../../../redux/slices/product/product.model";
import "./MenuDetailItem.css";
interface IProps {
    product: Product
}
const MenuDetailItem: React.FC<IProps> = ({product}) => {
    // const dispatch = useDispatch()
    // const {items} = useSelector(state => state.cart)
    const addItemToCart = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        let currentCartItems = sessionStorage.getItem(CART_SESSION_ITEM)
        if(currentCartItems === null){
            sessionStorage.setItem(CART_SESSION_ITEM, JSON.stringify([]))
        }else{
            let items : CartItem[] = JSON.parse(currentCartItems)
            let updatedFlag = false
            for(let i of items){
                if(i.product.productId === product.productId){
                    i.quantity++
                    updatedFlag = true
                }
            }
            if(!updatedFlag){
                items.push({
                    product: product,
                    quantity: 1
                })
            }
            sessionStorage.setItem(CART_SESSION_ITEM, JSON.stringify(items))
        }
    }
    return (
        <div className="item-wrapper">
            <div className="card card-container" >
                <img className="card-img-top" src={product.imageUrl} alt="Card image cap" style={{objectFit: "fill"}}  />
                <div className="card-body">
                    <h5 className="card-title item-title">{product.productName}</h5>
                    <div className="btn-container">
                        <a href="#" className="btn btn-success" onClick={(e) => addItemToCart(e)}>Add to cart</a>
                        <a href="#" className="btn btn-light">View details</a>
                    </div>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>

    )
}

export default MenuDetailItem;