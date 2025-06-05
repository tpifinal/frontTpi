import React, { Component } from "react";

export default class CardCarrito extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.prodCarrito.name,
            imagen: this.props.prodCarrito.imagen,
            precio: this.props.prodCarrito.precio,
            descripcion: this.props.prodCarrito.descripcion,
            id_categoria: this.props.prodCarrito.id_categoria,
            stock: this.props.prodCarrito.stock,
        }
    }

    render(){
        console.log(this.props.prodCarrito)
        return (
            <article className="item-prod" id="article-template">
                <div className="image-wrap">
                    <img src={this.state.imagen} alt="comida" />
                </div>
                <h2>{this.state.name}</h2>
                <div className="cont-spanProd">
                <span className="span-cardProd">Descripcion: {this.state.descripcion}</span><br/>
                </div>
                <span className="precio-prod">Precio: {this.state.precio}</span><br/>
                <span className="stock-prod">Stock: {this.state.stock}</span><br/>
                <span><b>- Categoria: </b> {this.state.nameCat}</span>
            </article>
        )
    }
}