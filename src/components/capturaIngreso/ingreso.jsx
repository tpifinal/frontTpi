import React from "react";
import { useParams } from "react-router-dom";
import Producto from "../productos/productos";

function Ingreso() {
    let { id, nombre } = useParams();

    return (
        <Producto
        id={id}
        nombre={nombre}
        />
    );
}

export default Ingreso;