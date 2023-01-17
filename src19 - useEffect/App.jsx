import React, { useState, useEffect } from 'react';

export default function App() {

    const [contagem, setContagem] = useState(() => 0);

    useEffect(() => {
        console.log("RECARREGANDO")
        document.title = `Contagem ${contagem}`
    });

    return (
        <>
            <h1>Hook - useEffect</h1>
            <p>Contagem: { contagem }</p>
            <button onClick={ () => setContagem(cont => cont + 1)}>Contar</button>
        </>
    )
}