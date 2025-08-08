import React, { Component } from "react";

class Slider extends Component {

    render() {
        return (
            <div id="slider" className="slider">
                    <h1>{this.props.titulo}</h1>
                    <h3 style={{color: 'white'}}>- {this.props.subTitulo}</h3>
            </div>
        )
    }
}

export default Slider