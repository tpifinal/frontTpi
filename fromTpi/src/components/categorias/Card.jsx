import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indice: this.props.indice
        }
    }

    render() {
        const { id, nombre, imagen } = this.props;
        return (
            <div className="col-Lista">
                <div className="cardd">
                    <div>
                        <img src={imagen} alt="comida" />
                    </div> 
                    <div className="contenidooo">
                        <h3>{nombre}</h3>
                        <Link to={{
                        pathname: `/shared/${id}/${nombre}`
                    }}>
                        <button>
                            Ver sus productos
                        </button>
                     </Link> 
                    </div>
                </div>
            </div>
        );
    }
}