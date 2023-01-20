import React from 'react';
import Globais from './Globais';

export default function Info() {
    return (
        <>
            <h2>Componente Info</h2>
            <p>Globais: {Globais.canal}</p>
            <p>Globais: {Globais.curso}</p>
            <p>Globais: {Globais.ano}</p>
        </>
    )
}