function SelectedFriend(type, index, positionX, positionY) {
  
  this.type = type || 0;
  this.index = index || 0;

  this.Textures = [
    PIXI.Texture.EMPTY, // 0 - friend is not selected by default
    PIXI.Texture.fromImage(Assets.scene4.druziZayac),
    PIXI.Texture.fromImage(Assets.scene4.druziPetuh),
    PIXI.Texture.fromImage(Assets.scene4.druziOlen),
    PIXI.Texture.fromImage(Assets.scene4.druziLev),
    PIXI.Texture.fromImage(Assets.scene4.druziAngell),
    PIXI.Texture.fromImage(Assets.scene4.druziKuznechik),
    PIXI.Texture.fromImage(Assets.scene4.druziKrot),
    PIXI.Texture.fromImage(Assets.scene4.druziEjik),
    PIXI.Texture.fromImage(Assets.scene4.druziAngelr),
    PIXI.Texture.fromImage(Assets.scene4.druziLisa),
    PIXI.Texture.fromImage(Assets.scene4.druziKoza),
    PIXI.Texture.fromImage(Assets.scene4.druziSova),
    PIXI.Texture.fromImage(Assets.scene4.druziKisa),
    PIXI.Texture.fromImage(Assets.scene4.druziSobaka)

  ];

  PIXI.Sprite.call(this,this.Textures[this.type],game.width,game.height);
  this.baseWidth = 493;
  this.baseHeight = 684;
  //this.width = 0; //
  //this.height = 0;
  
  this.anchor.x = 0.5; // center on x

  this.position.x = positionX || 0;
  this.position.y = positionY || 0;

  this.buttonMode = false;
  this.interactive = false;

/*
  this.click = function() {
    this.activateIcon(Game.events.selectedFriends[this.index]);
    //console.log(Game.events.selectedFood[this.index]);
    
    //console.log("Thisindex: " + this.index);

    //game.scene3.foodIcons.setIcon(foodType);
    this.selectType(0); // deselect at this position;
    this.width = 0;
    this.height = 0;
    Game.events.selectedFriends[this.index] = 0; // update game events

    game.scene4.checkComplete();

  }
  */
}

SelectedFriend.prototype = Object.create(PIXI.Sprite.prototype);
SelectedFriend.prototype.constructor = SelectedFriend;

SelectedFriend.prototype.selectType = function(type) {
  this.texture = this.Textures[type];
  this.width = this.baseWidth;
  this.height = this.baseHeight;
  Game.events.selectedFriends[this.index] = type;
}

SelectedFriend.prototype.activateIcon = function(icon) {
  //console.log(icon);
  // icon -1 cause icon  from 1-6 - not 0-5
  game.scene4.friends[icon-1].setIcon(icon);
  game.scene4.bubbles[icon-1].interactive = true;
}

