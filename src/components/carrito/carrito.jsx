import React, {Component} from "react";
import ListaCarrito from "./listacarrito";
import Swal from 'sweetalert2';

export default class Carrito extends Component{
    constructor(props){
        super(props);
        this.state = {
            productos : [],
            message: "",
            total: 0
        }
    }

    componentDidMount(){
        this.obtenerProd()
    }

    obtenerProd(){
        let productos = JSON.parse(localStorage.getItem("productos"))
        if (productos) {
            this.setState({ productos:productos })   
        }else{
            Swal.fire({
                icon: 'info',
                title: 'Carrito vacio',
                text: 'No tienes ningun producto cargado en el carrito',
                iconColor: 'orange',
                confirmButtonColor: 'orange',
            }).then(function() {
                window.location.href = "/Home";
            });
        }
    }

    total(){
        var total = 0;
        for (let i = 0; i < this.state.productos.length; i++) {
            total += this.state.productos[i].precio;
        }
        this.setState({
            total:total
        })
        setTimeout(() => {
            this.alert()
        }, 1000);
    }

    alert(){
        Swal.fire({
            icon: 'succes',
            title: 'Compra exitosa',
            html: 'Tu compra fue de: $' + this.state.total+ ' en total',
            iconColor: 'green',
            confirmButtonColor: 'green',
        }).then(function() {
            window.location.href = "/Home";
        });
    }
    Borrar(){
        localStorage.clear();
        location.reload();
    }

    render(){
        return(
            <div id="carrito">
                <div className="center">
                    <div id="contenido-2">
                        <h1 className="subheader"> Esta seccion del carrito</h1>
                            <ListaCarrito
                            productosCarrito= { this.state.productos }
                            />
                    </div>
                    <div className="cont-btn-icon">
                        <button onClick={() => this.total()} className="btn-comprar">PAGAR<i class="fa-solid fa-cart-shopping"></i></button>
                        <button onClick={() => this.Borrar()} className="btn-comprar">Borrar<i class="fa-solid fa-cart-shopping"></i></button>

                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}