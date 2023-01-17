import React from 'react';

export default function Nota(props) {

	return (
		<div>
			<legend>Informe a nota: {props.num}</legend>
			<input type="text" name={props.name} value={props.nota} onChange={ e => props.setNota(e) } />
		</div>
	)
}

