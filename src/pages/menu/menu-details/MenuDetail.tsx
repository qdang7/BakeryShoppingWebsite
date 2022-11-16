import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import useDispatch from "../../../hook/use-dispatch";
import useSelector from "../../../hook/use-selector";
import { _getAllProducts, _getProducts } from "../../../redux/slices/product/product.slice";
import MenuDetailItem from "./menu-detail-item/MenuDetailItem";
import "./MenuDetail.css";
interface IProps {
    
}
const MenuDetail: React.FC<IProps> = ({}) => {
    const {id} = useParams()
    const dispatch = useDispatch();

    const products = useSelector(state => state.product)

    useEffect(() => {
        if(id){
            dispatch(_getProducts(id))
        }
    },[])

    return (
        <div className="container-fluid">
            <div className="introduction-menu">
                <div className="image-container-menu">
                    <img src="https://www.tljus.com/wp-content/uploads/2019/11/topBanner-menu-2.jpg" />
                </div>
                <div className="introduction-text-menu detail">
                    <h1 className="introduction-text-menu-h1 detail-h1">Cakes</h1>
                    <p className="detail-p">Actual product may differ from image shown</p>
                </div>
            </div>
            <div className="item-list row">
                {products.products.map(p => (
                    <div key={p.productId} className="col-sm-3" >
                        <MenuDetailItem product={p}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuDetail;