import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoSelect from "../CampoSelect/CampoSelect";
import CampoColor from "../CampoColor/CampoColor";
import BotonPrimario from "../Boton/boton";

import "./Formulario.css";

const Formulario = ({ registrarIntegrante, registrarEquipo, equipos }) => {


    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [colorFondo, setColorFondo] = useState("");

    const enviarDatosIntegrante = (e) => {
        e.preventDefault();
        const datosIntegrante = {
            id: uuidv4(),
            nombre,
            puesto,
            foto,
            equipo,
            like: false
        }
        registrarIntegrante(datosIntegrante);
    };

    const enviarDatosEquipo = (e) => {
        e.preventDefault();
        const datosEquipo = {
            id: uuidv4(),
            titulo,
            colorFondo
        }
        registrarEquipo(datosEquipo);
    };

    return (
        <section className="formulario">
            <form className="form" onSubmit={enviarDatosIntegrante}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto
                    titulo="Nombre completo"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    setValor={setNombre}
                />
                <CampoTexto
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    setValor={setPuesto}
                />
                <CampoTexto
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    setValor={setFoto}
                />
                <CampoSelect
                    titulo="Equipo"
                    opciones={equipos}
                    required
                    valor={equipo}
                    setValor={setEquipo}
                />
                <BotonPrimario texto="Registrar integrante" />
            </form>
            <form className="form" onSubmit={enviarDatosEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <CampoTexto
                    titulo="Nombre del equipo"
                    placeholder="Ingresar nombre del equipo"
                    required
                    valor={titulo}
                    setValor={setTitulo}
                />
                <CampoColor
                    titulo="Color del equipo"
                    required
                    valor={colorFondo}
                    setValor={setColorFondo}
                    type="color"
                />
                <BotonPrimario texto="Registrar equipo" />
            </form>
        </section>
    );
};

export default Formulario;
