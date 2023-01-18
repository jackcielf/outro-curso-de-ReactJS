import React, { useState } from 'react';

export default function App() {
    /*
        localStorage.setItem("nome", "Jack");
        localStorage.getItem("nome");
        localStorage.removeItem("nome");
    */

    const [nome, setNome] = useState(() => "");

    // Armazena uma nova variável no localStorage
    const armazenar = (chave, valor) => localStorage.setItem(chave, valor);

    // Faz a consulta de uma variável do localStorage
    const consultar = chave => alert(localStorage.getItem(chave));

    // Deleta uma variável do localStorage
    const apagar = chave => localStorage.removeItem(chave);

    return (
        <>
            <h1>Local Storage</h1>
            <h3>setItem - getItem - removeItem</h3>
            <hr />
            <input type="text" value={nome} onChange={ e => setNome(e.target.value)} /><br />
            <button onClick={ () => armazenar("nome", nome) }>Gravar item</button><br />
            <button onClick={ () => consultar("nome") }>Ver item</button><br />
            <button onClick={ () => apagar("nome") }>Apagar item</button>
        </>
    )
}