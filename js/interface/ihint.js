function iHint(display, text, parent) {

	this.parentLink = parent;
	PIXI.Container.call(this);

	var text = text || Game.events.hint.text;
	var style = {'style' : Assets.text.hintTextStyle };
	this.textContainer = new IText(text, style);
	this.textContainer.anchor.x = 0;
	this.textContainer.anchor.y = 0;

	this.back = new PIXI.Graphics();

	this.addChild(this.back);
	this.addChild(this.textContainer);

	this.catcher = new MouseMoveCatcher(this.parentLink);
	this.addChild(this.catcher);

	this.position.x = -1000;
	this.position.y = -1000;
	this.alpha = 0;


}

function MouseMoveCatcher(parent) {
	// this empty texture only for catching mouse move event;
	this.sceneLink = parent;
	this.emptyTexture = PIXI.Texture.EMPTY;
	PIXI.Sprite.call(this,this.emptyTexture, game.width, game.height);
	this.interactive = true;
	this.mousemove = this.onMouseMove;
}
MouseMoveCatcher.prototype = Object.create(PIXI.Sprite.prototype);
MouseMoveCatcher.prototype.constructor = MouseMoveCatcher;

MouseMoveCatcher.prototype.onMouseMove = function(mouseData) {
	if (Game.events.hint.show) {
      Game.events.hint.x = mouseData.data.global.x;
      Game.events.hint.y = mouseData.data.global.y;
      //console.log(mouseData.data.global.x + " / " + mouseData.data.global.y + );
      var x = Game.events.hint.x;
      var y = Game.events.hint.y;
      var text = Game.events.hint.text;

      //console.log(x, y, text);
      //console.log( this.sceneLink );
      this.sceneLink.hint.setPT(x, y, text);

  }
}


iHint.prototype = Object.create(PIXI.Container.prototype);
iHint.prototype.costructor = iHint;

iHint.prototype.show = function(show, text) {
	
	if (show) {
		Game.events.hint.numhints += 1;
		this.alpha = 1;
		Game.events.hint.show = show;
  	if (!!text) this._setText(text);

  } else {
  	// Think thrice before changing this code... 
  	// false calls can be more frequent and other shit stuff...
  	if (Game.events.hint.numhints > 0) Game.events.hint.numhints -= 1;
  	if (Game.events.hint.numhints === 0) this.hide();
  	
  }

}

iHint.prototype.hide = function() {

	if (!Game.events.hint.numhints) {
		this.alpha = 0;
		Game.events.hint.show = false;
	}

}

iHint.prototype.setPosition = function(x,y) {
	this.position.x = x;
	this.position.y = y;
} 

iHint.prototype._setText = function(text) {

	if (Game.events.hint.text !== text) {
		Game.events.hint.text = text;
		this.textContainer.text = text;

		// Redraw back object
		this.back.clear();
		this.back.beginFill(Assets.text.hint.backColor, Assets.text.hint.backAlpha);
		this.back.drawRect(0,0,this.textContainer.width+30, this.textContainer.height+15);			
		this.back.endFill();

		this.textContainer.position.x = 15;
		this.textContainer.position.y = 10;

	}
	
}


iHint.prototype.setPT = function(x,y, text) {
	// sets position and text of the container
			//position
      var wt = this.worldTransform.a;
      this.position.x = x / wt + 30;
      this.position.y = y / wt + 20;

      //text
      if (!!text) this._setText(text);
      
}

