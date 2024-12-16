import './Equipos.css'
import hexToRgba from 'hex-to-rgba';
import Integrante from '../Integrante/Integrante';

function Equipos({ datos, integrantes, eliminarIntegrante, actualizarColor, meGusta }) {
    const { id, titulo, colorFondo } = datos;
    return <>
        {
            integrantes.length > 0 ? (
                <div className="equipos" style={{ backgroundColor: hexToRgba(colorFondo, 0.5) }}>
                    <div className='container_equipos'>
                        <input type="color" value={colorFondo} className='input__color' onChange={(e) => actualizarColor(e.target.value, id)} />
                        <h2 className='titulo_equipo' style={{ borderBottomColor: colorFondo }}>{titulo}</h2>
                        <div className='integrantes'>
                            {integrantes.map((integrante, index) =>
                                <Integrante key={index} colorFondo={colorFondo} integrante={integrante} eliminarIntegrante={eliminarIntegrante} meGusta={meGusta} />
                            )}
                        </div>
                    </div>
                </div>

            ) : (
                <></>
            )
        }
    </>
}

export default Equipos;