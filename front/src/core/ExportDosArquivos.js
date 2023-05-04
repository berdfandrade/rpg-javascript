


import Jogador from "./jogador.js";
import gerarMonstro from "./inimigo.js";
import cidade from "./cidade.js";
import { Assassino, Mago, Clerigo, Arqueiro, Guerreiro} from "./classes.js";
import mostrarTodosOsItens from "./itens.js";

const classes = {
    Assassino,
    Mago,
    Clerigo,
    Arqueiro,
    Guerreiro
}

// const jogador = new Jogador("Bernardo", Mago)
// console.log(jogador)
// console.log(mostrarTodosOsItens())
// const saoPaulo = new cidade("São Paulo", "sp_map.png") 
// console.log(saoPaulo); 

// export { Jogador } from './jogador.js'
// export { gerarMonstro } from './inimigo.js'
// export { cidade } from  './cidade.js'
// export { mostrarTodosOsItens } from './itens.js'
// export { classes } from './classes.js'

export { Jogador, gerarMonstro, cidade, mostrarTodosOsItens, classes }