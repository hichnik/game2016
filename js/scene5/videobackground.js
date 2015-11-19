function VideoBackground(parentLink) {

	this.parentLink = parentLink;
	var texture = PIXI.Texture.fromVideo(Assets.scene5.videoStart);

	PIXI.Sprite.call(this, texture, game.width, game.height);

	this.position.x = 0;
	this.position.y = 0;
	this.width = 1920;
	this.height = 1080;

	this.source = texture.baseTexture.source;
	this.source.autoplay = false;
	this.source.loop = false;
	this.source.paused = true;

	this.source.muted = true;
	this.source.defaultMuted = true;
	this.source.pause();

	//console.log(texture.baseTexture);

	this.selfLink = this;

	this.alpha = 0;

	/*this.source.onended = function() {
		console.log(ended);
	}*/

}

VideoBackground.prototype = Object.create(PIXI.Sprite.prototype);
VideoBackground.prototype.constructor = VideoBackground;


VideoBackground.prototype.playIntro = function() {
	// show element
	this.alpha = 1;

	
	// check if the sound is muted in game
	if (Game.events.sound.muted) {
		this.source.muted = true;
	} else {
		this.source.muted = false;
	}
	// play the video;

	Game.events.soundScenePlayed = true;
	// Set flag to play repeatable video;


	this.source.onended = this.hideAndShow.bind(this);
	this.source.play();

}

VideoBackground.prototype.hide = function() {
	//console.log("hide");
	//console.log(this); - binded VideoBackground
	this.alpha = 0;

}

VideoBackground.prototype.hideAndShow = function() {
	//console.log("hide");
	//console.log(this); - binded VideoBackground
	this.alpha = 0;

	// show videosprite layer
	this.parentLink.videoSprite.show();
	this.parentLink.videoSprite.playVideo();
}

VideoBackground.prototype.pauseVideo = function() {
	this.source.paused = true;
	this.source.pause();
}

VideoBackground.prototype.playVideo = function() {
	this.source.paused = false;
	this.source.play();
}



