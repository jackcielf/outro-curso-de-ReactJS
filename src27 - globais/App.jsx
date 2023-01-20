import React, { useState } from 'react';
import Globais from './components/Globais';
import Info from './components/Info';

export default function App() {


    const [resumo, setResumo] = useState(() => "");

    const salvarResumo = () => {
        Globais.resumo = resumo;
    }

    const verResumo = () => {
        alert(Globais.resumo)
    }

    return (
        <>
            <h1>Variáveis globais</h1>
            <p>Globais (canal): {Globais.canal}</p>
            <p>Globais (curso): {Globais.curso}</p>
            <p>Globais (ano): {Globais.ano}</p>
            <hr />
            <Info />
            <hr />
            <h2>Acessando o valor de variáveis globais</h2>
            <input type="text" value={resumo} onChange={ e => setResumo(e.target.value) } /><br />
            <button onClick={ () => salvarResumo() }>Salvar resumo</button>
            <button onClick={ () => verResumo() }>Ver resumo</button>
        </>
    )
}