function Carousel() {

  this.emptyTexture = PIXI.Texture.EMPTY;
  this.oldTexture = PIXI.Texture.EMPTY;
  /*this.carouselTexture = PIXI.Texture.fromImage(Assets.scene1.carousel);
  this.carouselHoverTexture = PIXI.Texture.fromImage(Assets.scene1.carouselHover);
  this.carouselCompletedTexture = PIXI.Texture.fromImage(Assets.scene1.carouselCompleted);*/

  this.carouselTexture = PIXI.Texture.EMPTY;
  this.carouselHoverTexture = PIXI.Texture.EMPTY;
  this.carouselCompletedTexture = PIXI.Texture.fromImage(Assets.scene1.carouselCompleted);

  //PIXI.Sprite.call(this, this.carouselTexture, game.width, game.height);
  PIXI.Sprite.call(this, this.emptyTexture, game.width, game.height);
  this.position.x = 1420;
  this.position.y = 410;
  //this.alpha = 0.5; only for positioning

  this.width = 194;
  this.height = 203;

  this.buttonMode = true;
  this.interactive = true;

  //this.carouselClicked = false;

  this.click = this.bСlick;
  this.tap = this.click;  
  
  this.mousedown = this.mouseDown;
  this.mouseover = this.mouseOver;
  this.mouseout =  this.mouseOut;

  this.carouselClicked = Game.events.carouselCompleted;

}

Carousel.prototype.constructor = Carousel;
Carousel.prototype = Object.create(PIXI.Sprite.prototype);


Carousel.prototype.mouseDown = function() {
  //console.log("Tree mousedown", this.callee);
}

Carousel.prototype.bСlick = function() {
  //console.log("click");
  this.texture = this.carouselCompletedTexture;
  //this.carouselClicked = true;
  Game.events.carouselCompleted = true;

  //console.log(game.scene.star1);
  game.scene.star4.gotoAndStop(0);
  game.scene.star4.alpha = 0;
  
}

Carousel.prototype.mouseUp = function() {
  //console.log("mouseup");
}

Carousel.prototype.mouseOver = function() {
  //console.log("mouse over");
  
 // game.scene.star4.alpha = 0;
  if (Game.events.trainPaused) {
    Game.events.trainPaused = false;
    game.scene.train.texture.baseTexture.source.play();
    //console.log(game.scene.train.)
  }

  if (Game.events.carouselCompleted) {
    this.texture = this.carouselCompletedTexture;  
  } else {
    //this.texture = this.carouselHoverTexture;  
    game.scene.star4.alpha = 0;
  }
  
}

Carousel.prototype.mouseOut = function() {

  if (Game.events.carouselCompleted) {
    // При пройденной карусели оставляем поезд кататься
    Game.events.trainPaused = false;

  } else {
    // Если карусель не пройдена - останавливаем поезд и даем звезде4 
    // видимость 100%
    if (!Game.events.trainPaused){
      Game.events.trainPaused = true;
    }
    game.scene.star4.alpha = 1;
  }
  
}


