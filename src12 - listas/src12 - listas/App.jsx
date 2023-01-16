import React from 'react';

export default function App() {
    
    const carros = ['Ferrari', 'Golf', 'Prisma', 'Lamborghini', 'Bugatti', 'Ford']
    const listaCarros = carros.map((carro, indice)=> <p key={ indice }>Key {indice} - <strong>{carro}</strong></p>)


    return (
        <>
            <h1>Lista</h1>
            { listaCarros }
        </>
    )
}
