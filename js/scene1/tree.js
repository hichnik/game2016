function Tree() {
  

  // ctree: top: 276, left: 356, width: 236, height: 307, file: ctree.png

  this.emptyTexture = PIXI.Texture.EMPTY;
  this.treeTexture = PIXI.Texture.fromImage(Assets.scene1.tree);
  //this.hoverTexture = PIXI.Texture.fromImage(Assets.scene1.treeHover);
  //this.completedTexture = PIXI.Texture.fromImage(Assets.scene1.treeCompleted);

  this.completedTextures = [
    PIXI.Texture.fromImage(Assets.scene1.treeFolk),
    PIXI.Texture.fromImage(Assets.scene1.treeCandy),
    PIXI.Texture.fromImage(Assets.scene1.treeZoloto),
    PIXI.Texture.fromImage(Assets.scene1.treeSoloma),
    PIXI.Texture.fromImage(Assets.scene1.treeKids),
    PIXI.Texture.fromImage(Assets.scene1.treeCookie),
    PIXI.Texture.fromImage(Assets.scene1.treeSkazka),
    PIXI.Texture.fromImage(Assets.scene1.treeGlass)
  ];

  PIXI.Sprite.call(this,this.treeTexture,175,283);
  this.position.x = 390;
  this.position.y = 276;
  this.width = 175;
  this.height = 283;

  // set button mode
  this.buttonMode = true;
  this.interactive = true;

  //this.on('mousedown', this.mouseDown);
  //this.on('mouseup', this.mouseUp)
  // Глюк - двойное срабатывание при таких типах вызовов

  this.click = this.bСlick;
  this.tap = this.click;  

  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut;

  this.inFront = false;
  this.hint = Assets.text.hint.scene1tree;
}

Tree.prototype.constructor = Tree;
Tree.prototype = Object.create(PIXI.Sprite.prototype);

Tree.prototype.mouseDown = function() {
  //console.log("Tree mousedown", this.callee);
}

Tree.prototype.bСlick = function() {
  
  game.playSound(1);

  if (this.inFornt) {
    game.stage.swapChildren(game.scene.emptyLayer1, game.scene.hover2);
    game.stage.swapChildren(game.scene.emptyLayer2, game.scene.tree);
    this.inFront = false;
  }
  
  game.scene.hover2.alpha = 0;
  game.scene.hover2.stop();
  // show hover anyway - we may need to change tree decoration
  
  //game.scene.star1.alpha = 0;
  // moved to scene.completed

  game.scene2.iface.initShow();
  game.scene2.expand.delayEnabled();

  game.scene.hint.show(false);
  game.scene.leaveScene();
  game.scene2.enterScene();

  Game.events.currentStage = 1;
  Game.events.stageDirty = true;
  // change game stage
  //console.log(Game.changeStage(1));
  //console.log(Game.events.currentStage);


}

Tree.prototype.mouseUp = function() {
  //console.log("mouseup");
}

Tree.prototype.mouseOver = function() {

  game.scene.star1.alpha = 0;

  if (!Game.events.treeCompleted) {
    game.scene.hover2.alpha = 1;
    game.scene.hover2.animationSpeed = 0.5;
    game.scene.hover2.play();

    // bring tree layer and hover effect to front
    if (!this.inFront) {
      game.stage.swapChildren(game.scene.hover2, game.scene.emptyLayer1);
      game.stage.swapChildren(game.scene.tree, game.scene.emptyLayer2);
      this.inFront = true;
    }

    game.scene.hint.show(true, this.hint);
  }
  else {
    if (Game.events.treeSelectedTexture > 0) {
      this.texture = this.completedTextures[Game.events.treeSelectedTexture];
    }
  }
}

Tree.prototype.mouseOut = function() {

  if (!Game.events.treeCompleted) {
    game.scene.star1.alpha = 1;

    game.scene.hover2.alpha = 0;
    game.scene.hover2.stop();

    game.scene.hint.show(false);

  } else {
      if (Game.events.treeSelectedTexture > 0) {
        this.texture = this.completedTextures[Game.events.treeSelectedTexture];
      }
  }

  if (this.inFront) {
    game.stage.swapChildren(game.scene.emptyLayer1, game.scene.hover2);
    game.stage.swapChildren(game.scene.emptyLayer2, game.scene.tree);
    this.inFront = false;
  }


}
