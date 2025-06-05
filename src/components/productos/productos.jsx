import React, { Component } from "react";
import ListaProducto from "./listaproductos";
import axios from "axios";

export default class Producto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            nombre: this.props.nombre
        }
        
        
    }
    componentDidMount() {
        let id = parseFloat(this.props.id);                   //atrapa el id que le llega por parametro
      
        var config = {
            method: 'get',
            url: `http://localhost:3000/producto/${id}`,
         
        };

        //realizar solicitudes http
        //then y chatch => metodos que manejan la respuesta de la promesa
        axios(config)
            .then((response) => {
                    this.setState({
                        productos: response.data
                    })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { nombre } = this.props;
        
        return (
            <div className="center">
                <div id="contenido">
                    <div className="Productos">
                        <h1>Productos de: {nombre}</h1>
                        <ListaProducto 
                        productosCapture = {this.state.productos}
                        nameCategoria = {nombre}
                        />
                    </div>
                </div>
            </div>
        );
    }
}