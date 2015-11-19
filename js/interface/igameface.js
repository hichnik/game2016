function IGameFace(params) {
	// Extends container 
	// used for top interafce display

	var params = params || {};
  
  PIXI.Container.call(this);
  
  var width = 1357;
  var height = 174;

  this.width = width;
  this.height = height;
  this.position.x = 288;

	var back = new IPlashka();
	this.addChild(back);

	var logo = new PIXI.Sprite.fromImage(Assets.iface.folkLogo);
	//logo.anchor.x = 0.5; // center
	//logo.anchor.y = 0.5; // center
	logo.position.x = 40;
	logo.position.y = 25;
	this.addChild(logo);
	
	var logoText = new IText(Assets.text.gameName,{'style' : Assets.text.logoTextStyle});
	
	logoText.position.x = 150;
	logoText.position.y = 40;
	this.addChild(logoText);

	if (!params.titleText) params.titleText = 'NO TEXT';
	var titleText = new IText(params.titleText,{'style' : Assets.text.titleTextStyle});
	titleText.anchor.x = 0.5;
	titleText.position.x = width/2;
	titleText.position.y = 20;
	this.addChild(titleText);

	if (!params.descriptionText) params.descriptionText = 'NO TEXT';
	var descriptionText = new IText(params.descriptionText, {'style' : Assets.text.descriptionTextStyle });
	descriptionText.anchor.x = 0.5;
	descriptionText.position.x = width/2;
	descriptionText.position.y = 75;
	this.addChild(descriptionText);
	
	var userPhoto = new PIXI.Sprite.fromImage(Assets.user.photo);
	userPhoto.anchor.x = 1; 
	//logo.anchor.y = 0.5; // center
	userPhoto.position.x = 1300;
	userPhoto.position.y = 25;
	this.addChild(userPhoto);

	//console.log(game.user); - can also be captured from here
	var userText = new IText(Assets.user.fullName, {'style': Assets.text.userTextStyle});
	userText.anchor.x = 1;
	userText.anchor.y = 1;
	userText.position.x = 1300-50-20; // photo + margin
	userText.position.y = 25+50;
	this.addChild(userText);

	var exitButton = new IButtonExit();
	exitButton.anchor.x = 1;
	exitButton.position.x = 1300;
	exitButton.position.y = 95;
	this.addChild(exitButton);

	//var expandButton = new IButtonFace();
	//this.addChild(expandButton);

}

IGameFace.prototype = Object.create(PIXI.Container.prototype);
IGameFace.prototype.constructor = IGameFace;

IGameFace.prototype.hide = function() {
	//console.log( this );
	this.position.y = -175;
}

IGameFace.prototype.show = function() {
	//console.log("event captured");
	this.position.y = 0;
}

IGameFace.prototype.slowHide = function() {
	//console.log("slowHide");
	//console.log(this);
	if (!Game.events._ifaceDirty) {
		Game.events._ifaceDirty = true;
		Game.events._ifaceDirection = 'hide';
		Game.events._ifaceObject = this;
	}

}

IGameFace.prototype.slowShow = function() {
	if (!Game.events._ifaceDirty) {
		Game.events._ifaceDirty = true;
		Game.events._ifaceDirection = 'show';
		Game.events._ifaceObject = this;
		// game.js dependency in update.js
		//console.log(this);
		setTimeout(this.slowHide.bind(this), Game.events.hideTimeout);

		/*setTimeout(function(){
			console.log("slowhide call");
			console.log(this); // becomes window - look at mdn 4 explanation
		}, 2000);*/
	}
}

IGameFace.prototype.initShow = function() {
	
	this.show();
	//console.log(this);

	setTimeout(this.slowHide.bind(this), Game.events.hideTimeout);
}

IGameFace.prototype.endIFaceAnimation = function() {
//	  console.log("endanimation");
  Game.events._ifaceDirty = false;
  Game.events._ifaceDirection = null;
  Game.events._ifaceObject = null;

}