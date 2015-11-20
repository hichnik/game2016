function Branding() {

this.Texture = PIXI.Texture.fromImage(Assets.scene1.branding);

PIXI.Sprite.call(this, this.Texture, game.width, game.height);

this.position.x = 895;
this.position.y = 319;


}

Branding.prototype = Object.create(PIXI.Sprite.prototype);
Branding.prototype.constructor = Branding;
