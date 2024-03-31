import './formulario.css'
import { useState } from 'react';

const Formulario = () => {
    const [ peso, setPeso ] = useState('');
    const [ altura, setAltura ] = useState('');
    const [ result, setResult ] = useState(null);
    const [ classificacao, setClassificacao] = useState('');
    


    const renderizaResultado = () => {
        const imc = peso / (altura **2);
        const formattedImc = imc.toFixed(2);
        setResult(formattedImc);
        setClassificacao(getClassificacao(formattedImc))
        
    };

    const getClassificacao = (imc) => {
        if (imc < 18.5) return 'Abaixo Do peso';
        if (imc < 24.9) return 'Peso normal';
        if (imc < 29.9) return 'Sobrepeso';
        if (imc < 34.9) return 'Obesidade grau 1';
        if (imc < 39.9) return 'Obesidade grau 2';
        return 'Obesidade grau 3';
    }

    return (
        <div className="container">
            <form>
                <label>Peso</label>
                <input type="number" placeholder="Seu peso em (Kg)" onChange={evento => setPeso(evento.target.value)}/>

                <label>Altura</label>
                <input type="number" placeholder="Altura com vírgula" onChange={evento => setAltura(evento.target.value)}/>
                <button onClick={renderizaResultado}>Calcular</button>

                <h1>{result}</h1>
                <h1>{classificacao}</h1>
            </form>
        </div>
    )
}

export default Formulario;