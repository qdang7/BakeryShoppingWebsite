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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login/Login';
import Main from './pages/main/Main';

function App() {
  return (
    <div className="App">
      <Main/>
      <ToastContainer />
    </div>
  );
}

export default App;
