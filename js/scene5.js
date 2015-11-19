function Scene5(name, currentStage) {
	// Сцена со звуком
	this.name = name;

	this.videoSprite = new VideoSprite(this);
	this.background = new VideoBackground(this);
	this.background.hide();
	this.videoSprite.hide();
	this.videoSprite.pauseVideo();


	currentStage.addChild(this.videoSprite);
	currentStage.addChild(this.background);

	this.positions = [
	// x,y,rotation
		{'x' : 120, 'y' : 120, 'r' : Math.PI/8},
		{'x' : 120, 'y' : 285, 'r' : Math.PI/8},
		{'x' : 120, 'y' : 450, 'r' : 0},
		
		{'x' : 120, 'y' : 618, 'r' : 0}, // 120x615 by Math
		{'x' : 120, 'y' : 790, 'r' : -Math.PI/8},
		{'x' : 120, 'y' : 962, 'r' : -Math.PI/8},
		
		{'x' : 1798, 'y' : 115, 'r' : -Math.PI/8},
		{'x' : 1798, 'y' : 280, 'r' : -Math.PI/8},
		{'x' : 1798, 'y' : 442, 'r' : 0},
		
		{'x' : 1798, 'y' : 610, 'r' : 0},
		{'x' : 1798, 'y' : 782, 'r' : Math.PI/8},
		{'x' : 1798, 'y' : 952, 'r' : Math.PI/8}
	];

	// Иконки выбора с позициями
	this.soundIcons = [];

	this.soundLoader = new SoundLoader();
	currentStage.addChild(this.soundLoader);
	this.soundLoader.hide();
	

	for (var i = 0; i < this.positions.length; i++) {
		this.soundIcons.push(new SoundSelector(i, this.positions[i], this));
		currentStage.addChild(this.soundIcons[i]);
		/*
		game.currentMusic.push( new Howl({
			'src' : [Assets.music.mp3[i], Assets.music.ogg[i]],
			'autoplay' : false,
			'loop' : true,
			'volume' : 1,
			'preload' : true
		}) );
		*/

	}

	/*  game.currentMusic = new Howl({
    autoplay: false,
    loop: true,
    volume: 1
  });*/


/* Интерфейс */
	this.iface = new IGameFace({
			scene: 5,
			titleText : Assets.text.scene5Title,
			descriptionText : Assets.text.scene5Description
	});
	this.expand = new IButtonFace(this.iface);

  this.soundControl = new SoundControl();
  currentStage.addChild(this.soundControl);

	currentStage.addChild(this.expand);
	currentStage.addChild(this.iface);

	//this.iface.hide();
	// hides interface immediately

	this.backButton = new IButtonBack(this);
	currentStage.addChild(this.backButton);

	this.chooseButton = new IButtonChoose(this);
	currentStage.addChild(this.chooseButton);


  this.exitForm = new IFormSmall({'text' : Assets.text.exitMessage});
  currentStage.addChild(this.exitForm);
  this.exitForm.hide();
	//this.iface.initShow();

/* Конец интерфейса */	

  this.hint = new iHint(true,'', this);
  currentStage.addChild(this.hint);


}

Scene5.prototype.complete = function() {
	
  game.scene.soundScene.buttonMode = false;
  game.scene.soundScene.click = null;
  game.scene.soundScene.tap = null; // убираем для планшетов

  game.scene.star2.alpha = 0;

	Game.events.soundSceneCompleted = true;
	game.scene.soundScene.texture = game.scene.soundScene.sceneLightCompletedTexture;
	// Set global volume to 0.5
	Howler.volume(0.5);

	//this.leaveScene();
	// leaveScene call = onClick (ibuttonChoose.js)
	game.scene.enterScene();

	Game.events.currentStage = 0;
	Game.events.stageDirty = true;

}

Scene5.prototype.leaveScene = function() {

	var isBack = arguments[0];
	// True if back button pressed - otherwise undefined

	if (isBack) {
		// Back button pressed = so stop current sound 
		// and crear values to initial state
		if (Game.events.sound.playing) {
			game.currentMusic.stop();
			Game.events.sound.playing = false;
			Game.events.sound.index = -1;
			Game.events.selectedSound = -1;
		}

	}

	//console.log("Leave Scene5");
	//console.log(this);
	this.videoSprite.pauseVideo();

	//console.log(arguments[0]);

}

Scene5.prototype.enterScene = function() {
	//console.log("Enter Scene5");
 
 if (!Game.events.soundSceneCompleted || (Game.events.selectedSound === -1)) {
    this.chooseButton.disable();    
  }

	this.soundControl.setTexture();
	this.background.playIntro();
}