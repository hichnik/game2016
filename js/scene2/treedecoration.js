function TreeDecoration() {
  
  this.decorationType = Game.events.treeSelectedTexture;
  this.emptyTexture = PIXI.Texture.EMPTY;


  this.Textures = [
    PIXI.Texture.fromImage(Assets.scene2.treeFolk),
    PIXI.Texture.fromImage(Assets.scene2.treeCandy),
    PIXI.Texture.fromImage(Assets.scene2.treeZoloto),
    PIXI.Texture.fromImage(Assets.scene2.treeSoloma),
    PIXI.Texture.fromImage(Assets.scene2.treeKids),
    PIXI.Texture.fromImage(Assets.scene2.treeCookie),
    PIXI.Texture.fromImage(Assets.scene2.treeSkazka),
    PIXI.Texture.fromImage(Assets.scene2.treeGlass)
  ];

  if (this.decorationType < 0) {
    // -1 - елочка не наряжена вообще - пустая текстура
    this.decorationTexture = this.emptyTexture;
  } else {
    this.decorationTexture = this.Textures[this.decorationType];
  }

  //console.log(this.decorationType + " / " + this.decorationTexture);

  PIXI.Sprite.call(this,this.decorationTexture, game.width, game.height);
  this.position.x = 530; // (1920-860)/2;
  this.position.y = 0;
  this.width = 860;
  this.height = 1080;

//  this.alpha = 1;
  
  this.interactive = true;
  //this.buttonMode = true;



  //this.click = this.mouseСlick;
  // ??? Why - bug?
  this.click = function() {
  //  this.mouseClick();
  };

  this.tap = function() {

  }
    
  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut; 
  
}

TreeDecoration.prototype.constructor = TreeDecoration;
TreeDecoration.prototype = Object.create(PIXI.Sprite.prototype);

TreeDecoration.prototype.mouseOver = function() {
  // подсветка елочки
  //console.log("over");
  
  // Убрана в последний момент - раскомментировать для возвращения
  //game.scene2.treeLight.alpha = 1;
}
TreeDecoration.prototype.mouseOut = function() {
  // вернуть подсветку
  //console.log("out");
  
  //game.scene2.treeLight.alpha = 0.2;
}

TreeDecoration.prototype.mouseClick = function() {
  // переход на предыдущий уровень
  //console.log("Goto stage 0");
  Game.events.currentStage = 0;
  Game.events.stageDirty = true;
}

TreeDecoration.prototype.mouseDown = function() {
  //console.log("mousedown");
}

TreeDecoration.prototype.changeTexture = function(textureCode) {
  // can be -1
  if (textureCode < 0) {
    this.texture = this.emptyTexture;
  } else {
    this.texture = this.Textures[textureCode];
  }
  
}

