import "./CampoColor.css"

const CampoColor = ({ titulo, required, valor, setValor }) => {


    return <div className="campo-color">
        <label>{titulo}</label>
        <input
            required={required}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            type="color"
        />
    </div>
}

export default CampoColor;