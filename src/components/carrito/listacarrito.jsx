import React, { Component} from "react";
import CardCarrito from "./CardCarrito";

export default class ListaCarrito extends Component {
    constructor(props){
        super(props);
        this.state = {} 
    }

    render(){
        const productosCarrito = this.props.productosCarrito
        console.log(productosCarrito)
        return(
            <div className="listaCarrito">
                {
                    productosCarrito.map((itemProd, i) => {
                        return (
                            <CardCarrito
                                key={i}
                                prodCarrito={itemProd}
                            />
                        )
                    })
                }
            </div>
        )
    }
}