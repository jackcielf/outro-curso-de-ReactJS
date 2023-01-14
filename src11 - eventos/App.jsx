import React, { useState } from 'react';
import './App.css';
import Led from './Components/Led';

export default function App() {

    const [ligado, setLigado] = useState(false);

    const cancel = (event) => {
        return event.preventDefault();
    }

    return (
        <>
            <Led ligado={ ligado } setLigado={ setLigado } />

            {/* Usando o 'preventDefault' para cancelar a ida para um link */}
            <a 
                href="http://www.google.com"
                target="_blank"
                onClick={ e => cancel(e) }
            >
                Link with preventDefault
            </a>
        </>
    )
}