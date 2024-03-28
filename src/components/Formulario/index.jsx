import './formulario.css'
import { useState } from 'react';

const Formulario = () => {
    const [ peso, setPeso ] = useState(0);
    const [ altura, setAltura ] = useState(0);
    const [ result, setResult ] = useState(0);
    


    const renderizaResultado = () => {
        const imc = peso / (altura * altura);
        const formattedImc = imc.toFixed(2);
        setResult(+formattedImc);
    };

    return (
        <div className="container">
            <form>
                <label>Peso</label>
                <input type="number" placeholder="Seu peso em (Kg)" onChange={evento => setPeso(parseFloat(evento.target.value))}/>

                <label>Altura</label>
                <input type="number" placeholder="Altura com vírgula" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
                <button onClick={renderizaResultado}>Calcular</button>

                <h1>{result}</h1>
            </form>
        </div>
    )
}

export default Formulario;