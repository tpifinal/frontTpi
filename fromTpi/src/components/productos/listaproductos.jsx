import React, { Component} from "react";
import CardProdUsr from "./CardProdUsr";

export default class ListaProducto extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        const prodCapture = this.props.productosCapture
        const nombre = this.props.nameCategoria
        return(
            <div id="listProductos">
                {
                    prodCapture.map((descripcion, id) => {
                        return (
                            <CardProdUsr
                                key={id}
                                producto={descripcion}
                                nombre = {nombre}
                            />
                        )
                    })
                }
            </div>
        );
    }
}