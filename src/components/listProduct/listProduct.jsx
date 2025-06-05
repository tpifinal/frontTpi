import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [] };
  }

  componentDidMount() {
    var config = { method: "get", url: "http://localhost:3000/producto" };
    axios(config)
      .then((response) => {
        console.log(response.data, "zzzzzzzzzzzzz");
        this.setState({ productos: response.data });
        console.log(this.state.productos[0].descripcion, "555555555555");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  eliminar(ProductId) {
    var config = {
      method: "delete",
      url: `http://localhost:3000/producto/${ProductId}`,
    };
    axios(config)
      .then((response) => {
        console.log(response, "fghgfhg");
      })
      .catch(function (error) {
        console.log(error);
      });
      window.location.reload();
  }
  guardarId(id, description,precio) {
    localStorage.setItem("productoID", id);
    localStorage.setItem("productoDescription", description);
    localStorage.setItem("productoPrecio", precio);
  }

  render() {
    return (
      <main>
        <h1>PRODUCTOS</h1>
        <Link
          to={{
            pathname: '/createProduct',
          }}
        >
          <button className="edit-button">Crear Productos</button>
        </Link>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Productos</th> <th>fecha_caducidad</th> <th>precio</th>
              <th>EDITAR</th> <th>ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productos.map((producto, id) => (
              <tr key={id}>
                <td>{producto.descripcion}</td>
                <td>{producto.fecha_caducidad}</td> <td>${producto.precio}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/updateProduct",
                      state: {
                        id: producto.id,
                        descripcion: producto.descripcion,
                      },
                    }}
                  >
                    <button className="edit-button" onClick={() => this.guardarId(producto.id,producto.descripcion,producto.precio)}>Editar</button>{" "}
                  </Link>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => this.eliminar(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}