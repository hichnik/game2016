function Scene3(name, currentStage) {
	this.name = name;

	this.back = new Background(Assets.scene3.background,0,0,1920,1080);
	currentStage.addChild(this.back);

	this.foodIcons = [
		new FoodIcon(1,15,96),
		new FoodIcon(2,15,412),
		new FoodIcon(3,15,735),
		new FoodIcon(4,1658,96),
		new FoodIcon(5,1658,412),
		new FoodIcon(6,1658,735)
	];

  for(var i = 0; i < this.foodIcons.length; i++) {
    currentStage.addChild(this.foodIcons[i]);
  }
	
	this.bubbles = [
		new Bubble2(1,15,96),
		new Bubble2(2,15,412),
		new Bubble2(3,15,735),
		new Bubble2(4,1658,96),
		new Bubble2(5,1658,412),
		new Bubble2(6,1658,735)
	];

  for(var i = 0; i < this.bubbles.length; i++) {
    currentStage.addChild(this.bubbles[i]);
  }

  this.selectedFood = [
  	new SelectedFood(0,0,294,55), // selectedType,positionIndex(0-2), positionx, positiony 
  	new SelectedFood(0,1,977,61),
  	new SelectedFood(0,2,632,509)
  ];

  for(var i = 0; i < this.selectedFood.length; i++) {
    currentStage.addChild(this.selectedFood[i]);
  }

  /*
  this.readyButton = new IButton(0,760,510);
  */

  /* Кнопка заменена на интерфейс
  currentStage.addChild(this.readyButton);
	*/

/* Интерфейс */

	this.iface = new IGameFace({
			scene: 3,
			titleText : Assets.text.scene3Title,
			descriptionText : Assets.text.scene3Description
	});

  this.soundControl = new SoundControl();
  currentStage.addChild(this.soundControl);

	this.expand = new IButtonFace(this.iface);



	currentStage.addChild(this.expand);
	currentStage.addChild(this.iface);

	/*
	this.iface.hide();
	this.iface.initShow();
	*/

	this.backButton = new IButtonBack(this);
	currentStage.addChild(this.backButton);


	this.chooseButton = new IButtonChoose(this);
	currentStage.addChild(this.chooseButton);

	if (!Game.events.kitchenCompleted) {
		this.chooseButton.disable();
	}

	/*
	this.helloForm = new IForm({'text' : Assets.text.scene3Hello });
	currentStage.addChild(this.helloForm);
	*/

  this.exitForm = new IFormSmall({'text' : Assets.text.exitMessage});
  currentStage.addChild(this.exitForm);
  this.exitForm.hide();
	
	this.warnForm = new IFormSmall({'text' : Assets.text.maxFood});
	currentStage.addChild(this.warnForm);
	this.warnForm.hide();

 /* Конец интерфейса */

  this.hint = new iHint(true,'', this);
  currentStage.addChild(this.hint);

}

Scene3.prototype.getEmptyFoodPlace = function() {
	var i;

	for (i = 0; i < Game.events.selectedFood.length; i++) {
		if (Game.events.selectedFood[i] === 0) return i;
	}
	
	return -1;
}

Scene3.prototype.complete = function() {

  game.scene.kitchen.texture = game.scene.kitchen.kitchenCompletedTexture;
  
  game.scene.hover4.alpha = 0;
  game.scene.hover5.alpha = 0;
  game.scene.hover4.stop();
  game.scene.hover5.stop();

  game.scene.star3.alpha = 0;

  game.scene.eda.alpha = 1;

  game.scene.kitchen.buttonMode = false;
  game.scene.kitchen.click = null;
  game.scene.kitchen.tap = null; // убираем для планшетов

  game.scene.enterScene();

	Game.events.kitchenCompleted = true;
	Game.events.currentStage = 0;
	Game.events.stageDirty = true;


}


Scene3.prototype.checkComplete = function() {
	// enables/disables complete button on scene
	var	emptyPlace = game.scene3.getEmptyFoodPlace();
  if (emptyPlace === -1) {
    game.scene3.chooseButton.enable();  
    //Заменено на интерфейс выбора
    //game.scene3.readyButton.setActive();
  } else {
    game.scene3.chooseButton.disable();  
  }


}

Scene3.prototype.enterScene = function() {
 	this.soundControl.setTexture();
  //console.log("Enter scene3");
}

Scene3.prototype.leaveScene = function() {
  //console.log("Leave scene3");
}

