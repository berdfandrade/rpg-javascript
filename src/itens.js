// Todos os items do jogo

const todosOsItems = [
  { id: 1, item: "Adaga de Bronze", preco: 1700 },
  { id: 2, item: "Adaga de Prata", preco: 2900 },
  { id: 3, item: "Amuleto do Fogo", preco: 1209 },
  { id: 4, item: "Anel da Invisibilidade", preco: 3170 },
  { id: 5, item: "Anel de Proteção", preco: 2700 },
  { id: 6, item: "Arco Curto", preco: 2700 },
  { id: 7, item: "Arco Longo", preco: 3500 },
  { id: 8, item: "Arco e Flecha", preco: 2000 },
  { id: 9, item: "Armadura de Couro", preco: 1800 },
  { id: 10, item: "Armadura de Ferro", preco: 2550 },
  { id: 11, item: "Botas da Velocidade", preco: 3120 },
  { id: 12, item: "Botas de Agilidade", preco: 2165 },
  { id: 13, item: "Bracelete de Força", preco: 839 },
  { id: 14, item: "Cajado de Carvalho", preco: 683 },
  { id: 15, item: "Cajado de Cerejeira", preco: 533 },
  { id: 16, item: "Capa da Noite", preco: 887 },
  { id: 17, item: "Cetro da Luz", preco: 566 },
  { id: 18, item: "Colar da Água", preco: 682 },
  { id: 19, item: "Colar de Cura", preco: 425 },
  { id: 20, item: "Elixir de Agilidade", preco: 900 },
  { id: 21, item: "Elixir de Força", preco: 508 },
  { id: 22, item: "Elixir de Poder", preco: 425 },
  { id: 23, item: "Elixir de Sabedoria", preco: 657 },
  { id: 24, item: "Escudo de Ferro", preco: 778 },
  { id: 25, item: "Escudo de Ferro", preco: 316 },
  { id: 26, item: "Escudo de Madeira", preco: 882 },
  { id: 27, item: "Escudo de Madeira", preco: 780 },
  { id: 28, item: "Espada Longa", preco: 438 },
  { id: 29, item: "Espada de Aço", preco: 942 },
  { id: 30, item: "Espada de Ferro", preco: 812 },
  { id: 31, item: "Livro de Magia", preco: 911 },
  { id: 32, item: "Luvas do Vento", preco: 407 },
  { id: 33, item: "Machado de Batalha", preco: 455 },
  { id: 34, item: "Pedra de Invocação", preco: 634 },
  { id: 35, item: "Pergaminho de Fogo", preco: 137 },
  { id: 36, item: "Pergaminho de Gelo", preco: 198 },
  { id: 37, item: "Pergaminho de Raio", preco: 462 },
  { id: 38, item: "Poção de Cura", preco: 306 },
  { id: 39, item: "Poção de Cura", preco: 228 },
  { id: 40, item: "Poção de Mana", preco: 741 },
  { id: 41, item: "Poção de Mana", preco: 285 },
  { id: 42, item: "Poção de Resistência", preco: 223 },
  { id: 43, item: "Poção de Resistência", preco: 860 },
  { id: 44, item: "Poção de Veneno", preco: 729 },
  { id: 45, item: "Varinha de Madeira", preco: 101 },
];

// function transformarEmObjetos(arr) {
//     const objetos = [];
//     for (let i = 0; i < arr.length; i++) {
//       const objeto = {
//         id: i + 1,
//         item: arr[i]
//       };
//       objetos.push(objeto);
//     }
//     return objetos;
// }

function obterItensAleatorios(lista) {
  const itemsAleatorios = [];
  while (itemsAleatorios.length < 4) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const itemAleatorio = lista[indiceAleatorio];
    if (!itemsAleatorios.includes(itemAleatorio)) {
      itemsAleatorios.push(itemAleatorio);
    }
  }
  return itemsAleatorios;
}

console.log(todosOsItems[5]["preco"]);

// function atribuirPrecoAleatorio(listaItens) {
//     for (let i = 0; i < listaItens.length; i++) {
//       listaItens[i].preco = Math.floor(Math.random() * 1000) + 1;
//     }
//     return listaItens;
//   }

// console.log(atribuirPrecoAleatorio(todosOsItems))
