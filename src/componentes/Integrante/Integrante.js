import './Integrante.css';

function Integrante({ colorCard, integrante }) {
    const { nombre, puesto, foto } = integrante;
    return (
        <div className="integrante">
            <div>
                <div className='integrante__banner' style={{ backgroundColor: colorCard }}></div>
                <div className='integrante__imagen'>
                    <img src={foto} alt={nombre} />
                </div>
            </div>
            <h3>{nombre}</h3>
            <p>{puesto}</p>
        </div>
    );
}

export default Integrante;