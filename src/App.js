import { useState, useEffect } from "react";
import { equipos } from "./data/equipos.js";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Organizacion from "./componentes/Organizacion/Organizacion";
import Equipos from "./componentes/Equipos/Equipos";
import Footer from "./componentes/Footer/Footer";

import "./App.css";

function App() {
  //localStorage
  const integrantesFromStorage = JSON.parse(localStorage.getItem('integrantes')) || [];

  // states
  const [verFormulario, setVerFormulario] = useState(false);
  const [integrantes, setIntegrantes] = useState(integrantesFromStorage);

  const mostrarFormulario = () => {
    setVerFormulario(!verFormulario);
  };

  const registrarIntegrante = (integrante) => {
    setIntegrantes([...integrantes, integrante]);
  };

  //localStorage
  useEffect(() => {
    localStorage.setItem('integrantes', JSON.stringify(integrantes));
  }, [integrantes]);

  return (
    <div>
      {/* header */}
      <Header />

      {/* formulario */}
      {verFormulario ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarIntegrante={registrarIntegrante}
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
          tituloEquipo={equipo.titulo}
          colorFondo={equipo.colorFondo}
          colorCard={equipo.colorCard}
          integrantes={integrantes.filter(integrante => integrante.equipo === equipo.titulo)}
        />
      ))}

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
