

/*
 Caso queira aumentar o tamanho do nome gerado, mudar a const "tamanhoDoNome"
 
*/

export function gerarNomeMonstro() {
  const tamanhoDoNome = 4;   
  const vogais = ["a", "e", "i", "o", "u"];
  const consoantes = [
    "bj",
    "ky",
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];


  const numeroSons = Math.floor(Math.random() * tamanhoDoNome) + 2;
  let nome = "";
  let usarVogal = Math.random() < 0.5;

  for (let i = 0; i < numeroSons; i++) {
    if (usarVogal) {
      nome += vogais[Math.floor(Math.random() * vogais.length)];
      usarVogal = false;
    } else {
      nome += consoantes[Math.floor(Math.random() * consoantes.length)];
      usarVogal = true;
    }
  }

  return nome.charAt(0).toUpperCase() + nome.slice(1);
}

