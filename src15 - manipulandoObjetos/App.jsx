import React, { useState } from 'react';

export default function App() {

    const [form, setForm] = useState({ "nome": "", "curso": "", "ano": "" });

    const handleChangeForm = e => {
        if (e.target.getAttribute('name') === 'nome') {
            setForm({ "nome": e.target.value, "curso": form.curso, "ano": form.ano })
        } else if (e.target.getAttribute('name') === 'curso') {
            setForm({ "nome": form.nome, "curso": e.target.value, "ano": form.ano })
        } else {
            setForm({ "nome": form.nome, "curso": form.curso, "ano": e.target.value })
        } 
    }

    return (
        <>
            <h1>Manipulando dados - Simplificação de código</h1>
            <label>Nome: </label>
            <input type="text" name="nome" onChange={ e => handleChangeForm(e) } /><br />
            <label>Curso: </label>
            <input type="text" name="curso" onChange={ e => handleChangeForm(e) } /><br />
            <label>Ano: </label>
            <input type="text" name="ano" onChange={ e => handleChangeForm(e) } />
            <p>Nome digitado: { form.nome }</p>
            <p>Curso digitado: { form.curso }</p>
            <p>Ano digitado: { form.ano }</p>
        </>
    )
}