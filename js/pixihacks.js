PIXI.extras.MovieClip.prototype.updateTransform = function()
{
  PIXI.Sprite.prototype.updateTransform.call(this);

  if(!this.playing)return;

  this.currentFrame += this.animationSpeed;

  var round = (this.currentFrame + 0.5) | 0;

  if(round < 0) {
    if(this.loop) this.gotoAndPlay(this.textures.length - 1);
    else {
      this.gotoAndStop(0);
      if(this.onComplete) this.onComplete();
    }
  }
  else if(this.loop || round < this.textures.length)
  {
    //this.setTexture(this.textures[round % this.textures.length]);
    this.texture = this.textures[round % this.textures.length];
  }
  else if(round >= this.textures.length)
  {
    this.gotoAndStop(this.textures.length - 1);
    if(this.onComplete)
    {
      this.onComplete();
    }
  }
}