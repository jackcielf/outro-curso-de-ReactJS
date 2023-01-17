import React from 'react';
import Texto from './components/Texto';
import Caixa from './components/Caixa';

export default function App() {

    return (
        <div>
            <h1>Elementos Pai e Filho</h1>
            <Caixa>
                <h3>children 0</h3>
                <p>children 1</p>
                <Texto>
                    <p>children 0</p>
                    <p>children 1</p>
                </Texto>
            </Caixa>
        </div>
    )
}