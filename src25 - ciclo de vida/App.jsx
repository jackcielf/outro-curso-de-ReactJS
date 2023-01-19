import React, { useState } from 'react';
import Ciclo from './components/Ciclo'

export default function App() {

    const [mostrarOcultar, setMostrarOcultar] = useState(() => true);

    const fctMostrarOcultar = () => {
        setMostrarOcultar(!mostrarOcultar);
    }

    return (
        <>
            <h1>Ciclo de vida</h1>
            { mostrarOcultar ? <Ciclo /> : "" }
            <button onClick={ () => fctMostrarOcultar() }>
                { mostrarOcultar ? "Ocultar componente" : "Mostrar componente" }
            </button>
        </>
    )
}