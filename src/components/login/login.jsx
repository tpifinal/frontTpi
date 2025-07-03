import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: "",
                password: ""
            },
            resultLogin: null
        }
    }
// async se utiliza para declarar una funcion asincrona 
// await se utiliza para esperar que una promesa se resuelva
    handleChange = async e => {
        await this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    }

    manejadorSubmit = e => {
        e.preventDefault();
    }

    login() {
     axios.post("http://localhost:3000/login", this.state.user)
            .then(res => {
                if (res.data === "Usuario no encontrado") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Usuario o contraseña incorrectos',
                        confirmButtonColor: 'red',
                    });
                } else {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    window.location.href = "/menuAdministrador";
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error al iniciar sesión',
                    confirmButtonColor: 'red',
                });
            });
    }

    render() {
        return (
            <div id="login">
                <div className="center">
                    <div id="contenido-2">
                        <h1 className="subheader">Login</h1>

                        {/* Creacion de un formulario */}
                        <form className="mid-form" onSubmit={this.manejadorSubmit}>
                            <form className="form">
                                <input required name="email" onChange={this.handleChange} />
                                <label className="lbl-nombre">
                                    <span className="text-nomb">Email</span>
                                </label>
                            </form>
                            <form className="form">
                                <input type="password" required name="password" onChange={this.handleChange} />
                                <label className="lbl-nombre">
                                    <span className="text-nomb">Contraseña</span>
                                </label>
                            </form>
                            <div className="clearfix"></div>
                            <br />
                            <div className="cont-btn-login">
                                <button onClick={() => this.login()} type="bottom" className="btn btn-confirmLogin">Ingresar</button></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}