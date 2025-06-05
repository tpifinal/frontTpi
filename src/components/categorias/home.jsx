import React, { Component } from 'react';
import Slider from '../slider/slider';
import ListaCategorias from './ListaCategorias';
import axios from "axios";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
        }
    }


    //metodo ciclo de vida del componente
    componentDidMount() {
        const config = {
            method: 'get',
            url: 'http://localhost:3000/categorias' //url del endpoint
        };

        //axios libr de js para solicitudes http
        axios(config)
            .then((response) => {
                this.setState({
                    categorias: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div id="home">
                <Slider
                    titulo=" ¡ Bienvenido a Kiosco Yafu !"
                    subTitulo="Lunes a viernes de 09:00 hs - 22:00 hs"
                    btn="Categorias"
                    size="slider-big"
                />
                <div className="center">
                    <div id="contenido">
                        <h1 className="subheader">NUESTRAS CATEGORIAS</h1>
                        <ListaCategorias
                            categorias={this.state.categorias}
                        />
                    </div>
                </div>
            </div>
        )
    }
}