import React, { useState } from 'react';

export default function App() {
    
    // Verificando o que foi digitado no input em tempo real
    const [nome, setNome] = useState(() => "");

    const handleChangeNome = e => {
        setNome(e.target.value)
    }

    const [carro, setCarro] = useState(() => "Ford");

    return (
        <>
            <h1>Manipulando dados</h1>
            <label>Digite seu nome: </label>
            <input 
                type="text" 
                name="nome" 
                onChange={ e => handleChangeNome(e) }
            />
            <p>Nome digitado: { nome }</p>

            <hr />

            <label>Selecione um carro: </label>
            <select value={ carro } onChange={ e => setCarro(e.target.value) }>
                <option value="Ford">Ford</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="BMW">BMW</option>
            </select>
            <p>Carro selecionado: { carro }</p>
        </>
    )
}