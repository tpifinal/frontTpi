import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ListCat extends Component {
  constructor(props) {
    super(props);
    this.state = { categorias: [] };
  }

  componentDidMount() {
    var config = { method: "get", url: "http://localhost:3000/categorias" };
    axios(config)
      .then((response) => {
        console.log(response.data, "zzzzzzzzzzzzz");
        this.setState({ categorias: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  eliminar(ProductId) {
    var config = {
      method: "delete",
      url: `http://localhost:3000/categorias/${ProductId}`,
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
        <h1>CATEGORIAS</h1>
        <Link
          to={{
            pathname: "/createCat",
          }}
        >
          <button className="edit-button">Crear Categoria</button>
        </Link>
                
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>EDITAR</th> <th>ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categorias.map((categorias, id) => (
              <tr key={id}>
                <td>{categorias.nombre}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/updateProduct",
                      state: {
                        id: categorias.id,
                        descripcion: categorias.descripcion,
                      },
                    }}
                  >
                    <button
                      className="edit-button"
                      onClick={() =>
                        this.guardarId(
                          categorias.id,
                          categorias.descripcion,
                          categorias.precio
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
                    onClick={() => this.eliminar(categorias.id)}
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
