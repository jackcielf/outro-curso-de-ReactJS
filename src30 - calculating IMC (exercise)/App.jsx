import React, { useState } from 'react';
import './App.css';

// Criando uma função que retorna a tabela
const tableIMC = () => {
    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>Classification</th><th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Abaixo Normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau III ou Mórbida</td>
                    <td>Maior de 40</td>
                </tr>
            </tbody>
        </table>
    )
}

// Criando o componente que pegará o peso
const verifyWeight = (weight, setWeight) => {
    return (
        <div className="box_input">
            <label>Weight (Kg): </label>
            <input type="text" value={ weight } onChange={ e => setWeight(e.target.value) } />
        </div>
    )
}

// Criando o componente que pegará a altura
const verifyHeight = (height, setHeight) => {
    return (
        <div className="box_input">
            <label>Height (m): </label>
            <input type="text" value={ height } onChange={ e => setHeight(e.target.value) } />
        </div>
    )
}

// Função que retorna o botão e a função, que fará o calculo, que será exeutada ao clica-lo 
const math = (weight, height, setResult) => {
    // Função que será executada ao clicar no botão
    const calc = () => {
        setResult(weight / (height ** 2))
    }

    return (
        <div className="box_input">
            <button onClick={ () => calc() }>Verify</button>
        </div>
    )
}

// Mostrando o resultado do calculo
const showResult = (result) => {
    return <p>Result: {result.toFixed(1)}</p>
}

export default function App() {

    const [weight, setWeight] = useState(() => 0);
    const [height, setHeight] = useState(() => 0);
    const [result, setResult] = useState(() => 0);

    return (
        <>
            <h1>Calculating IMC</h1>
            { tableIMC() }
            { verifyWeight(weight, setWeight) }
            { verifyHeight(height, setHeight) }
            { showResult(result) }
            { math(weight, height, setResult) }
        </>
    )
}