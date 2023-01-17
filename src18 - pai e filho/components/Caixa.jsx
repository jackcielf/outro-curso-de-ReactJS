import React from 'react';

export default function Caixa(props) {

    return (
        <div>
            <h2>Componente caixa (pai)</h2>
            { props.children } {/* é um array */}
        </div>
    )
}