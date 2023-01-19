import React from 'react';

export default class Ciclo extends React.Component {

	constructor(props) {
		super(props);

		// Criando variáveis
		this.state = {
			num: 0
		}	
	}

	maisUm() {
		this.setState(state => ({ num: state.num + 1 }));
	}

	componentDidMount() {
		console.log("Função componentDidMount chamada automaticamante")
	}

	// É executado sempre que é necessario renderizar ou re-rederizar algum elemento
	componentDidUpdate() {
		console.log("Renderizando...")
	}
	
	// É executado sendo que um elemento para de ser renderizado
	componentWillUnmount() {
		console.log("Desrenderizando...")
	}

	render() {
		return (
			<>
				<h2>Componente com classe</h2>
				<p>Número: {this.state.num}</p>
				<button onClick={ () => this.maisUm()}>Somar</button><br />
			</>
		)
	}
} 