function friendHint(type, index, positionX, positionY) {

	this.type = type;
	this.index = index;

	//this.hitTexture = PIXI.Texture.fromImage('textures/scene4/gray.png'); 
	this.emptyTexture = PIXI.Texture.EMPTY;
	//PIXI.Sprite.call(this, this.hitTexture); 
	PIXI.Sprite.call(this, this.emptyTexture); 

	this.interactive = false;
	this.buttonMode = false;
	this.active = false; // i do not want to remove actual handler - so only set flag

	this.width = 240;
	this.height = 380;

	this.anchor.x = 0.5;
	this.anchor.y = 0.5;

	this.position.x = positionX;
	this.position.y = positionY;

	this.click = this.clickHandler;
	this.tap = this.click;
	
	this.mouseover = this.onMouseOver;
	this.mouseout = this.onMouseOut;

	this.hint = Assets.text.hint.cancel;

}

friendHint.prototype = Object.create(PIXI.Sprite.prototype);
friendHint.prototype.constructor = friendHint;

friendHint.prototype.onMouseOver = function() {
	//game.scene4.hint.show(true,this.hint);
}

friendHint.prototype.onMouseOut = function() {
	//game.scene4.hint.show(false);
}

friendHint.prototype.clickHandler = function() {
	
	if (this.active){	
		//console.log( this.type + '' + this.index);
    game.scene4.selectedFriend[this.index].activateIcon(Game.events.selectedFriends[this.index]);
    game.scene4.selectedFriend[this.index].selectType(0); // move texture from this position;
    
		this.interactive = false;
		this.buttonMode = false;
		this.active = false;

		//game.scene4.hint.show(false);

		Game.events.selectedFriends[this.index] = 0;
		game.scene4.checkComplete();		
	}

}




