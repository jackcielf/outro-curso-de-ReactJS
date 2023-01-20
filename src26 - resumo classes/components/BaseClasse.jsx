import React from 'react';

export default class BaseClasse extends React.Component {
	constructor(props) {
		super(props); /* Chama a super classe, que é a classe que esta sendo extendida (React.Component) */

		// Criando um estado
		this.state = {
			canal: "CFB Cursos",
			curso: "React",
			ativo: true,
			nome: this.props.nome
		}

		this.state = this.props.state;

		// Fazendo bindagem com o metodo Bind
		const ad = this.ativarDesativar.bind(this);
	}

	ativarDesativar() {
		this.setState(state => state = !state.ativo)
	}

	componentDidMount() {
		console.log("O componente foi criado!")
	}

	componentDidUpdate() {
		console.log("O componente foi aualizado!")
	}

	componentWillUnmount() {
		console.log("O componente foi desrenderizado!")
	}

	render() {
		return (
			<>
				<h2>Classe base</h2>
				{/* Chamando a função com Bind, se não o tivesse usava "() => this.ativarDesativar()" */}
				<button onClick={ this.ad }>{ this.state.ativo ? "Desativar" : "Ativar" }</button>
			</>
		)
	}

}