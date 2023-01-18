import React from 'react';
import Carro from './components/Carro'

export default function App() {

    // Como funciona o Bind
    function carro() {
        let velMax = 200;
        console.log(this.cor);
        console.log(this.modelo);
    }

    let detalhes = {
        cor: "Preto",
        marca: "VW",
        modelo: "Golf"
    }

    let carroLigarDetalhes = carro.bind(detalhes);
    carroLigarDetalhes();

    return (
        <>
            <h1>Bind</h1>
            <Carro />
        </>
    )
}