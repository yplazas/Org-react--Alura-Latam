import './Equipos.css'
import Integrante from '../Integrante/Integrante';

function Equipos({ colorFondo, colorCard, tituloEquipo, integrantes }) {

    return <>
        {
            integrantes.length > 0 ? (
                <div className="equipos" style={{ backgroundColor: colorFondo }}>
                    <div className='container_equipos'>
                        <h2 className='titulo_equipo' style={{ borderBottomColor: colorCard }}>{tituloEquipo}</h2>
                        <div className='integrantes'>
                            {integrantes.map((integrante, index) =>
                                <Integrante key={index} colorCard={colorCard} integrante={integrante} />
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