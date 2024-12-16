import { useState, useEffect } from "react";
import { datos } from "./data/equipos.js";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Organizacion from "./componentes/Organizacion/Organizacion";
import Equipos from "./componentes/Equipos/Equipos";
import Footer from "./componentes/Footer/Footer";
import "./App.css";

function App() {
  //localStorage
  const integrantesFromStorage = JSON.parse(localStorage.getItem('integrantes')) || [];
  const equiposFromStorage = JSON.parse(localStorage.getItem('equipos')) || datos;

  // states
  const [verFormulario, setVerFormulario] = useState(false);
  const [integrantes, setIntegrantes] = useState(integrantesFromStorage);
  const [equipos, setEquipos] = useState(equiposFromStorage);

  const mostrarFormulario = () => {
    setVerFormulario(!verFormulario);
  };

  const registrarIntegrante = (datosIntegrante) => {
    //verificar que existe integrante
    const integranteExiste = integrantes.some(integrante => integrante.nombre === datosIntegrante.nombre);

    if (integranteExiste) {
      alert("ya existe ese nombre en la lista de integrantes");
      return;
    }
    setIntegrantes([...integrantes, datosIntegrante]);
    alert("integrante registrado");
  };

  const eliminarIntegrante = (id) => {
    setIntegrantes(integrantes.filter((integrante) => integrante.id !== id));
  };

  const actualizarColor = (color, id) => {
    setEquipos(equipos.map((equipo) => equipo.id === id ? { ...equipo, colorFondo: color } : equipo));
  };

  const registrarEquipo = (datosEquipo) => {
    setEquipos([...equipos, datosEquipo]);
    alert("equipo registrado");
  };

  const meGusta = (id) => {
    setIntegrantes(integrantes.map((integrante) => integrante.id === id ? { ...integrante, like: !integrante.like } : integrante));
  }
  
  //localStorage
  useEffect(() => {
    localStorage.setItem('integrantes', JSON.stringify(integrantes));
  }, [integrantes]);

  useEffect(() => {
    localStorage.setItem('equipos', JSON.stringify(equipos));
  }, [equipos]);

  return (
    <div>
      {/* header */}
      <Header />

      {/* formulario */}
      {verFormulario ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarIntegrante={registrarIntegrante}
          registrarEquipo={registrarEquipo}
        />
      ) : (
        <></>
      )}

      {/* organización */}
      <Organizacion mostrarFormulario={mostrarFormulario} />

      {/* equipos */}
      {equipos.map((equipo) => (
        <Equipos
          key={equipo.id}
          datos={equipo}
          integrantes={integrantes.filter(integrante => integrante.equipo === equipo.titulo)}
          eliminarIntegrante={eliminarIntegrante}
          actualizarColor={actualizarColor}
          meGusta={meGusta}
        />
      ))}

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
