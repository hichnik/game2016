function Scene4(name, currentStage) {
// сцена с Николаем
	this.name = name;

	// подложка джипег
	this.back = new Background(Assets.scene4.background,0,0,1920,1080);
	currentStage.addChild(this.back);

	// дым
	this.smoke =[
	 new Smoke(380,-50,0.5),
	 new Smoke(1075,0,0.4),
	 new Smoke(1150,-100,0.5),
	 new Smoke(1420,-150,0.3),
	];

	this.smoke[0].gotoAndPlay(0);
	this.smoke[0].scale.x = 0.7
	this.smoke[0].scale.y = 0.7;

	this.smoke[1].gotoAndPlay(5);
	this.smoke[1].scale.x = 0.6;
	this.smoke[1].scale.y = 0.6;
	this.smoke[1].alpha = 0.6;

	this.smoke[2].gotoAndPlay(30);
	this.smoke[2].scale.x = 0.6;
	this.smoke[2].scale.y = 0.6;
	this.smoke[2].alpha = 0.8;

	this.smoke[3].gotoAndPlay(15);
	this.smoke[3].scale.x = 0.6;
	this.smoke[3].scale.y = 0.6;

	currentStage.addChild(this.smoke[0]);
	currentStage.addChild(this.smoke[1]);
	currentStage.addChild(this.smoke[2]);
	currentStage.addChild(this.smoke[3]);
	
	// Николай
	this.nikolayBack = new Background(Assets.scene4.background_nikolay,0,0,1920,1080);
	currentStage.addChild(this.nikolayBack)

	

	// Снег на сцене с Николаем
  
  var sprites = new PIXI.ParticleContainer(10000, {
    scale: true,
    position: true,
    uvs: true,
    alpha: true
  });

  game.s4particles = [];
  //console.log(game.s2particles);
  //console.log(game);
  var totalSprites = game.renderer instanceof PIXI.WebGLRenderer ? 5000 : 100;
  var p, i;
  for (i = 0; i < totalSprites; i++) {
    var spriteImage = Assets.snow.baseTexture;
    p = new PIXI.Sprite.fromImage(spriteImage);

    p.scale.set(0.1 + Math.random() * 0.5);

    p.x = Math.random() * game.width;
    p.y = (Math.random() * game.height*2) - game.height; // + 100 for canvas test

    p.alpha = 0.3 + Math.random() * 0.4;
    p.velocity = 0.1 + Math.random();
    p.vx = Math.random()/2 - 0.25;
    
    game.s4particles.push(p);
    sprites.addChild(p);

  }
  currentStage.addChild(sprites);

 	this.selectedFriend = [
  	new SelectedFriend(0,0,310,404), // selectedType,positionIndex(0-5), positionx, positiony 
  	new SelectedFriend(0,1,564,404),
  	new SelectedFriend(0,2,818,404),
  	new SelectedFriend(0,3,1072,404),
  	new SelectedFriend(0,4,1326,404),
  	new SelectedFriend(0,5,1580,404)
  ];

 	this.friendHints = [
		new friendHint(0,0,310,774),
		new friendHint(0,1,564,774),
		new friendHint(0,2,818,774),
		new friendHint(0,3,1072,774),
		new friendHint(0,4,1326,774),
		new friendHint(0,5,1580,774)
	];


  for(var i = 0; i < this.selectedFriend.length; i++) {
    currentStage.addChild(this.selectedFriend[i]);
  }

  for(var i = 0; i < this.friendHints.length; i++) {
    currentStage.addChild(this.friendHints[i]);
  }


  // bubbles
  this.bubbles = [
		new Bubble3(1,9,0),					// zayac	(9 ; 0)
		new Bubble3(2,9,150),				//	petuh	(9 ; 150)
		new Bubble3(3,9,303),				//	olen	(9 ; 303)
		new Bubble3(4,9,453),				//	lev	(9 ; 453)
		new Bubble3(5,9,603),				//	angell	(9 ; 603)
		new Bubble3(6,9,753),				//	kuznechik	(9 ; 753)
		new Bubble3(7,9,902),				//	krot	(9 ; 902)
		new Bubble3(8,1729,0),			//	ejik	(1729 ; 0)
		new Bubble3(9,1729,150),		//	angelr	(1729 ; 150)
		new Bubble3(10,1729,303),		//	lisa	(1729 ; 303)
		new Bubble3(11,1729,453),		//	koza	(1729 ; 453)
		new Bubble3(12,1729,603),		//	sova	(1729 ; 603)
		new Bubble3(13,1729,753),		//	kisa	(1729 ; 753)
		new Bubble3(14,1729,902)		//	sobaka	(1729 ; 902)
	];

	this.friends = [
		new FriendIcon(1,9,0),
		new FriendIcon(2,9,150),
		new FriendIcon(3,9,303),
		new FriendIcon(4,9,453),
		new FriendIcon(5,9,603),
		new FriendIcon(6,9,753),
		new FriendIcon(7,9,902),
		new FriendIcon(8,1729,0),
		new FriendIcon(9,1729,150),
		new FriendIcon(10,1729,303),
		new FriendIcon(11,1729,453),
		new FriendIcon(12,1729,603),
		new FriendIcon(13,1729,753),
		new FriendIcon(14,1729,902)
	];

  for(var i = 0; i < this.bubbles.length; i++) {
    currentStage.addChild(this.bubbles[i]);
  }

  for(var i = 0; i < this.friends.length; i++) {
    currentStage.addChild(this.friends[i]);
  }
	
 	/*// friends placements on scene
 	this.selectedFriend = [
  	new SelectedFriend(0,0,107,404), // selectedType,positionIndex(0-2), positionx, positiony 
  	new SelectedFriend(0,1,342,404),
  	new SelectedFriend(0,2,554,404),
  	new SelectedFriend(0,3,784,404),
  	new SelectedFriend(0,4,1016,404),
  	new SelectedFriend(0,5,1267,404)
  ];
*/

/* Removed by interface
  this.readyButton = new IButton(0,760,510);
  currentStage.addChild(this.readyButton);
*/

/* Интерфейс */

	this.iface = new IGameFace({
			scene: 4,
			titleText : Assets.text.scene4Title,
			descriptionText : Assets.text.scene4Description
	});
	this.expand = new IButtonFace(this.iface);

  this.soundControl = new SoundControl();
  currentStage.addChild(this.soundControl);


	currentStage.addChild(this.expand);
	currentStage.addChild(this.iface);

	//this.iface.hide();

	this.backButton = new IButtonBack(this);
	currentStage.addChild(this.backButton);

	this.chooseButton = new IButtonChoose(this);
	currentStage.addChild(this.chooseButton);

	
	if (!Game.events.nikolayCompleted) {
		this.chooseButton.disable();
	}
	
	//this.checkComplete.bind(this);

	/*
	this.helloForm = new IForm({'text' : Assets.text.scene4Hello });
	currentStage.addChild(this.helloForm);
	*/

  this.exitForm = new IFormSmall({'text' : Assets.text.exitMessage});
  currentStage.addChild(this.exitForm);
  this.exitForm.hide();
	
	//this.iface.initShow();


	this.warnForm = new IFormSmall({'text' : Assets.text.maxFriends});
	currentStage.addChild(this.warnForm);
	this.warnForm.hide();

 /* Конец интерфейса */

  this.hint = new iHint(true,'', this);
  currentStage.addChild(this.hint);


}

