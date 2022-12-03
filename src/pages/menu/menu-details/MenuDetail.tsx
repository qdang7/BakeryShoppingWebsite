import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import useDispatch from "../../../hook/use-dispatch";
import useSelector from "../../../hook/use-selector";
import { Category } from "../../../redux/slices/category/category.model";
import { _getCategoryById } from "../../../redux/slices/category/category.slice";
import { _getAllProducts, _getProducts } from "../../../redux/slices/product/product.slice";
import MenuDetailItem from "./menu-detail-item/MenuDetailItem";
import "./MenuDetail.css";
interface IProps {
    
}
const MenuDetail: React.FC<IProps> = ({}) => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const products = useSelector(state => state.product)
    const categories = useSelector(state => state.category)
    const [selectedCategory, setSelectedCategory] = useState<Category>({
        imageName: "",
        backgroundImage: "",
        categoryName: ""
    })

    useEffect(() => {
        if(id){
            dispatch(_getCategoryById(id)).then(() => {
                dispatch(_getProducts(id))
            })    
        }
    },[id])

    useEffect(() => {
        setSelectedCategory(categories.selectedCategory)
    }, [categories.selectedCategory])


    return (
        <div className="container-fluid">
            <div className="introduction-menu">
                <div className="image-container-menu">
                    <img src={selectedCategory.backgroundImage != undefined ? selectedCategory.backgroundImage : ""}/>
                </div>
                <div className="introduction-text-menu detail">
                    <h1 className="introduction-text-menu-h1 detail-h1">{selectedCategory.categoryName != undefined ? categories.selectedCategory.categoryName : ""}</h1>
                    {/* <p className="detail-p">Actual product may differ from image shown</p> */}
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