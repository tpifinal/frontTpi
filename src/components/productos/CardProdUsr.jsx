import React, { Component } from "react";
import Swal from "sweetalert2";

export default class CardProdUsr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producto: {},
      nombre: this.props.nombre,
    };
  }

  componentDidMount() {
    this.setState({
      producto: this.props.producto,
    });
  }

  agregarCarrito() {
    let prod = JSON.parse(localStorage.getItem("productos"));

    // Si no hay productos todavía, lo inicializamos como array vacío
    if (!Array.isArray(prod)) {
      prod = [];
    }

    // 1️⃣ Validar si el producto ya está en el carrito
    const yaExiste = prod.some(
      (p) => p.id === this.state.producto.id // 👈 Comparación por ID
    );

    if (yaExiste) {
      // 2️⃣ Mostrar alerta si ya está
      Swal.fire("Aviso", "⚠ Este producto ya está en el carrito", "warning");
      return; // 👈 Evita que siga y vuelva a agregarlo
    }

    // 3️⃣ Si no existe, lo agregás
    prod.push(this.state.producto);
    localStorage.setItem("productos", JSON.stringify(prod));

    // 4️⃣ Toast de éxito
    Swal.fire(
      "Éxito",
      "✔ Producto agregado al carrito correctamente!",
      "success"
    );
  }

  render() {
    const { producto } = this.state;

    return (
      <article className="item-prod" id="article-template">
        <div className="image-wrap">
          <img src={producto.imagen} alt="comida" />
        </div>
        <h2>{producto.nombre}</h2>
        <div className="cont-spanProd">
          <span className="span-cardProd">
            Descripcion: {producto.descripcion}
          </span>
          <br />
        </div>
        <span className="precio-prod">Precio: {producto.precio}$</span>
        <br />
        <span className="stock-prod">Vencim.: {producto.fecha_caducidad}</span>
        <br />
        {/* <span className="stock-prod">Stock: 13</span><br/> */}
        <span>
          <b>- Categoria: </b> {this.state.nombre}
        </span>
        <button onClick={() => this.agregarCarrito()}> + Carrito</button>
      </article>
    );
  }
}
