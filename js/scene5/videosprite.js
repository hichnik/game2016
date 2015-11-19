function VideoSprite(parentLink) {

	this.parentLink = parentLink;
	var texture = PIXI.Texture.fromVideo(Assets.scene5.videoCycle);

	PIXI.Sprite.call(this, texture, game.width, game.height);

	this.position.x = 0;
	this.position.y = 0;
	this.width = 1920;
	this.height = 1080;

	this.source = texture.baseTexture.source;
	this.source.autoplay = true;
	this.source.loop = true;
	this.source.paused = false;

	if (Game.events.sound.muted) {
		this.source.muted = true;
		this.source.defaultMuted = true;
	} else {
		this.source.muted = false;
		this.source.defaultMuted = false;
	}

	var selfLink = this;

	this.alpha = 1;

	this.source.onended = function() {
		//console.log("Video onended");
	};

	this.source.onplay = function(e) {
		//console.log("Video onplay");
		if (!Game.events.soundScenePlayed) {
			e.preventDefault();
			
			/*
			console.log("pausing onplay video ...");
			console.log(selfLink);
			console.log(e);
			*/

			selfLink.source.pause();
		}
	};

	this.source.onplaying = function() {
		//console.log("Video onplaying");
	};
}

VideoSprite.prototype = Object.create(PIXI.Sprite.prototype);
VideoSprite.prototype.constructor = VideoSprite;


VideoSprite.prototype.hide = function() {
	this.alpha = 0;
}

VideoSprite.prototype.show = function() {
	this.alpha = 1;
}

VideoSprite.prototype.pauseVideo = function() {
	
	//console.log("Pause video");

	this.source.paused = true;
	this.source.pause();
}

VideoSprite.prototype.playVideo = function() {
	
	//console.log("Play video");

	this.source.paused = false;
	this.source.play();
}

VideoSprite.prototype.pauseOnLoad = function() {

	//console.log("PauseOnLoad video");
	this.onended = null;
	this.pauseVideo();

}


