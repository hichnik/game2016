function SelectedFood(type, index, positionX, positionY) {
  
  this.type = type || 0;
  this.index = index || 0;

  this.Textures = [
    PIXI.Texture.EMPTY, // 0 - food is not selected by default
    PIXI.Texture.fromImage(Assets.scene3.fishFood),
    PIXI.Texture.fromImage(Assets.scene3.folkFood),
    PIXI.Texture.fromImage(Assets.scene3.meatFood),
    PIXI.Texture.fromImage(Assets.scene3.cakesFood),
    PIXI.Texture.fromImage(Assets.scene3.drinkFood),
    PIXI.Texture.fromImage(Assets.scene3.fastfoodFood)
  ];

  PIXI.Sprite.call(this,this.Textures[this.type],game.width,game.height);
  this.baseWidth = 680;
  this.baseHeight = 524;
  this.width = 0; //
  this.height = 0;
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;

  this.buttonMode = true;
  this.interactive = true;

  this.mouseover = this.onMouseOver;
  this.mouseout = this.onMouseOut;

  this.click = function() {

    game.playSound(3);

    this.activateIcon(Game.events.selectedFood[this.index]);
    //console.log(Game.events.selectedFood[this.index]);
    //console.log("Thisindex: " + this.index);


    //game.scene3.foodIcons.setIcon(foodType);
    this.selectType(0); // deselect at this position;
    this.width = 0;
    this.height = 0;
    Game.events.selectedFood[this.index] = 0; // update game events
  
    game.scene3.checkComplete();

  }

  this.tap = this.click;

  this.hint = Assets.text.hint.cancel;
}



SelectedFood.prototype = Object.create(PIXI.Sprite.prototype);
SelectedFood.prototype.constructor = SelectedFood;

SelectedFood.prototype.onMouseOver = function() {
  //console.log("mouseover");
  game.scene3.hint.show(true,this.hint);
}

SelectedFood.prototype.onMouseOut = function() {
  //console.log("mouseoout"); 
  game.scene3.hint.show(false);
}

SelectedFood.prototype.selectType = function(type) {
  this.texture = this.Textures[type];
  this.width = this.baseWidth;
  this.height = this.baseHeight;
  Game.events.selectedFood[this.index] = type;
}

SelectedFood.prototype.activateIcon = function(icon) {
  //console.log(icon);
  // icon -1 cause icon  from 1-6 - not 0-5
  game.scene3.foodIcons[icon-1].setIcon(icon);
  game.scene3.bubbles[icon-1].interactive = true;
}

