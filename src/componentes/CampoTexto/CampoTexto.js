import "./CampoTexto.css"

const CampoTexto = ({ titulo, placeholder, required, valor, setValor, type }) => {

    const placeholderModificado = `${placeholder}...`
    return <div className="campo-texto">
        <label>{titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={required}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            type={type}
        />
    </div>
}

export default CampoTexto