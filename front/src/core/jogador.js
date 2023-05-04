


  


export class Jogador {
  constructor(nome, classe = "Estudante") {
    this.nome = nome;
    this.classe = classe;
  }

  dinheiro = 2000;
  exp = 0;
  level = 5;
  ataqueBase = 300;
  defesaBase = 300;

  atacar() {
    console.log(`${this.nome} atacou!`);
  }
  defender() {
    console.log(`${this.nome} defedeu do ataque`);
  }
  mover() {
    console.log(`${this.nome} se moveu`);
  }
  ganharExp(experienciaGanha) {
    this.exp += experienciaGanha;
    console.log(`${this.nome} ganhou ${this.exp} exp`);
  }

  inventario = ["Bota"];

  pegarItem(...item) {
    this.inventario.push(...item);
  }
  mostrarInventario() {
    return `${this.nome} possui ${this.inventario.length} itens + "\n" + " || " + this.inventario`;
  }
  ganharDinheiro(dinheiroGanho) {
    this.dinheiro += dinheiroGanho;    
    return `\n${this.nome} ganhou ${dinheiroGanho}, TOTAL: ${this.dinheiro}\n`
  }

  listaDeQuest = [];

  PegarUmaQuest(...quest) {
    if (this.listaDeQuest > 6) {
      return "Você tem muitas quests! Resolva elas primeiro";
    } else {
      this.listaDeQuest.push(...quest);
    }
  }

  comprarItem(...item) {
    this.dinheiro -= item["preco"];

    if (item["preco"] > this.dinheiro) {
      return "Você não tem dinheiro para comprar este item";
    } else {
      return `O item custa ${item["preco"]}, você tem apenas ${this.dinheiro}`
    }
  }
}

export default Jogador
