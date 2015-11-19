function SoundLoader() {

	this.Texture = PIXI.Texture.fromImage(Assets.scene5.loading);
	PIXI.Sprite.call(this,this.Texture,game.width,game.height);

	this.anchor.x = 0.5;
	this.anchor.y = 0.5;

	//this.scale.x = 0.3;
	//this.scale.y = 0.3;
	this.setPosition.bind(this);
	this.show.bind(this);
	this.hide.bind(this);
};

SoundLoader.prototype = Object.create(PIXI.Sprite.prototype);
SoundLoader.prototype.constructor = SoundLoader;

SoundLoader.prototype.setPosition = function(x,y) {
	this.position.x = x;
	this.position.y = y;
};

SoundLoader.prototype.show = function() {
	this.alpha = 1;
};

SoundLoader.prototype.hide = function() {
	this.alpha = 0;
}
