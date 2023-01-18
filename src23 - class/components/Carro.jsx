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
	}

	ligaDesliga() {
		// this.setState({ ligado: !this.state.ligado });
		//         OU
		this.setState(state => ({ ligado: !state.ligado }));
	}

	acelerar() {
		this.setState((state, props) => ({ velAtual: state.velAtual + props.fator }));
	}

	render() {
		return (
			<>
				<h2>Meu carro</h2>
				<p>Modelo: { this.modelo }</p>
				<p>Ligado: { this.state.ligado ? "Sim" : "Não" }</p>
				<p>Velocidade atual: { this.state.velAtual }</p>
				<button onClick={ () => this.ligaDesliga() }>
					{ this.state.ligado ? "Desligar carro" : "Ligar carro"}
				</button><br />
				<button onClick={ () => this.acelerar() }>
					Acelerar carro
				</button>
			</>
		)
	}
} 