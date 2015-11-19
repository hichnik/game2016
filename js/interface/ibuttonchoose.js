function IButtonChoose(parentLink) {
	
	this.parentLink = parentLink;

	this.emptyTexture = PIXI.Texture.EMPTY;
  this.buttonTexture = PIXI.Texture.fromImage(Assets.iface.submit);
	this.hoverTexture = PIXI.Texture.fromImage(Assets.iface.submitHover); 
	this.baseTexture = PIXI.Texture.EMPTY; // texture to handle hover/out
	this.inactiveTexture = PIXI.Texture.fromImage(Assets.iface.submitInactive); 
	this.pressedTexture = PIXI.Texture.fromImage(Assets.iface.submitPressed); 

  PIXI.Sprite.call(this, this.buttonTexture);
  this.width = 291;
  this.height = 148;

  this.position.x = 1356;
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
 	
 	this.hint = Assets.text.hint.ifaceSubmit;

}

IButtonChoose.prototype = Object.create(PIXI.Sprite.prototype);
IButtonChoose.prototype.constructor = IButtonChoose;

IButtonChoose.prototype.enable = function() {
	
	this.texture = this.buttonTexture;
	this.buttonMode = true;
	this.interactive = true;
}

IButtonChoose.prototype.disable = function() {
	
	this.texture = this.inactiveTexture;
	this.buttonMode = true;
	this.interactive = false;
}

IButtonChoose.prototype.onmousedown = function() {
	this.baseTexture = this.texture;
	this.texture = this.pressedTexture;
	// console.log("mousedown");
}

IButtonChoose.prototype.onmouseup = function() {
	// console.log("mouseup 2");
	this.texture = this.baseTexture;
	
}

IButtonChoose.prototype.onclick = function() {
	
	game.playSound(0);

	this.baseTexture = this.texture;
	this.texture = this.pressedTexture;

	// console.log("click: ");
	// console.log(this);

	this.setTexture.bind(this);
	setTimeout(this.setTexture(this.baseTexture),1000);
	
	
  game.scene.iface.initShow();
  game.scene.expand.delayEnabled();

  this.parentLink.hint.show(false);

	if (this.parentLink.leaveScene) {
  	// add leaveScene events if needed to scene prototypes
  	this.parentLink.leaveScene();
  }
  // complete scene
	this.parentLink.complete();

}

IButtonChoose.prototype.setTexture = function(textureType) {
	//console.log("this from setTexture");
	//console.log(textureType);
	this.texture = textureType;
}

IButtonChoose.prototype.onmouseover = function() {
	this.baseTexture = this.texture;
	this.texture = this.hoverTexture;
	// console.log("mouseover");
	this.parentLink.hint.show(true,this.hint);
}

IButtonChoose.prototype.onmouseout = function() {
	this.texture = this.buttonTexture;
	// console.log("mouseout");
	// console.log( this );
	this.parentLink.hint.show(false);
}

