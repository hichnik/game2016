function Bubble3(type, positionX, positionY) {
  
  this.bubbleType = type || 0;

  this.emptyTexture = PIXI.Texture.EMPTY;
  this.bubbleTexture = PIXI.Texture.fromImage(Assets.scene4.bubble);

  PIXI.Sprite.call(this,this.bubbleTexture,game.width,game.height);
  this.width = 217;
  this.height = 167;
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;
  
  this.alpha = this.baseAlpha = 0.7;

  this.interactive = true;
  this.buttonMode = true;

  //this.click = this.mouseСlick;
  this.click = function() {
    //game.scene4.hint.show(false);    
    this.mouseClick();
    game.playSound(4);
  }

  this.tap = this.click;

  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut; 

  this.hint = Assets.text.hint.scene4friends[type-1];

}

Bubble3.prototype.constructor = Bubble3;
Bubble3.prototype = Object.create(PIXI.Sprite.prototype);

Bubble3.prototype.mouseOver = function() {
  this.alpha = 1;
  //game.scene4.hint.show(true,this.hint);
}
Bubble3.prototype.mouseOut = function() {
  this.alpha = this.baseAlpha;
  //game.scene4.hint.show(false);
}

Bubble3.prototype.mouseClick = function() {
  
  var emptyPlace = game.scene4.getEmptyFriendPlace();
  //console.log(game.scene4.getEmptyFriendPlace());
 // console.log("clicked: " + this.bubbleType);
  //console.log("emptyPlace: " + emptyPlace);

  if (emptyPlace > -1) {
    
    game.scene4.friends[this.bubbleType-1].setIcon(0);
    this.interactive = false;
    // hide icon from bubble
    
    game.scene4.selectedFriend[emptyPlace].selectType(this.bubbleType);

    //game.scene4.friendHints[emptyPlace].texture =game.scene4.friendHints[emptyPlace].hitTexture;
    game.scene4.friendHints[emptyPlace].interactive = true;
    game.scene4.friendHints[emptyPlace].buttonMode = true;
    game.scene4.friendHints[emptyPlace].active = true;

  } else {

    game.scene4.warnForm.show();

  };

  //Activate selected button
  game.scene4.checkComplete();

}

Bubble3.prototype.mouseDown = function() {

}
