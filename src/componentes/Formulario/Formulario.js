import { useState } from "react";
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoSelect from "../CampoSelect/CampoSelect";
import BotonPrimario from "../Boton/boton";

import "./Formulario.css";

const Formulario = ({ registrarIntegrante, equipos }) => {


    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEvento = (e) => {
        e.preventDefault();
        const datosEnviados = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarIntegrante(datosEnviados);
    };

    return (
        <section className="formulario">
            <form className="form" onSubmit={manejarEvento}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto
                    titulo="Nombre"
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
                <BotonPrimario texto="Crear" />
            </form>
        </section>
    );
};

export default Formulario;