Scene4.prototype.getEmptyFriendPlace = function() {
	var i;

	for (i = 0; i < Game.events.selectedFriends.length; i++) {
		if (Game.events.selectedFriends[i] === 0) return i;
	}

	return -1;
}

Scene4.prototype.complete = function() {
	
  game.scene.nikolay.buttonMode = false;
  game.scene.nikolay.click = null;
  game.scene.nikolay.tap = null; // убираем для планшетов

    //console.log(game.scene.star2);
  //game.scene.star2.gotoAndStop(0);
  game.scene.star5.alpha = 0;
  game.scene.hover1.alpha = 0;

  game.scene.nikolay.texture = game.scene.nikolay.nikolayCompletedTexture;

	game.scene.enterScene();

	Game.events.nikolayCompleted = true;
	Game.events.currentStage = 0;
	Game.events.stageDirty = true;
}

Scene4.prototype.checkComplete = function() {
	var  emptyPlace = game.scene4.getEmptyFriendPlace();
  
  if (emptyPlace === -1) {
    game.scene4.chooseButton.enable();
  } else {
  	game.scene4.chooseButton.disable();
  }

}

Scene4.prototype.enterScene = function() {
 	
 	this.soundControl.setTexture();
  //console.log("Enter scene4");
}

Scene4.prototype.leaveScene = function() {
  //console.log("Leave scene4");
}

