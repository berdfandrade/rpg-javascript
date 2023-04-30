

import readline from 'readline'
import chalk from 'chalk'

class Guerreiro {
	constructor(){
		this.nome = "Guerreiro" 
		this.vida = 1000;
		this.forca = 100;
		this.defesa = 80;
		this.agilidade = 5;
				
	}
}

class Mago {
	constructor(){ 
		this.nome = "Mago";
		this.vida = 800;
		this.forca = 50;
		this.defesa = 80;
		this.agilidade = 80;
		this.inteligencia = 150; 
	} 
}

class Arqueiro {
	constructor() {
	  this.nome = "Arqueiro";
	  this.vida = 90;
	  this.forca = 7;
	  this.defesa = 6;
	  this.agilidade = 10;
	}
}

class Clerigo {
	constructor() {
	  this.nome = "Clérigo";
	  this.vida = 90;
	  this.forca = 5;
	  this.defesa = 8;
	  this.agilidade = 7;
	}
}
  
class Assassino {
	constructor() {
	  this.nome = "Assassino";
	  this.vida = 90;
	  this.forca = 5;
	  this.defesa = 8;
	  this.agilidade = 7;
	}
}



const log = console.log() 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define as opções do menu


// Função para exibir o menu e ler a escolha do usuário
function escolherClasse() {
  
	const menuOptions = [
		{ chave: '1', descricao: 'Guerreiro' },
		{ chave: '2', descricao: 'Mago' },
		{ chave: '3', descricao: 'Arqueiro' },
		{ chave: '4', descricao: 'Clerigo' },
		{ chave: '5', descricao: 'Assassino' },
		{ chave: '6', descricao: 'Sair' }
	  ];
	

  console.log('Escolha uma opção:');
  menuOptions.forEach(opcao => {
    log(chalk.blue.bgRed.bold(`${opcao.chave} - ${opcao.descricao}`));
  });

  rl.question('', answer => {
    handleMenuChoice(answer);
  });

  function handleMenuChoice(choice) {
	const selectedOption = menuOptions.find(opcao => opcao.chave === choice);
	if (selectedOption) {
	  if (selectedOption.chave === '6') {
		// Opção "Sair" selecionada
		rl.close();
	  } else {
		console.log(`Você escolheu: ${selectedOption.descricao}`);
		escolherClasse();
	  }
	} else {
	  console.log('Opção inválida. Tente novamente.');
	  escolherClasse();
	}
  }

}





// Inicia a exibição do menu
escolherClasse();




// const grey = new Mago; 

// console.log(grey.defesa)


