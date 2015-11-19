function Train(parentLink) {
  
  this.parentLink = parentLink;
  var texture = PIXI.Texture.fromVideo(Assets.scene1.videoTrain);
  //var texture = PIXI.Texture.fromVideo(Assets.scene5.videoCycle);

  PIXI.Sprite.call(this, texture, 800, 450);

  this.position.x = 1102;
  this.position.y = 206;

  this.width = 800;
  this.height = 450;

  this.source = texture.baseTexture.source;
  this.source.autoplay = true;
  this.source.loop = true;
  this.source.paused = false;

  this.source.onended = function() {
  };

  this.source.onplay = function(e) {
      e.preventDefault();
  };

  this.source.onplaying = function() {
  };

}

Train.prototype = Object.create(PIXI.Sprite.prototype);
Train.prototype.constructor = Train;
