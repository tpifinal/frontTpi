import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class UpdateProduct extends Component {
  constructor(props) {
    let productoDescription = localStorage.getItem("productoDescription");
    let productoPrecio = localStorage.getItem("productoPrecio");
    
    super(props);
    this.state = {
      id2: this.props.descripcion,
      descripcion: this.props.descripcion || productoDescription,
      precio: this.props.precio || productoPrecio,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  updateProducto = (event) => {
    const productoID = localStorage.getItem("productoID");
    event.preventDefault();
    let id = parseFloat(this.props.producto);

    const { id2, descripcion, precio } = this.state;
    console.log("descripcion", id2);

    var config = {
      method: "patch",
      url: `http://localhost:3000/producto/${productoID}`,
      data: { descripcion, precio },
    };
    axios(config)
      .then((response) => {
        console.log(response, "response");
        alert("Producto actualizado con éxito");
      })
      .catch(function (error) {
        console.log(error);
        alert("Error al actualizar el producto");
      });
  };
  render() {
    return (
      <main>
        {" "}
        <div className="container">
          {" "}
          <h1>Editar producto</h1>{" "}
          <form id="editProductForm" onSubmit={this.updateProducto}>
            {" "}
            <div className="form-group">
              {" "}
              <label htmlFor="productJde">Producto</label>{" "}
              <input
                type="text"
                id="productJde"
                name="descripcion"
                value={this.state.descripcion}
                onChange={this.handleInputChange}
                placeholder="nombre del producto"
              />{" "}
            </div>{" "}
            <div className="form-group">
              {" "}
              <label htmlFor="productQrCode">Precio</label>{" "}
              <input
                type="text"
                id="productQrCode"
                name="precio"
                value={this.state.precio}
                onChange={this.handleInputChange}
                placeholder="precio producto"
              />{" "}
            </div>{" "}
            <div className="button-group">
              {" "}
              <Link to="/listProduct">
                {" "}
                <button type="button" className="cancel-button">
                  {" "}
                  Cancelar{" "}
                </button>{" "}
              </Link>{" "}
              <button type="submit" className="accept-button">
                {" "}
                Aceptar{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </main>
    );
  }
}