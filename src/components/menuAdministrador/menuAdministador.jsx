import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default class MenuAdministrador extends Component {
  render() {
    return (
      <div id="login">
        <div className="center">
          <div id="contenido-2">
            <h1 className="subheader">Menu Administrador</h1>

            <div className="cont-btn-login">
              <Link to="/singUp">
                <button className="btn-menu">Usuarios</button>
              </Link>
              <Link to="/listRoles">
                <button className="btn-menu">Roles</button>
              </Link>
              <Link to="/singUp">
                <button className="btn-menu">Categorias</button>
              </Link>
              <Link to="/listProduct">
                <button className="btn-menu">Productos</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
