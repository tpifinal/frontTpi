import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

export default class MenuAdministrador extends Component {


    render() {
        return (
            <div id="login">
                <div className="center">
                    <div id="contenido-2">
                        <h1 className="subheader">Menu Administrador</h1>

                        <div className="cont-btn-login">
                            <Link to="/singUp">
                                <button type="submit" className="btn btn-singUp">Usuarios</button>
                            </Link>
                            <Link to="/singUp">
                                <button type="submit" className="btn btn-singUp">Roles</button>
                            </Link>
                            <Link to="/singUp">
                                <button type="submit" className="btn btn-singUp">Categorias</button>
                            </Link>
                             <Link to="/listProduct">
                                <button type="submit" className="btn btn-singUp">Productos</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}