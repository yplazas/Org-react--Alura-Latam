import "./CampoSelect.css"

const CampoSelect = ({ titulo, opciones, required, valor, setValor }) => {

    return (
        <div className="campo-select">
            <label>{titulo}</label>
            <select required={required} value={valor} onChange={(e) => setValor(e.target.value)}>
                <option value="" disabled defaultValue="" hidden>Seleccione equipo</option>
                {opciones.map((opcion, index) => <option key={index} value={opcion}>{opcion}</option>)}
                {/* {props.opciones.map(opcion => <option key={opcion.id}>{opcion.descripcion}</option>)} */}
            </select>
        </div>
    )
}

export default CampoSelect;