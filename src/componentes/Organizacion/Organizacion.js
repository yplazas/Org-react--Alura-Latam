import "./Organizacion.css";

function Organizacion({ mostrarFormulario }) {

    return (
        <section className="organizacion">
            <h1 className="organizacion__titulo">Mi organización</h1>
            <img
                className="botonAgregar"
                src="/img/BotonAdd.png"
                alt="boton agregar"
                onClick={mostrarFormulario}
            />
        </section>
    );
}

export default Organizacion;
