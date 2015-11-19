function TempBackground() {

  var texture = PIXI.Texture.fromImage(Assets.scene2.tempbackground);
  PIXI.Sprite.call(this,texture,game.width,game.height);
  this.position.x = 0;
  this.position.y = 0; // base height - image height
}

TempBackground.constructor = TempBackground;
TempBackground.prototype = Object.create(PIXI.Sprite.prototype);