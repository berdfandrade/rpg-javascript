


class Guerreiro {
	constructor(){
		this.nome = "Guerreiro" 
		this.vida = 1000;
		this.forca = 100;
		this.defesa = 80;
		this.agilidade = 5;
				
	}
}

class Mago {
	constructor(){ 
		this.nome = "Mago";
		this.vida = 800;
		this.forca = 50;
		this.defesa = 80;
		this.agilidade = 80;
		this.inteligencia = 150; 
	} 
}

class Arqueiro {
	constructor() {
	  this.nome = "Arqueiro";
	  this.vida = 90;
	  this.forca = 7;
	  this.defesa = 6;
	  this.agilidade = 10;
	}
}

class Clerigo {
	constructor() {
	  this.nome = "Clérigo";
	  this.vida = 90;
	  this.forca = 5;
	  this.defesa = 8;
	  this.agilidade = 7;
	}
}
  
class Assassino {
	constructor() {
	  this.nome = "Assassino";
	  this.vida = 90;
	  this.forca = 5;
	  this.defesa = 8;
	  this.agilidade = 7;
	}
}


export { Assassino, Mago, Clerigo, Arqueiro, Guerreiro}