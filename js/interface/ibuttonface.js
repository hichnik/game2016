function IButtonFace(faceLink) {
	// shows/hides user interface
  // link to parent interface provided as param
  // i know coupling such way is a bad idea
  // but that`s all i have for the moment
  this.faceLink = faceLink;

	this.emptyTexture = PIXI.Texture.EMPTY;
  this.buttonTexture = PIXI.Texture.fromImage(Assets.iface.expand);
  
  PIXI.Sprite.call(this, this.buttonTexture);
  this.width = 230;
  this.height = 78;

  this.position.x = 1407;
  this.position.y = 0;

  this.interactive = true;
  this.buttonMode = true;

  this.click = this.onclick.bind(this);
  this.tap = this.click;

}

IButtonFace.prototype = Object.create(PIXI.Sprite.prototype);
IButtonFace.prototype.constructor = IButtonFace;

IButtonFace.prototype.onclick = function() {
  
  game.playSound(0);

  this.faceLink.slowShow();
  // /*this.faceLink.slowHide() called from slowShow;*/
  this.disable(); // 
  setTimeout(this.enable.bind(this), Game.events.hideTimeout);

}

IButtonFace.prototype.disable = function() {
  //console.log( this );
  this.interactive = false;
  this.buttonMode = false;
}

IButtonFace.prototype.enable = function() {
  //console.log( this );
  this.interactive = true;
  this.buttonMode = true;
}

IButtonFace.prototype.delayEnabled = function() {
  this.disable(); // 
  setTimeout(this.enable.bind(this), Game.events.hideTimeout);

}