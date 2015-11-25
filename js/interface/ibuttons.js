function IButtonSubmit(type, parentContainer) {
	// Submit button on big and small forms 
	this.type = type || 0;
	// 0 hidden
	// 1+ - active
	
	this.emptyTexture = PIXI.Texture.EMPTY;
	this.buttonTexture = PIXI.Texture.fromImage(Assets.iface.formSubmit);
	this.buttonHoverTexture = PIXI.Texture.fromImage(Assets.iface.formSubmitHover);
	this.buttonPressedTexture = PIXI.Texture.fromImage(Assets.iface.formSubmitPressed);

	PIXI.Sprite.call(this, this.buttonTexture, 331,148);
	
	this.buttonMode = true;
	this.interactive = true;

 /*this.click = this.bСlick;
  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut;*/

	this.mouseover = function() {
		this.texture = this.buttonHoverTexture;
	}

	this.mouseout = function() {
		this.texture = this.buttonTexture;
	}

	this.mousedown = function() {
		// console.log("mousedown");
		// console.log(this); it`s not a bug = mousedown is short event
		this.texture = this.buttonPressedTexture;
	}

	this.click = function() {
		//this.hide(); can hide itself ofcourse but we need to hide whole container
		//console.log(parentContainer);
		//console.log("parentContainer - hide small form");
		parentContainer.hide();		
		game.playSound(0);

		game.user.redirectTo();		
		//console.log(parentContainer.name);
	}

	this.tap = function() {
		parentContainer.hide();		
		
		game.user.redirectTo();
		//console.log(parentContainer.name);
	}


	this.hide = function() {
		this.texture = this.emptyTexture;
		this.interactive = false;

		
		/* To show after time
		var button = this;
		setTimeout(function(){
			button.show();
		}, 5000);
		*/

	}

	this.show = function() {
		this.texture = this.buttonTexture;
		this.interactive = true;
	}

};

IButtonSubmit.prototype = Object.create(PIXI.Sprite.prototype);
IButtonSubmit.prototype.constructor = IButtonSubmit;




function IButtonExit() {
	// button in top interface part that exits the game
	this.emptyTexture = PIXI.Texture.EMPTY;
  this.buttonTexture = PIXI.Texture.fromImage(Assets.iface.exit);
  
  PIXI.Sprite.call(this, this.buttonTexture);
  this.width = 85;
  this.height = 36;
  
  this.interactive = true;
  this.buttonMode = true;

  this.click = this.onClick;
  this.tap = this.onClick;

  this.hint = Assets.text.hint.ifaceBack;
}

IButtonExit.prototype = Object.create(PIXI.Sprite.prototype);
IButtonExit.prototype.constructor = IButtonExit;

IButtonExit.prototype.onClick = function() {
	game.playSound(0);
	game.user.exitGame();
}




function IButton (type, positionX, positionY) {

	this.type = type || 0; 
	// 0 - inactive
	// 1 - active

	this.emptyTexture = PIXI.Texture.EMPTY;
  this.greenTexture = PIXI.Texture.fromImage(Assets.iface.readybutton_green);
	this.grayTexture = PIXI.Texture.fromImage(Assets.iface.readybutton_gray); // inactive texture

  PIXI.Sprite.call(this, this.grayTexture, game.width, game.height);
  this.width = 400;
  this.height = 60;
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;
  
  //this.alpha = this.baseAlpha = 0.5;

  this.interactive = false;
  this.buttonMode = true;

  /*this.click = function() {
  	console.log("Button clicked!");
  	this.clicked();	
  }*/
	this.click = this.clicked;
	this.tap = this.click;  

}

IButton.prototype = Object.create(PIXI.Sprite.prototype);
IButton.prototype.constructor = IButton;

IButton.prototype.setActive = function() {
	this.texture = this.greenTexture;
	this.interactive = true;
}

IButton.prototype.setInactive = function() {
	this.texture = this.grayTexture;
	this.interactive = false;
}

IButton.prototype.clicked = function() {
	
	game.playSound(0);
	//console.log("Button clicked");
	Game.events.currentStage = 0;
	Game.events.stageDirty = true;
}