import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TopBar from "../../components/topbar/TopBar";
import Cart from "../cart/Cart";
import Checkout from "../checkout/Checkout";
import Home from "../home/Home";
import Login from "../login/Login";
import Menu from "../menu/Menu";
import MenuDetail from "../menu/menu-details/MenuDetail";
interface IProps {

}
const Main: React.FC<IProps> = () => {
    const location = useLocation()
    if (location.pathname === "/") {
        return (
            <Login />
        )
    } else {
        return (
            <>
                <TopBar />
                <Routes>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/menu' element={<Menu />}></Route>
                    <Route path='/menu/:id' element={<MenuDetail />}></Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </>
        )
    }
}
export default Main