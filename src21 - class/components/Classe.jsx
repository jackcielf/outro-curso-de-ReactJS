import React from 'react';

class Classe extends React.Component {

	constructor(props) {
		super(props); // Chama o contrutor da classe pai, que, no caso, é "React.Component"
	}

	render() {
		return (
			<>
				<h2>Primeiro componente de classe</h2>
				<p>Texto: { this.props.texto }</p>
			</>
		)
	}
}

export default Classe;

// ou "export default class Classe extends ..."