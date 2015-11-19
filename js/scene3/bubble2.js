function Bubble2(type, positionX, positionY) {
  
  this.bubbleType = type || 0;

  this.emptyTexture = PIXI.Texture.EMPTY;
  this.bubbleTexture = PIXI.Texture.fromImage(Assets.scene3.bubble);

  PIXI.Sprite.call(this,this.bubbleTexture,game.width,game.height);
  this.width = 254;
  this.height = 242;
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;
  
  this.alpha = this.baseAlpha = 0.7;

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

  this.hint = Assets.text.hint.scene3meals[type-1];
}

Bubble2.prototype.constructor = Bubble2;
Bubble2.prototype = Object.create(PIXI.Sprite.prototype);

Bubble2.prototype.mouseOver = function() {
  this.alpha = 1;
  //game.scene3.hint.show(true,this.hint);
}
Bubble2.prototype.mouseOut = function() {
  this.alpha = this.baseAlpha;
  //game.scene3.hint.show(false);
}

Bubble2.prototype.mouseClick = function() {
  
  var emptyPlace = game.scene3.getEmptyFoodPlace();

  game.playSound(3);

  //console.log("clicked: " + this.bubbleType);
  //console.log("emptyPlace: " + emptyPlace);

  if (emptyPlace > -1) {
     
    game.scene3.foodIcons[this.bubbleType-1].setIcon(0);
    
    game.scene3.hint.show(false); // lower hint count
    this.interactive = false;
    // hide icon from bubble

    //console.log(Game.events.selectedFood);
    game.scene3.selectedFood[emptyPlace].selectType(this.bubbleType);
  
  } else {

    game.scene3.warnForm.show();
    
  };

  game.scene3.checkComplete();
  

}

Bubble2.prototype.mouseDown = function() {

}


