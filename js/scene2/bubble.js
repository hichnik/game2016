function Bubble(type, positionX, positionY) {
  
  this.bubbleType = type || 0;

  this.emptyTexture = PIXI.Texture.EMPTY;
  this.bubbleTexture = PIXI.Texture.fromImage(Assets.scene2.bubble);

/*  this.Textures = [
    PIXI.Texture.fromImage(Assets.scene2.bubbleFolk),
    PIXI.Texture.fromImage(Assets.scene2.bubbleCandy),
    PIXI.Texture.fromImage(Assets.scene2.bubbleZoloto),
    PIXI.Texture.fromImage(Assets.scene2.bubbleSoloma),
    PIXI.Texture.fromImage(Assets.scene2.bubbleKids),
    PIXI.Texture.fromImage(Assets.scene2.bubbleCookie),
    PIXI.Texture.fromImage(Assets.scene2.bubbleSkazka),
    PIXI.Texture.fromImage(Assets.scene2.bubbleGlass)
  ];
*/
  PIXI.Sprite.call(this,this.bubbleTexture,game.width,game.height);
  this.width = 240;
  this.height = 240;
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;
  
  this.alpha = this.baseAlpha = 0.5;

  this.interactive = true;
  this.buttonMode = true;

  //this.click = this.mouseСlick;
  this.click = function() {
    this.mouseClick();
  }

  this.tap = function() {
    this.mouseClick(); 
  }

  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut; 

  this.hint = Assets.text.hint.scene2bubbles[type];

}

Bubble.prototype = Object.create(PIXI.Sprite.prototype);
Bubble.prototype.constructor = Bubble;

Bubble.prototype.mouseOver = function() {
  this.alpha = 1;
  //game.scene2.hint.show(true,this.hint);
  //console.log("mouseover");
}
Bubble.prototype.mouseOut = function() {
  this.alpha = this.baseAlpha;
  //game.scene2.hint.show(false);
  //console.log("mouseout");
}

Bubble.prototype.mouseClick = function() {
  // select another decoration to tree
 // console.log("bubbletype " + this.bubbleType);
  game.playSound(2);

  Game.events.treeSelectedTexture = this.bubbleType;
  //Game.events.treeCompleted = true;
  // moved to scene2.completed

  // Change texture on tree...
  game.scene2.treeDecoration.changeTexture(this.bubbleType);
  game.scene2.chooseButton.enable();
  
}

Bubble.prototype.mouseDown = function() {

}


