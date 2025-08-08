import React, { Component } from "react";
import FormSingUp from "./FormSingUp";

export default class SingUp extends Component {
    render() {
        return (
            <div id="singUp">
                <div className="center">
                    <div id="contenido">
                        <h1 className="subheader">Registrarme</h1>
                        <FormSingUp/>
                    </div>
                </div>
            </div>
        );
    }

}