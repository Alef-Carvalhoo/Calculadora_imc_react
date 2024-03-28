import './tabela.css'

const Tabela = () => {
    return (
        <div className='container'>
            <table className="tabela">
                <thead>
                    <tr>
                        <th>Peso</th>
                        <th>Resultado</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>IMC menor que 18,5Kg/m2</td>
                            <td>Baixo Peso</td>
                        </tr>
                        <tr>
                            <td>IMC maior que 18,5Kg/m2 Até 24,9Kg/m2</td>
                            <td>Peso adequado</td>
                        </tr>
                        <tr>
                            <td>IMC De 25,0 Até 29,9Kg/m2</td>
                            <td>Sobrepeso</td>
                        </tr>
                        <tr>
                            <td>IMC De 30,0 Até 34,9Kg/m2</td>
                            <td>obesidade grau 1</td>
                        </tr>
                        <tr>
                            <td>IMC De 35,0 Até 39,9Kg/m2</td>
                            <td>obesidade grau 2</td>
                        </tr>
                        <tr>
                            <td>IMC De 40,0Kg/m2</td>
                            <td>obesidade grau 3</td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </div>
    )
}

export default Tabela;