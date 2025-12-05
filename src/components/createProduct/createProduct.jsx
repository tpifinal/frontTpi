import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateProduct extends Component {
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
  componentDidMount() {
    axios
      .get("http://localhost:3000/categorias")
      .then((response) => {
        this.setState({ categories: response.data });
      })
      .catch(() => {
        alert("Error al cargar categorías");
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: name === "categorias_id" ? Number(value) : value });
  };

  createProducto = (event) => {
    let id = parseFloat(this.props.producto);
    event.preventDefault();
    const { descripcion, fecha_caducidad, categorias_id, imagen, precio } =
      this.state;

    var config = {
      method: "post",
      url: "http://localhost:3000/producto",
      data: { descripcion, fecha_caducidad, categorias_id, imagen, precio },
    };
    axios(config)
      .then((response) => {
        alert("Producto creado con éxito");
      })
      .catch(function (error) {
        alert("Error al crear el producto");
      });
  };

  render() {
    return (
      <main>
        <div className="product-form-container">
          <h1>Crear producto</h1>

          <form id="createProductForm" onSubmit={this.createProducto}>
            <fieldset className="form-fields">
              <div className="form-group">
                <label htmlFor="descripcion">Producto</label>
                <input
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  value={this.state.descripcion}
                  onChange={this.handleInputChange}
                  placeholder="Nombre del producto"
                />
              </div>

              <div className="form-group">
                <label htmlFor="precio">Precio</label>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  value={this.state.precio}
                  onChange={this.handleInputChange}
                  placeholder="Precio del producto"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha_caducidad">Fecha de caducidad</label>
                <input
                  type="date"
                  id="fecha_caducidad"
                  name="fecha_caducidad"
                  value={this.state.fecha_caducidad}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="categorias_id">Categoría</label>
                <select
                  id="categorias_id"
                  name="categorias_id"
                  value={this.state.categorias_id}
                  onChange={this.handleInputChange}
                >
                  <option value="">Seleccione una categoría</option>

                  {this.state.categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="imagen">Imagen (URL)</label>
                <input
                  type="text"
                  id="imagen"
                  name="imagen"
                  value={this.state.imagen}
                  onChange={this.handleInputChange}
                  placeholder="/src/assets/...jpg"
                />
              </div>
            </fieldset>

            <div className="button-group">
              <Link to="/listProduct">
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
