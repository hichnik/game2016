function FriendIcon(type, positionX, positionY) {
  
  this.decorationType = type || 0;

  this.emptyTexture = PIXI.Texture.EMPTY;
  //this.bubbleTexture = PIXI.Texture.fromImage(Assets.scene2.bubble);

/*
zayac (9 ; 0)
petuh (9 ; 150)
olen  (9 ; 303)
lev (9 ; 453)
angell  (9 ; 603)
kuznechik (9 ; 753)
krot  (9 ; 902)
ejik  (1729 ; 0)
angelr  (1729 ; 150)
lisa  (1729 ; 303)
koza  (1729 ; 453)
sova  (1729 ; 603)
kisa  (1729 ; 753)
sobaka  (1729 ; 902)
*/

  this.Textures = [
    PIXI.Texture.EMPTY,
    PIXI.Texture.fromImage(Assets.scene4.druziZayacIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziPetuhIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziOlenIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziLevIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziAngellIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziKuznechikIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziKrotIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziEjikIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziAngelrIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziLisaIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziKozaIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziSovaIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziKisaIcon),
    PIXI.Texture.fromImage(Assets.scene4.druziSobakaIcon)
  ];

  PIXI.Sprite.call(this,this.Textures[this.decorationType],game.width,game.height);
  this.width = 217;
  this.height = 167;
  this.position.x = positionX || 0;
  this.position.y = positionY || 0;

}

FriendIcon.prototype = Object.create(PIXI.Sprite.prototype);
FriendIcon.prototype.constructor = FriendIcon;

FriendIcon.prototype.setIcon = function(type) {
  this.texture = this.Textures[type];
} 