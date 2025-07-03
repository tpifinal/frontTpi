import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class FormSingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            email: "",
            password: "",
            rol_id: ""
        }
    }

    handleChangeName(event) {
        this.setState({ nombre: event.target.value })
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value })
    }
    handleChangePass(event) {
        this.setState({ password: event.target.value })
    }

    handleChangeRol(event) {
        this.setState({ rol_id: event.target.value })
    }

    singUp() {
    const { nombre, email, password, rol_id } = this.state;

    axios.post('http://localhost:3000/usuarios', {
        nombre: nombre,
        email: email,
        password: password,
        rol_id: rol_id
    })
    .then(response => {
        console.log('Usuario creado:', response.data);
        Swal.fire('Éxito', 'Usuario creado correctamente', 'success');
        // Si querés, podés limpiar el formulario:
        this.setState({ nombre: '', email: '', password: '', rol_id: "" });
    })
    .catch(error => {
        console.error('Error al crear usuario:', error);
        Swal.fire('Error', 'No se pudo crear el usuario', 'error');
    });
}

    manejadorSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <form className="mid-form" onSubmit={this.manejadorSubmit}>
                <form className="form">
                    <input required value={this.state.nombre} onChange={(e) => this.handleChangeName(e)} />
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
                    <input required  value={this.state.password} onChange={(e) => this.handleChangePass(e)} type='password'/>
                    <label className="lbl-nombre">
                        <span className="text-nomb">Contraseña</span>
                    </label>
                </form>
                <br></br>
                 <form className="form">
                    <input required  value={this.state.rol_id} onChange={(e) => this.handleChangeRol(e)} type='rol_id'/>
                    <label className="lbl-nombre">
                        <span className="text-nomb">Rol</span>
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