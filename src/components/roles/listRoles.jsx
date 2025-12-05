import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ListRoles extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [] };
  }

  componentDidMount() {
    var config = { method: "get", url: "http://localhost:3000/roles" };
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
  guardarId(id, description, precio) {
    localStorage.setItem("productoID", id);
    localStorage.setItem("productoDescription", description);
    localStorage.setItem("productoPrecio", precio);
  }

  render() {
    return (
      <main>
        <h1>ROLES</h1>
        <Link
          to={{
            pathname: "/createRoles",
          }}
        >
          <button className="edit-button">Crear Roles</button>
        </Link>
                
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Rol</th>
              <th>EDITAR</th> <th>ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productos.map((producto, id) => (
              <tr key={id}>
                <td>{producto.nombre}</td>
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
                    <button
                      className="edit-button"
                      onClick={() =>
                        this.guardarId(
                          producto.id,
                          producto.descripcion,
                          producto.precio
                        )
                      }
                    >
                      Editar
                    </button>{" "}
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
