function Background(backgroundImage,positionX,positionY,width,height) {

  var texture = PIXI.Texture.fromImage(backgroundImage);
  //PIXI.Sprite.call(this,texture,game.width,game.height);
  PIXI.Sprite.call(this,texture);
  this.position.x = positionX;
  this.position.y = positionY;
  this.width = width;
  this.height = height;
}

Background.constructor = Background;
Background.prototype = Object.create(PIXI.Sprite.prototype);

