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
            rol_id: "",
            roles: [] // aquí guardamos la lista de roles
        }
    }

    componentDidMount() {
        // Consumir el endpoint que lista los roles
        axios.get('http://localhost:3000/roles') // Ajustá la URL a la de tu backend
            .then(response => {
                this.setState({ roles: response.data });
            })
            .catch(error => {
                console.error('Error al obtener roles:', error);
                Swal.fire('Error', 'No se pudieron cargar los roles', 'error');
            });
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
                // Limpiar el formulario:
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
                <div className="form">
                    <input required value={this.state.nombre} onChange={(e) => this.handleChangeName(e)} />
                    <label className="lbl-nombre">
                        <span className="text-nomb">Nombre</span>
                    </label>
                </div>
                <br />
                <div className="form">
                    <input required value={this.state.email} onChange={(e) => this.handleChangeEmail(e)} />
                    <label className="lbl-nombre">
                        <span className="text-nomb">Email</span>
                    </label>
                </div>
                <br />
                <div className="form">
                    <input required value={this.state.password} onChange={(e) => this.handleChangePass(e)} type='password' />
                    <label className="lbl-nombre">
                        <span className="text-nomb">Contraseña</span>
                    </label>
                </div>
                <br />
                <div className="form">
                    <select required value={this.state.rol_id} onChange={(e) => this.handleChangeRol(e)}>
                        <option value="">Selecciona un rol</option>
                        {this.state.roles.map((rol) => (
                            <option key={rol.id} value={rol.id}>{rol.nombre}</option>
                        ))}
                    </select>
                    <label className="lbl-nombre">
                        <span className="text-nomb">Rol</span>
                    </label>
                </div>
                <br />
                <div className="clearfix"></div>
                <br />
                <button onClick={() => this.singUp()} type="submit" className="btn btn-singUp singUpConfirm">Registrarme</button>
            </form>
        );
    }
}