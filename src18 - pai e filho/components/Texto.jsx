import React from 'react';

export default function Texto(props) {

    return (
        <div>
            <h2>Componente texto 2</h2>
            {props.children[1]} {/* é um array */}
        </div>
    )
}