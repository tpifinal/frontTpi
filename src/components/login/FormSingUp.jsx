import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class FormSingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            pass: ""
        }
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value })
    }
    handleChangePass(event) {
        this.setState({ pass: event.target.value })
    }

    singUp() {
        alert("Procesando su registro, verificar email.")
    }

    manejadorSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <form className="mid-form" onSubmit={this.manejadorSubmit}>
                <form className="form">
                    <input required value={this.state.name} onChange={(e) => this.handleChangeName(e)} />
                    <label className="lbl-nombre">
                        <span className="text-nomb">Nombre</span>
                    </label>
                </form>
                <br></br>
                <form className="form">
                    <input required  value={this.state.email} onChange={(e) => this.handleChangeEmail(e)} />
                    <label className="lbl-nombre">
                        <span className="text-nomb">Email</span>
                    </label>
                </form>
                <br></br>
                <form className="form">
                    <input required  value={this.state.pass} onChange={(e) => this.handleChangePass(e)} type='password'/>
                    <label className="lbl-nombre">
                        <span className="text-nomb">Contraseña</span>
                    </label>
                </form>
                <br></br>
                <div className="clearfix"></div>
                <br />
                <button onClick={() => this.singUp()} type="submit" className="btn btn-singUp singUpConfirm">Registrarme</button>
            </form>
        );
    }
}