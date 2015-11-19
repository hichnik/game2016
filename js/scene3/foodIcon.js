function FoodIcon(type, positionX, positionY) {
  
  this.decorationType = type || 0;

  this.emptyTexture = PIXI.Texture.EMPTY;
  //this.bubbleTexture = PIXI.Texture.fromImage(Assets.scene2.bubble);

  this.Textures = [
    PIXI.Texture.EMPTY,
    PIXI.Texture.fromImage(Assets.scene3.fishIcon),
    PIXI.Texture.fromImage(Assets.scene3.folkIcon),
    PIXI.Texture.fromImage(Assets.scene3.meatIcon),
    PIXI.Texture.fromImage(Assets.scene3.cakesIcon),
    PIXI.Texture.fromImage(Assets.scene3.drinkIcon),
    PIXI.Texture.fromImage(Assets.scene3.fastfoodIcon)
  ];
/*
    cakesIcon : "textures/scene3/kitchen_cakes_icon.png",
    drinkIcon : "textures/scene3/kitchen_drink_icon.png",
    fastfoodIcon : "textures/scene3/kitchen_fastfood_icon.png",
    fishIcon : "textures/scene3/kitchen_fish_icon.png",
    folkIcon : "textures/scene3/kitchen_folk_icon.png",
    meatIcon : "textures/scene3/kitchen_meat_icon.png"
*/

  PIXI.Sprite.call(this,this.Textures[this.decorationType],game.width,game.height);
  this.width = 254;
  this.height = 242;
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;


}

FoodIcon.prototype = Object.create(PIXI.Sprite.prototype);
FoodIcon.prototype.constructor = FoodIcon;

FoodIcon.prototype.setIcon = function(type) {
  this.texture = this.Textures[type];
} 