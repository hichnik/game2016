function HoverEffect(positionX, positionY, alpha, textures) {
  var starTextures = textures || Assets.hover(),
      stars = [],
      i;

  for (i = 0; i < starTextures.length; i++) {
    stars.push(PIXI.Texture.fromImage(starTextures[i]));
  }
  
  PIXI.extras.MovieClip.call(this,stars);

  this.position.x = positionX || 0;
  this.position.y = positionY || 0;
  this.alpha = alpha || 0;
  // do not show effect without params ...
  // but create for future use

}

HoverEffect.prototype.constructor = HoverEffect;
HoverEffect.prototype = Object.create(PIXI.extras.MovieClip.prototype);