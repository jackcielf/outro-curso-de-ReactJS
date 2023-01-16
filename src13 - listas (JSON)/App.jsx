import React from 'react';

export default function App() {
    
    // Lista no formato JSON
    const carros = [
        { categoria: 'Esporte', preco: "1.000.000.00", modelo: "Ferrari" }, 
        { categoria: 'Esporte', preco: "30.000.00", modelo: "Golf" }, 
        { categoria: 'SUV', preco: "60.000.00", modelo: "Prisma" }, 
        { categoria: 'SUV', preco: "500.000.00", modelo: "Lamborghini" }, 
        { categoria: 'Utilitario', preco: "600.000.00", modelo: "Bugatti" }, 
        { categoria: 'Utilitario', preco: "800.000.00", modelo: "Ford" }
    ];

    const listaCarros = carros.map((c, i) => 
        <p key={ i }>
            Key {i} - 
            Categoria: <strong>{c.categoria}</strong>, 
            Preço(R$): <strong>{c.preco}</strong>, 
            Modelo: <strong>{c.modelo}</strong>
        </p>
    );

    return (
        <>
            <h1>Lista no formato JSON</h1>
            { listaCarros }
        </>
    )
}