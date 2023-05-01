



export default class jogador {
  constructor(nome, classe) {
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

  inventario = [];

  pegarItem(...item) {
    this.inventario.push(...item);
  }
  mostrarInventario() {
    console.log(`${this.nome} possui ${this.inventario.length} itens`);
    console.table(this.inventario);
  }
  ganharDinheiro(dinheiroGanho) {
    this.dinheiro += dinheiroGanho;
    console.log(
      `\n${this.nome} ganhou ${dinheiroGanho}, TOTAL: ${dinheiroDoJogador}\n`
    );
  }

  comprarItem(...item) {
    dinheiroGasto = item["preco"];
    this.dinheiro -= item["preco"];

    if (item["preco"] > this.dinheiro) {
      console.log("Você não tem dinheiro para comprar este item");
    } else {
      console.log(`O item custa ${item["preco"]}, você tem apenas ${this.dinheiro}`);
    }
  }
}



