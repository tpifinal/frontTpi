import React, { Component } from "react";
import Card from "./Card";

export default class ListaCategorias extends Component {

    constructor(props) {
        super(props);
        this.state = {}                  //representa el estado del componente
    }

    render() {
        const categorias = this.props.categorias;

        return (
            <div id="listCards">
                {
                    categorias.map((categoria, i) => {
                        return (
                            <Card
                            id={categoria.id}
                            nombre={categoria.nombre}
                            imagen={categoria.imagen}
                            />
                        )
                    })
                }
            </div>
        );
    }
}