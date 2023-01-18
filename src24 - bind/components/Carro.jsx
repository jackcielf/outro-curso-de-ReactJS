import React from 'react';

export default class Carro extends React.Component {

	constructor(props) {
		super(props);

		// Criando variáveis
		this.modelo = "Ferrari";
		this.state = {
			ligado: false,
			velAtual: 0
		}

		// Bind
		this.ld = this.ligaDesliga.bind(this); // Relacionando a variáveç 'ld' com a função 'ligaDesliga'
	}

	ligaDesliga() {
		// this.setState({ ligado: !this.state.ligado });
		//         OU
		this.setState(state => ({ ligado: !state.ligado }));
	}

	render() {
		return (
			<>
				<h2>Meu carro</h2>
				<p>Modelo: { this.modelo }</p>
				<p>Ligado: { this.state.ligado ? "Sim" : "Não" }</p>
				<button onClick={ this.ld }> {/* <button onClick={ () => ligaDesliga() }> */}
					{ this.state.ligado ? "Desligar carro" : "Ligar carro"}
				</button>
			</>
		)
	}
} 