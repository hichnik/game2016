function Zvezda(textures) {
  var starTextures = textures || Assets.zvezda(),
  
  //var starTextures = textures || Assets.star(),
  //console.log(Assets.zvezda());
      stars = [],
      i;

  for (i = 0; i < starTextures.length; i++) {
    stars.push(PIXI.Texture.fromImage(starTextures[i]));
  }
  
  PIXI.extras.MovieClip.call(this,stars);

}

Zvezda.prototype.constructor = Zvezda;
Zvezda.prototype = Object.create(PIXI.extras.MovieClip.prototype);