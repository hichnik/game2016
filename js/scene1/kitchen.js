function Kitchen() {
  
  this.emptyTexture = PIXI.Texture.EMPTY;
 
  this.kitchenTexture = new PIXI.Texture.fromImage(Assets.scene1.kitchen)
  this.kitchenHoverTexture = new PIXI.Texture.fromImage(Assets.scene1.kitchenHover);
  this.kitchenCompletedTexture = new PIXI.Texture.fromImage(Assets.scene1.kitchenCompleted);
      
  PIXI.Sprite.call(this, this.kitchenTexture, game.width, game.height);

  this.position.x = 850;
  this.position.y = 554;
  this.width = 352;
  this.height = 167;

  this.buttonMode = true;
  this.interactive = true;

  this.click = this.bСlick;
  this.tap = this.click;

  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut;

  this.kitchenCompleted = Game.events.kitchenCompleted;
  //console.log(this.kitchenCompleted);
 

  this.hint = Assets.text.hint.scene1kitchen;

}

Kitchen.prototype = Object.create(PIXI.Sprite.prototype);
Kitchen.prototype.constructor = Kitchen;

Kitchen.prototype.mouseDown = function() {
  //console.log("Tree mousedown", this.callee);
}

Kitchen.prototype.bСlick = function() {
  
  game.playSound(1);

  game.scene3.iface.initShow();
  game.scene3.expand.delayEnabled();

  game.scene.hint.show(false);
  
  game.scene.leaveScene();
  game.scene3.enterScene();

  Game.events.currentStage = 2;
  Game.events.stageDirty = true;
  
}

Kitchen.prototype.mouseUp = function() {
  //console.log("mouseup");
}

Kitchen.prototype.mouseOver = function() {

  if (!Game.events.kitchenCompleted){
    // кухня не пройдена
    this.texture = this.kitchenHoverTexture;

    game.scene.hover4.alpha = 1;
    game.scene.hover5.alpha = 1;
    game.scene.hover4.animationSpeed = -0.5;
    game.scene.hover5.animationSpeed = 0.5;
    game.scene.hover4.play();
    game.scene.hover5.play();
  
    game.scene.star3.alpha = 0;

    //show/hide hint
    //game.hint(true,Assets.text.hint.scene1kitchen);    
    game.scene.hint.show(true, this.hint);

  } else {

  }

}

Kitchen.prototype.mouseOut = function() {

    game.scene.hover4.alpha = 0;
    game.scene.hover5.alpha = 0;
    game.scene.hover4.stop();
    game.scene.hover5.stop();

  if (!Game.events.kitchenCompleted) {
    // снова показать звезды
    game.scene.star3.alpha = 1;
    this.texture = this.kitchenTexture;

    game.scene.hint.show(false);

  } else {
    // Что происходит когда кухня пройдена?
  }
 
}
