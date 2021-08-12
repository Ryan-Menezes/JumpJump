class Sprite{
	constructor(x, y, largura, altura){
		this.x = x
		this.y = y
		this.largura = largura
		this.altura = altura
	}

	desenha(xCanvas, yCanvas){
		ctx.drawImage(IMG, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
	}
}

const BACKGROUND = new Sprite(0, 0, 600, 600)
const PERSONAGEM = new Sprite(618, 16, 87, 87)

const PERDEU = new Sprite(603, 478, 397, 358)
const JOGAR = new Sprite(603, 127, 397, 347)
const NOVO = new Sprite(68, 721, 287, 93)
const RECORD = new Sprite(28, 879, 441, 95)
const CHAO = new Sprite(0, 604, 600, 54)

const REDOBS = new Sprite(662, 867, 50, 120)
const PINKOBS = new Sprite(719, 867, 50, 120)
const BLUEOBS = new Sprite(779, 867, 50, 120)
const GREENOBS = new Sprite(839, 867, 50, 120)
const YELLOWOBS = new Sprite(898, 867, 50, 120)
