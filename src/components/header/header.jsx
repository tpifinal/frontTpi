
import React, {Component} from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
render(){
    return(
        <header id="header">
            {/* logo */}
            <div className="center">
                <img className="app-logo" src="" alt="" />
                <span id="brand">
                    <strong>YAFU</strong> kiosco virtual
                </span>
            </div>
            {/* menu */}
            <nav id="menu">
                <ul>
                    <li>
                       <NavLink to="/home" className={({isActive}) => (isActive ? "active" : 'none')} >Categorias</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/carrito" className={({isActive}) => (isActive ? "active" : 'none')} >Carrito</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({isActive}) => (isActive ? "active" : 'none')} >Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

}