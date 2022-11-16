import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import TopBar from './components/topbar/TopBar';
import MenuDetail from './pages/menu/menu-details/MenuDetail';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/menu/:id' element={<MenuDetail/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
