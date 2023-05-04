

import {useState} from 'react'
import Jogador from "../../core/jogador";
import './menuJogador.css'
import { classes } from '../../core/ExportDosArquivos';

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
        <form className="div_menu_jogador"onSubmit={handleSubmit}>
          <label htmlFor="nome">Qual é o seu nome?</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
          <div>
          <label htmlFor="">Qual é a sua classe?</label>
          <select id="classe" value={classe} onChange={(event) => 
            setClasse(event.target.value)} required>                
            <option value="">Selecione uma opção</option>
            <option value={classe.nome}>Guerreiro</option>
            <option value="Mago">Mago</option>
            <option value="Arqueiro">Arqueiro</option>
            <option value="Assassino">Assassino</option>
            <option value="Clerigo">Clerigo</option>
          </select>
          </div>

          <button className="botao_menu_jogador"type="submit">Confirmar</button>
        </form>
      );
    }
 
export default MenuJogador;