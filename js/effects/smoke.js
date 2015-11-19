function Smoke(positionX, positionY, animationSpeed) {
  
  //var starTextures = Assets.smoke(),
    var starTextures = Assets.newSmoke(),
     stars = [],
      i;

  for (i = 0; i < starTextures.length; i++) {
    stars.push(PIXI.Texture.fromImage(starTextures[i]));
  }
  
  PIXI.extras.MovieClip.call(this,stars);
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;
  this.animationSpeed = animationSpeed || 1;

}

Smoke.prototype.constructor = Smoke;
Smoke.prototype = Object.create(PIXI.extras.MovieClip.prototype);
