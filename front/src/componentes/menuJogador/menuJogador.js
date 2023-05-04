

import {useState} from 'react'
import Jogador from "../../core/jogador";



export function MenuJogador () {

    const [nome, setNome] = useState("");
    const [classe, setClasse] = useState("");
    
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const jogador = new Jogador(nome, classe);
        // aqui você pode enviar o objeto jogador para onde for necessário (ex: salvar em um banco de dados)
        console.log(jogador);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Qual é o seu nome?</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
    
          <label htmlFor="classe">Qual é a sua classe?</label>
          <select id="classe" value={classe} onChange={(event) => setClasse(event.target.value)} required>
            <option value="">Selecione uma opção</option>
            <option value="Guerreiro">Guerreiro</option>
            <option value="Mago">Mago</option>
            <option value="Arqueiro">Arqueiro</option>
            <option value="Assassino">Assassino</option>
            <option value="Clerigo">Clerigo</option>
          </select>
    
          <button type="submit">Confirmar</button>
        </form>
      );
    }
 
export default MenuJogador;