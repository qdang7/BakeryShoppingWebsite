import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDispatch from "../../hook/use-dispatch";
import useSelector from "../../hook/use-selector";
import { _getAllCategories } from "../../redux/slices/category/category.slice";
import MenuItem from "./components/MenuItem";
import "./Menu.css"
interface IProps {

}
const Menu: React.FC<IProps> = () => {
    const categories = useSelector(state => state.category)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(_getAllCategories())
    },[])
    const onNavigate = (cateID: string) => {
        console.log("onNavigate called !")
        navigate(`${location.pathname}/${cateID}`)
    }

    return (
        <div className="container-fluid">
            <div className="introduction-menu">
                <div className="image-container-menu">
                    <img src="https://dangminhquan.blob.core.windows.net/bakeryshop/menu-header-1.jpg" />
                </div>
                <div className="introduction-text-menu">
                    <h1 className="introduction-text-menu-h1">Menu</h1>
                    <p>Made from the finest ingredients</p>
                </div>
            </div>
            <div className="menu-item-container row">
                {categories.categories.map(cate => (
                    <div className="col-sm-4">
                    <MenuItem
                        imageUrl={cate.imageName}
                        imageText={cate.categoryName}
                        onClick={() => onNavigate(cate.categoryId ? cate.categoryId : "" )}
                    />
                </div>
                ))}
            </div>
        </div>
    )
}
export default Menu;