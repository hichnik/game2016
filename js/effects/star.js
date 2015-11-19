function Star(textures) {
 var starTextures = textures || Assets.star(),
  //console.log(Assets.zvezda());
//var starTextures = textures || Assets.zvezdopad(),
      stars = [],
      i;

  

  for (i = 0; i < starTextures.length; i++) {
    stars.push(PIXI.Texture.fromImage(starTextures[i]));
  }
  
  PIXI.extras.MovieClip.call(this,stars);

}

Star.prototype.constructor = Star;
Star.prototype = Object.create(PIXI.extras.MovieClip.prototype);