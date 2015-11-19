function IButtonBack(parentLink) {

	this.parentLink = parentLink;

	this.emptyTexture = PIXI.Texture.EMPTY;
	this.baseTexture = PIXI.Texture.EMPTY;
  this.buttonTexture = PIXI.Texture.fromImage(Assets.iface.back);
	this.hoverTexture = PIXI.Texture.fromImage(Assets.iface.backHover); 
	this.pressedTexture = PIXI.Texture.fromImage(Assets.iface.backPressed); 

  PIXI.Sprite.call(this, this.buttonTexture);
  this.width = 154;
  this.height = 147;

  this.position.x = 308;
  this.position.y = 877;

  this.interactive = true;
  this.buttonMode = true;
 	
 	this.click = this.onclick;
 	this.tap = this.click;
 	this.mouseover = this.onmouseover;
 	this.mouseout = this.onmouseout;
 	this.mousedown = this.onmousedown;
 	
 	this.mouseup = function() {
 		// bug in the framework here
		// console.log("mouseup 1");
 		//this.onmouseup();
 		this.texture = this.baseTexture;
 	}

 	this.hint = Assets.text.hint.ifaceBack;

}

IButtonBack.prototype = Object.create(PIXI.Sprite.prototype);
IButtonBack.prototype.constructor = IButtonBack;

IButtonBack.prototype.onmousedown = function() {
	this.baseTexture = this.texture;
	this.texture = this.pressedTexture;
	// console.log("mousedown");
}

IButtonBack.prototype.onmouseup = function() {
	// console.log("mouseup 2");
	this.texture = this.baseTexture;
	
}

IButtonBack.prototype.onclick = function() {
	
	game.playSound(0);

	this.baseTexture = this.texture;
	// console.log("click: ");
	// console.log(this);

	this.setTexture.bind(this);
	setTimeout(this.setTexture(this.baseTexture),1000);


  game.scene.iface.initShow();
  game.scene.expand.delayEnabled();

  this.parentLink.hint.show(false);

  if (this.parentLink.leaveScene) {
  	// add leaveScene events if needed to scene prototypes
  	this.parentLink.leaveScene(true);
  }

	Game.events.currentStage = 0;
	Game.events.stageDirty = true;
	game.scene.enterScene();

}

IButtonBack.prototype.setTexture = function(textureType) {
	//console.log("this from setTexture");
	//console.log(textureType);
	this.texture = textureType;
}

IButtonBack.prototype.onmouseover = function() {
	this.baseTexture = this.texture;
	this.texture = this.hoverTexture;
	// console.log("mouseover");

	this.parentLink.hint.show(true,this.hint);
}

IButtonBack.prototype.onmouseout = function() {
	this.texture = this.buttonTexture;
	// console.log("mouseout");
	// console.log( this );

	this.parentLink.hint.show(false);

}

