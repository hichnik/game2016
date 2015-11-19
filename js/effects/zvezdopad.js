function Zvezdopad(textures) {
  var starTextures = textures || Assets.zvezdopad(),
  
      stars = [],
      i;

  for (i = 0; i < starTextures.length; i++) {
    stars.push(PIXI.Texture.fromImage(starTextures[i]));
  }
  
  PIXI.extras.MovieClip.call(this,stars);

}

Zvezdopad.prototype.constructor = Zvezdopad;
Zvezdopad.prototype = Object.create(PIXI.extras.MovieClip.prototype);