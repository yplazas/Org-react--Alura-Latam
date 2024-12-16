import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Integrante.css';

function Integrante({ colorFondo, integrante, eliminarIntegrante, meGusta }) {
    const { id, nombre, puesto, foto, like } = integrante;
    return (
        <div className="integrante">
            <div>
                <div className='integrante__banner' style={{ backgroundColor: colorFondo }}>
                    <AiFillCloseCircle className="integrante__eliminar" onClick={() => eliminarIntegrante(id)} />
                </div>
                <div className='integrante__imagen'>
                    <img src={foto} alt={nombre} />
                </div>
            </div>
            <h3>{nombre}</h3>
            <p>{puesto}</p>
            <div>
                {like ?
                    <AiFillHeart color="red" className="integrante__like" onClick={() => meGusta(id)} />
                    : <AiOutlineHeart className="integrante__like" onClick={() => meGusta(id)}
                />}
            </div>
        </div>
    );
}

export default Integrante;