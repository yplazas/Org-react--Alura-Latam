import "./boton.css";

function BotonPrimario({texto}) {
    return (
        <button className="boton-primario">
            {texto}
        </button>
    )
}

export default BotonPrimario