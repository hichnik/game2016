function SoundControl() {
/*
    
    var canvas = document.createElement ('canvas');
    canvas.width = ...; canvas.height = ...;
    canvas.getContext ('2d').drawImage (svgImage, 0, 0, canvas.width, canvas.height);

    var sprite = new PIXI.Sprite (new PIXI.Texture (new PIXI.BaseTexture (canvas)));
    */

	//this.soundOnTexture = PIXI.Texture.fromImage(Assets.iface.volumeOn);
	//this.soundOffTexture = PIXI.Texture.fromImage(Assets.iface.volumeOff);

	this.emptyTexture = PIXI.Texture.EMPTY;
	this.soundOnTexture = PIXI.Texture.fromImage(Assets.iface.soundOn);
	this.soundOffTexture = PIXI.Texture.fromImage(Assets.iface.soundOff);


	PIXI.Sprite.call(this,this.soundOnTexture, 48, 48);

	this.interactive = true;
	this.buttonMode = true;

	this.position.x = 1640;
	this.position.y = 0;

	this.click = this.onClick;
	this.tap = this.click;  
	
	this.mouseover = this.onMouseOver;
	this.mouseout = this.onMouseOut;

	this.baseAlpha = 0.7;
	this.overAlpha = 1;
	this.alpha = this.baseAlpha;

	this.setTexture.bind(this);
}

SoundControl.prototype = Object.create(PIXI.Sprite.prototype);
SoundControl.prototype.constructor = SoundControl;

SoundControl.prototype.onClick = function() {
	
	game.playSound(0);

	Game.events.sound.muted = !Game.events.sound.muted;
	Howler.mute(Game.events.sound.muted);
	this.setTexture();


}

SoundControl.prototype.onMouseOver = function() {
	this.alpha = this.overAlpha;
}

SoundControl.prototype.onMouseOut = function() {
	this.alpha = this.baseAlpha;
}

SoundControl.prototype.setTexture = function() {

	this.texture = Game.events.sound.muted ? this.soundOffTexture : this.soundOnTexture;

}

