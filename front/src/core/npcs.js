


import { Jogador } from "./jogador.js";


class Quest {
  constructor(nomeDaQuest, mensagemDoNPC, objetivoDaQuest) {
    this.nomeDaQuest = nomeDaQuest;
    this.mensagemDoNPC = mensagemDoNPC;
    this.objetivoDaQuest = objetivoDaQuest;
  }

}

class NPC {
  constructor(nome, cidade) {
    this.nome = nome;
    this.cidade = cidade;
  }

  mensagem(mensagem) {
    console.log(`${this.nome.toUpperCase()} : ${mensagem}`);
  }

  darUmaQuest(jogador, nomeDaQuest, mensagemDoNPC, objetivoDaQuest) {

    const quest = new Quest(nomeDaQuest, mensagemDoNPC, objetivoDaQuest);

	jogador = jogador

    if (jogador.listaDeQuest.length > 6) {
      console.log(`${Jogador.nome}, já tem quests demais!`);
    } else {
	  console.log(this.quest)
    //   Jogador.listaDeQuest.push(quest);
	  return quest;
    }

  }
}


const bernardo = new Jogador("Bernardo");

const medico = new NPC("Médico do SUS", "Rio de Janeiro");

console.log(medico.darUmaQuest(
  bernardo,
  "Retorno das massas",
  "Eles estão por todos os lados! Precisamos tomar alguma atitude o quanto antes!",
  " Vá até a cidade de São Paulo e derrote os fascistas "
));


console.log(bernardo)

