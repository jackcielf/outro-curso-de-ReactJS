import React, { useState } from 'react';
import LedGreen from './img/ledGreen.png';
import LedRed from './img/ledRed.png';

export default function App(props) {
    return (
        <>
            <img src={ props.ligado ? LedGreen : LedRed } />
            <button onClick={ () => props.setLigado(!(props.ligado)) }>
                { props.ligado ? "Desligar" : "Ligar" }
            </button>
        </>
    )
}