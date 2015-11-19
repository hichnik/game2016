// Empty element for moving element to front of the screen
function Empty() {

  PIXI.Sprite.call(this, new PIXI.Texture.EMPTY, game.width, game.height);

} 

Empty.prototype = Object.create(PIXI.Sprite.prototype);
Empty.prototype.constructor = Empty;