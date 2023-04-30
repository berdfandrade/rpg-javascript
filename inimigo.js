



// Função para gerar nome aleatório
import { gerarNomeMonstro } from "./nomeMonstro.js";

class inimigo {
  constructor(monstro, nome, vida, level, ataque, defesa, temperamento, genero) {
    this.monstro = monstro;
    this.nome = nome;
    this.level = level;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
    this.temperamento = temperamento;
    this.genero = genero;
  }
}

function gerarTipo() {
  const monstros = ["Orc", "Goblin", "Troll", "Zumbi", "Gargula", "Dragão"];
  return monstros[Math.floor(Math.random() * monstros.length)];
}

const monstros = [
  {
    Monstro: "Orc",
    id: "oc",
  },
  {
    Monstro: "Goblin",
    id: "gb",
  },
  {
    Monstro: "Troll",
    id: "tr",
  },
  {
    Monstro: "Zumbi",
    id: "zb",
  },
  {
    Monstro: "Gargula",
    id: "gg",
  },
  {
    Monstro: "Dragão",
    id: "dr",
  },
  {
    Monstro: "Necromate",
    id: "nc",
  },
];

const id = function encontrarId(monstro) {
  const encontrado = monstros.find((m) => m.Monstro === monstro);
  return encontrado ? encontrado.id : "Monstro não encontrado";
};

function gerarVidaDoInimgo(nivel) {
  if (nivel < 1 || nivel > 99) {
    console.error("O nível deve estar entre 1 e 99");
  }

  // Calcula os pontos de vida baseado no nível
  const pontosDeVidaBase = 50 + (nivel - 1) * 10;

  // Aplica um fator de aleatoriedade
  const fatorAleatorio = Math.random() * 0.2 + 0.9; // entre 0.9 e 1.1
  const pontosDeVida = Math.round(pontosDeVidaBase * fatorAleatorio);

  return pontosDeVida;
}

function gerarLevelInimigo(inimigo) {
  let levelMinimo, levelMaximo;

  const identificador = id(inimigo);

  switch (identificador) {
    case "oc":
      levelMinimo = 30;
      levelMaximo = 60;
      break;
    case "gb":
      levelMinimo = 3;
      levelMaximo = 10;
      break;
    case "tr":
      levelMinimo = 20;
      levelMaximo = 30;
      break;
    case "zb":
      levelMinimo = 25;
      levelMaximo = 30;
      break;
    case "gg":
      levelMinimo = 5;
      levelMaximo = 20;
      break;
    case "dr":
      levelMinimo = 80;
      levelMaximo = 100;
      break;
    case "nc":
      levelMinimo = 20;
      levelMaximo = 40;
      break;
    default:
      levelMinimo = 1;
      levelMaximo = 20;
  }

  return (
    Math.floor(Math.random() * (levelMaximo - levelMinimo + 1)) + levelMinimo
  );
}

function gerarPontosDeAtaque(level) {
  if (level < 1 || level > 99) {
    console.log("Level inválido. Deve estar entre 1 e 99.");
  }
   return Math.floor(level ** 2 / 5 + 1);
}


function gerarPontosDeDefesa(level) {
  if (level < 1 || level > 99) {
    console.log("Level inválido. Deve estar entre 1 e 99.");
  }
  return Math.floor(level ** 2 / 8 + 1);
}

function gerarTemperamento() {
  const tipo = [
    "Pacifico",
    "Calmo",
    "Forte",
    "Brutal",
    "Agressivo",
    "Selvagem",
    "Feroz",
    "Malvado",
    "Sanguinário",
    "Sinistro",
    "Devastador",
    "Terrível",
  ];

  const indexAleatorio = Math.floor(Math.random() * tipo.length);
  return tipo[indexAleatorio];
}

function gerarGenero() {
  const generos = ["Masculino", "Feminino"];
  return generos[Math.floor(Math.random() * generos.length)];
}

export function gerarMonstro() {
	
  const monstro = gerarTipo();
  const nome = gerarNomeMonstro();
  const vida = gerarVidaDoInimgo(gerarLevelInimigo(monstro));
  const ataque = gerarPontosDeAtaque(gerarLevelInimigo(monstro));
  const defesa = gerarPontosDeDefesa(gerarLevelInimigo(monstro));
  const genero = gerarGenero();
  const temperamento = gerarTemperamento();

  const inimigoGerado = new inimigo(
    monstro,
    nome,
    vida,
    gerarLevelInimigo(monstro),
    ataque,
    defesa,
    temperamento,
    genero
  );
  return inimigoGerado;
}


console.log(gerarMonstro())