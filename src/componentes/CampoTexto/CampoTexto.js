import "./CampoTexto.css"

const CampoTexto = ({ titulo, placeholder, required, valor, setValor }) => {

    const placeholderModificado = `${placeholder}...`
    return <div className="campo-texto">
        <label>{titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={required}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
        />
    </div>
}

export default CampoTexto