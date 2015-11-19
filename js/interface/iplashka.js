function IPlashka(params) {
	/*
			Accept params object 
			TODO: make params if needed
	*/

	this.showTexture = new PIXI.Texture.fromImage(Assets.iface.plashka);
	this.hideTexture = PIXI.Texture.EMPTY;
//	PIXI.Sprite.call(this, this.showTexture, game.width, game.height);
	PIXI.Sprite.call(this, this.showTexture);
	//this.position.x = 288;
	this.position.x = 0;
	this.position.y = 0;
}

IPlashka.prototype = Object.create(PIXI.Sprite.prototype);
IPlashka.prototype.constructor = IPlashka;