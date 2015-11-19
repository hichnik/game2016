function MainTreeLight() {

this.emptyTexture = PIXI.Texture.EMPTY;
this.treeLightTexture = PIXI.Texture.fromImage(Assets.scene2.treeLight);

PIXI.Sprite.call(this,this.treeLightTexture,game.width,game.height);
this.position.x = (1920-1200)/2
this.position.y = 0;
this.width = 1200;
this.height = 1080;
this.alpha = 0.2;

}

MainTreeLight.prototype.constructor = MainTreeLight;
MainTreeLight.prototype = Object.create(PIXI.Sprite.prototype);