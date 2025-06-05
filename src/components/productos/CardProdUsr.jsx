import React, { Component} from "react";

export default class CardProdUsr extends Component {
    constructor(props){
        super(props);
        this.state = {
            producto: {},
            nombre: this.props.nombre
        }
    }

    componentDidMount(){
        this.setState({
            producto:this.props.producto
        })
    }

    agregarCarrito(){
        var prod = JSON.parse(localStorage.getItem("productos"));
        if (Array.isArray(prod)) {                                                          // prod se combierte en array
            prod.push(this.state.producto)                                                  // agrego obj de producto al array
        }else{
            prod = [this.state.producto]                                                    // si esta vacio le agrego un nuevo objeto producto
        }
        window.localStorage.setItem("productos", JSON.stringify(prod));                     // subo al storage el array prod
    }

    render(){
        const { producto } = this.state 

        
        return(
            <article className="item-prod" id="article-template">
                <div className="image-wrap">
                    <img src={producto.imagen} alt="comida" />
                </div>
                <h2>{producto.nombre}</h2>
                <div className="cont-spanProd">
                <span className="span-cardProd">Descripcion: {producto.descripcion}</span><br/>
                </div>
                <span className="precio-prod">Precio: {producto.precio}$</span><br/>
                <span className="stock-prod">Vencim.: {producto.fecha_caducidad}</span><br/>
                {/* <span className="stock-prod">Stock: 13</span><br/> */}
                <span><b>- Categoria: </b> { this.state.nombre}</span>
                <button onClick={() => this.agregarCarrito()}> + Carrito</button>
            </article>
        )
    }
}