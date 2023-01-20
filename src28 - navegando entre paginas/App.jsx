import React, { useState, useEffect } from 'react';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';

export default function App() {

    const [pagina, setPagina] = useState(() => 0);

    useEffect(() => {
        const url = window.location.href;
        const res = url.split('?');
        setPagina(p => p = res[1])
    }, []);

    const navegarPaginas = (numPag) => {
        if (numPag === 1) {
            window.open(`http://localhost:3000?${numPag}`, "_self")
        } else if (numPag === 2) {
            window.open(`http://localhost:3000?${numPag}`, "_self")
        }
    }

    const retornarPagina = () => {
        if (pagina === "1") {
            return <Pagina1 />;
        } else if (pagina === "2") {
            return <Pagina2 />;
        } else {
            return  <div>
                        <button onClick={ () => navegarPaginas(1) }>Pagina 1</button>
                        <button onClick={ () => navegarPaginas(2) }>Pagina 2</button>
                    </div>
        }
    }

    return (
        <>
            { retornarPagina() }
        </>
    )
}