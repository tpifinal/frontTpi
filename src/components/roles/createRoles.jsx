import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateRoles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descripcion: this.props.descripcion || "",
      fecha_caducidad: this.props.fecha_caducidad || "",
      categorias_id: this.props.categoria_id || 0,
      imagen: this.props.imagen || "",
      precio: this.props.precio || "",
      categories: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: name === "categorias_id" ? Number(value) : value });
  };

  createRol = (event) => {
    let id = parseFloat(this.props.roles);
    event.preventDefault();
    const { nombre } = this.state;

    var config = {
      method: "post",
      url: "http://localhost:3000/roles",
      data: { nombre },
    };
    axios(config)
      .then((response) => {
        alert("rol creado con éxito");
      })
      .catch(function (error) {
        alert("Error al crear el rol");
      });
  };

  render() {
    return (
      <main>
        <div className="product-form-container">
          <h1>Crear rol</h1>

          <form id="createProductForm" onSubmit={this.createRol}>
            <fieldset className="form-fields">
              <div className="form-group">
                <label htmlFor="descripcion">Rol</label>
                <input
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  value={this.state.descripcion}
                  onChange={this.handleInputChange}
                  placeholder="Nombre del rol"
                />
              </div>
            </fieldset>

            <div className="button-group">
              <Link to="/listRoles">
                <button type="button" className="cancel-button">
                  Cancelar
                </button>
              </Link>

              <button type="submit" className="accept-button">
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
