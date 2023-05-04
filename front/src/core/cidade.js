

export class cidade {
	constructor(nome, mapa, pratosRegionais) {
	this.nome = nome;
	this.pratosRegionais = pratosRegionais
	this.mapa = mapa;
	}

	pratosRegionais = [];


	mensagemDeBoasVindas(){
	console.log(`Bem-vindo à ${this.nome}!`)
	}

	mostrarPratosRegionais(){
		console.log(`Pratos Regionais: ${this.pratosRegionais}`)
	}
} 


export default cidade;

// const saoPaulo = new cidade('São Paulo', "" ,["Virado a paulista", "Cachorro quente com purê"]);
// const beloHorizonte = new cidade('Belo Horizonte', "",["Feijoada", "Tropeiro Mineiro"]);
// const rioDeJaneiro = new cidade('Rio de Janeiro',"" ,["Filé Oswaldo Aranha", "Filé com fritas"]);


// saoPaulo.mensagemDeBoasVindas().mostrarPratosRegionais()
// saoPaulo.mostrarPratosRegionais();

// beloHorizonte.mensagemDeBoasVindas()
// beloHorizonte.mostrarPratosRegionais();

// rioDeJaneiro.mensagemDeBoasVindas()
// rioDeJaneiro.mostrarPratosRegionais(); 


