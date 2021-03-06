function SoundSelector(type, position, parentLink) {

	this.type = type;
	this.parentLink = parentLink;
	this.Texture = PIXI.Texture.fromImage(Assets.scene5.ring);

	PIXI.Sprite.call(this,this.Texture);

	this.anchor.x = 0.5;
	this.anchor.y = 0.5;

	this.position.x = position.x;
	this.position.y = position.y;
	this.rotation = position.r;

	this.hint = Assets.text.hint.scene5music[type];

	this.interactive = true;
	this.buttonMode = true;

	this.click = this.onClick.bind(this);
	this.tap = this.click;
	
	this.mouseover = this.onMouseOver;
	this.mouseout = this.onMouseOut;

	this.baseAlpha = 0.3;
	this.alpha = this.baseAlpha;
}

SoundSelector.prototype = Object.create(PIXI.Sprite.prototype);
SoundSelector.prototype.constructor = SoundSelector;

SoundSelector.prototype.onClick = function() {
	
	game.scene5.soundLoader.setPosition(this.position.x, this.position.y);
	game.scene5.soundLoader.show();

	if (Game.events.sound.playing && (Game.events.sound.index !== -1)) {
		game.currentMusic.pause();
		game.currentMusic.unload();
	}  

	if ( this.isMusicSupported() ) {
		game.currentMusic = new Howl({
			//'src' : [Assets.music.mp3[i], Assets.music.ogg[i]],
			//'src' : [Assets.music.mp3[this.type]],
			'src' : [this.getCurrentMusic(this.type)],
			'autoplay' : true,
			'loop' : true,
			'volume' : 1,
			'preload' : true,
			'onplay' : function() {
				game.scene5.soundLoader.hide();
			}
		});

		game.currentMusic.play();
	}

		Game.events.sound.playing = true;
		Game.events.sound.index = this.type;
		Game.events.selectedSound = this.type;
		this.parentLink.chooseButton.enable();	

}

SoundSelector.prototype.onMouseOver = function() {

	this.alpha = 0.7;
	//game.scene5.hint.show(true,this.hint);
}

SoundSelector.prototype.onMouseOut = function() {

	this.alpha = this.baseAlpha;
	//game.scene5.hint.show(false);

}

SoundSelector.prototype.isMusicSupported = function() {
	return 	Howler.codecs('mp3') || 
					Howler.codecs('ogg') ||
					Howler.codecs('m4a');
};


SoundSelector.prototype.getCurrentMusic = function(type) {
	if (Howler.codecs('mp3')) return Assets.music.mp3[type];
	if (Howler.codecs('ogg')) return Assets.music.ogg[type];
	if (Howler.codecs('m4a')) return Assets.music.m4a[type];
	return false;
}







