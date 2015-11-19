function Decoration(type, positionX, positionY) {
  
  var decorationType = type || 0;

  this.emptyTexture = PIXI.Texture.EMPTY;
  this.bubbleTexture = PIXI.Texture.fromImage(Assets.scene2.bubble);

  this.Textures = [
    PIXI.Texture.fromImage(Assets.scene2.bubbleFolk),
    PIXI.Texture.fromImage(Assets.scene2.bubbleCandy),
    PIXI.Texture.fromImage(Assets.scene2.bubbleZoloto),
    PIXI.Texture.fromImage(Assets.scene2.bubbleSoloma),
    PIXI.Texture.fromImage(Assets.scene2.bubbleKids),
    PIXI.Texture.fromImage(Assets.scene2.bubbleCookie),
    PIXI.Texture.fromImage(Assets.scene2.bubbleSkazka),
    PIXI.Texture.fromImage(Assets.scene2.bubbleGlass)
  ];

  PIXI.Sprite.call(this,this.Textures[decorationType],game.width,game.height);
  this.width = 240;
  this.height = 240;
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;


}

Decoration.prototype.constructor = Decoration;
Decoration.prototype = Object.create(PIXI.Sprite.prototype);