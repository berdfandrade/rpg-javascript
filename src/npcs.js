
import {jogador as jogador} from './jogador'

const bernardo = new jogador("Bernardo", "Estudante")

console.log(bernardo)

class Quest {
	constructor(nomeDaQuest, mensagemDoNPC, objetivoDaQuest){
		this.nomeDaQuest = nomeDaQuest;
		this.mensagemDoNPC = mensagemDoNPC;
        this.objetivoDaQuest = objetivoDaQuest;
	}

	objetivoDaQuest = []
	mensagemDoNPC = ""

}

class NPC {
	constructor(nome, cidade) {
	  this.nome = nome;
	  this.cidade = cidade;
	}
  
	mensagem(mensagem) {
	  console.log(`${this.nome.toUpperCase()} : ${mensagem}`);
	}

	darUmaQuest(jogador, quest){

		if(jogador.listaDeQuest.length > 6){
			console.log(`${jogador.nome}, já tem quests demais!`)
		}else {	
			jogador.listaDeQuest.push(quest);
		}
		
	} 
}
  
  const medico = new NPC("Médico do SUS", "São Paulo");
  
medico.darUmaQuest()



