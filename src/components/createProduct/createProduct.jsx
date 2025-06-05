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
    };
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
      url: 'http://localhost:3000/producto',
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
        
        <div className="container">
          
          <h1>Crear producto</h1>
          <form id="editProductForm" onSubmit={this.createProducto}>
            
            <div className="form-group">
              
              <label htmlFor="productJde">Producto</label>
              <input
                type="text"
                id="productJde"
                name="descripcion"
                value={this.state.descripcion}
                onChange={this.handleInputChange}
                placeholder="nombre del producto"
              />
            </div>
            <div className="form-group">
              
              <label htmlFor="productQrCode">Precio</label>
              <input
                type="text"
                id="productQrCode"
                name="precio"
                value={this.state.precio}
                onChange={this.handleInputChange}
                placeholder="precio producto"
              />
            </div>
            <div className="form-group">
              
              <label htmlFor="productQrCode">Fecha_caducidad</label>
              <input
                type="date"
                id="productQrCode"
                name="fecha_caducidad"
                value={this.state.fecha_caducidad}
                onChange={this.handleInputChange}
                placeholder="precio producto"
              />
            </div>
            <div className="form-group">
              
              <label htmlFor="productQrCode">Categoria</label>
              <input
                type="number"
                id="productQrCode"
                name="categorias_id"
                value={this.state.categorias_id}
                onChange={this.handleInputChange}
                placeholder="precio producto"
              />
            </div>
            <div className="form-group">
              
              <label htmlFor="productQrCode">Imagen</label>
              <input
                type="text"
                id="productQrCode"
                name="imagen"
                value={this.state.imagen}
                onChange={this.handleInputChange}
                placeholder="imagen"
              />
            </div>
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