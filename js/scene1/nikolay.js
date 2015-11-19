function Nikolay() {

  this.nikolayClicked = Game.events.nikolayCompleted;

  this.emptyTexture = PIXI.Texture.EMPTY;
  this.nikolayTexture = new PIXI.Texture.fromImage(Assets.scene1.nikolay);
  this.nikolayHoverTexture = new PIXI.Texture.fromImage(Assets.scene1.nikolayHover);
  this.nikolayCompletedTexture = new PIXI.Texture.fromImage(Assets.scene1.nikolayCompleted);

  PIXI.Sprite.call(this, this.nikolayTexture, game.width,game.height);
  this.position.x = 282;
  this.position.y = 428;
  this.width = 172;
  this.height = 208;

  this.buttonMode = true;
  this.interactive = true;

  this.click = this.bСlick;
  this.tap = this.click;  
  
  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut;

  // флаг нахождения на перднем плане
  this.inFront = false;

  this.hint = Assets.text.hint.scene1nikolay;
}

Nikolay.prototype = Object.create(PIXI.Sprite.prototype);
Nikolay.prototype.constructor = Nikolay;

Nikolay.prototype.bСlick = function() {
  
  game.playSound(1);

  // check if Nikolay in front and bring it back 
  if (this.inFront) {
    game.stage.swapChildren(game.scene.emptyLayer1, game.scene.hover1);
    game.stage.swapChildren(game.scene.emptyLayer2, game.scene.nikolay);
    this.inFront = false;
  }

  game.scene4.iface.initShow();
  game.scene4.expand.delayEnabled();

  game.scene.hint.show(false);
  game.scene.leaveScene();
  game.scene4.enterScene();

  Game.events.currentStage = 3;
  Game.events.stageDirty = true;
  

}


Nikolay.prototype.mouseUp = function() {
  //console.log("mouseup");
}

Nikolay.prototype.mouseOver = function() {
  
  game.scene.star5.alpha = 0;

  if (!Game.events.nikolayCompleted) {
  
    this.texture = this.nikolayHoverTexture;

    game.scene.hover1.alpha = 1;
    game.scene.hover1.animationSpeed = 0.5;
    game.scene.hover1.play();

    if (!this.inFront) {
      // bring nikolay layer and hover effect to front
      game.stage.swapChildren(game.scene.hover1, game.scene.emptyLayer1);
      game.stage.swapChildren(game.scene.nikolay, game.scene.emptyLayer2);
      this.inFront = true;
    }

    // show nikolay hint
    game.scene.hint.show(true,this.hint);

  }

}

Nikolay.prototype.mouseOut = function() {

  game.scene.hover1.alpha = 0;
  game.scene.hover1.animationSpeed = 0.5;
  game.scene.hover1.stop();

  if (!Game.events.nikolayCompleted) {
    // сцена не завершена
    game.scene.star5.alpha = 1;
    this.texture = this.nikolayTexture;

    if (this.inFront) {
      // bring nikolay back
      game.stage.swapChildren(game.scene.emptyLayer1, game.scene.hover1);
      game.stage.swapChildren(game.scene.emptyLayer2, game.scene.nikolay);
      this.inFront = false;
    }

    game.scene.hint.show(false);

  }
  else {
    // сцена завершена
    this.texture = this.nikolayCompletedTexture;
  }

}

