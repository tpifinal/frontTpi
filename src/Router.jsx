import React, {Component} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/categorias/home";
import Producto from "./components/productos/productos";
import Footer from "./components/footer/footer";
import Ingreso from "./components/capturaIngreso/ingreso";
import Carrito from "./components/carrito/carrito";
import Login from "./components/login/login";
import SingUp from "./components/login/SingUp";
import FormSingUp from "./components/login/FormSingUp";
import ListProduct from "./components/listProduct/listProduct";
import UpdateProduct from "./components/updateProduct/updateProduct";
import CreateProduct from "./components/createProduct/createProduct";

export default class Router extends Component {
render(){
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
               
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/productos/" element={<Producto />} />
            <Route path="/shared/:id/:nombre" element={<Ingreso />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SingUp" element={<SingUp />} />
            <Route path="/FormSingUp" element={<FormSingUp />} />
            <Route exact path="/listProduct" element={<ListProduct />} />
            <Route exact path="/updateProduct" element={<UpdateProduct />} />
            <Route exact path="/createProduct" element={<CreateProduct />} />

            </Routes>
            <div className="clearfix"></div>
            <Footer/>
        </BrowserRouter>
    )
} 
}