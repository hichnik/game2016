function SoundScene() {

  this.sceneLightCompleted = Game.events.soundSceneCompleted;

  this.emptyTexture = PIXI.Texture.EMPTY;
  this.sceneLightTexture = new PIXI.Texture.fromImage(Assets.scene1.sceneLight);
  this.sceneLightHoverTexture = new PIXI.Texture.fromImage(Assets.scene1.sceneLightHover);
  this.sceneLightCompletedTexture = new PIXI.Texture.fromImage(Assets.scene1.sceneLightCompleted);

  //PIXI.Sprite.call(this, this.ssTexture, game.width,game.height);
  PIXI.Sprite.call(this, this.sceneLightTexture, game.width,game.height);
  this.position.x = 528;
  this.position.y = 310;
  this.width = 202;
  this.height = 213;

  this.buttonMode = true;
  this.interactive = true;

  this.click = this.bСlick;
  this.tap = this.click;  
  
  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut;

  this.inFront = false;

  this.hint = Assets.text.hint.scene1music;

}

SoundScene.prototype = Object.create(PIXI.Sprite.prototype);
SoundScene.prototype.constructor = SoundScene;

SoundScene.prototype.bСlick = function() {

  game.playSound(1);

  game.scene5.iface.initShow();
  game.scene5.expand.delayEnabled();

  game.scene.hint.show(false);


  game.scene.leaveScene();
  Game.events.currentStage = 4;
  Game.events.stageDirty = true;
  game.scene5.enterScene();
  
  if (this.inFront) {
    game.stage.swapChildren(game.scene.emptyLayer1, game.scene.hover3);
    game.stage.swapChildren(game.scene.emptyLayer2, game.scene.soundScene);
    this.inFront = false;
  }
}


SoundScene.prototype.mouseUp = function() {
  //console.log("mouseup");
}

SoundScene.prototype.mouseOver = function() {

  if (!Game.events.soundSceneCompleted) {
    this.texture = this.sceneLightHoverTexture;
    
    game.scene.hover3.alpha = 1;
    game.scene.hover3.animationSpeed = 0.5;
    game.scene.hover3.play();
  
    game.scene.star2.alpha = 0;

    if (!this.inFront) {
      game.stage.swapChildren(game.scene.hover3, game.scene.emptyLayer1);
      game.stage.swapChildren(game.scene.soundScene, game.scene.emptyLayer2);
      this.inFront = true;
    }

    game.scene.hint.show(true,this.hint);
  }

}

SoundScene.prototype.mouseOut = function() {

    game.scene.hover3.alpha = 0;
    game.scene.hover3.animationSpeed = 0.5;
    game.scene.hover3.stop();

  if (!Game.events.soundSceneCompleted) {
    // сцена не завершена
  
    game.scene.star2.alpha = 1;
    this.texture = this.sceneLightTexture;

    if (this.inFront) {
      game.stage.swapChildren(game.scene.emptyLayer1, game.scene.hover3);
      game.stage.swapChildren(game.scene.emptyLayer2, game.scene.soundScene);
      this.inFront = false;
    }

    game.scene.hint.show(false);

  }
  else {
    // сцена завершена
    this.texture = this.sceneLightCompletedTexture;
  }

}


