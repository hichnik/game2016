function Scene(name, currentStage) {
	this.name = name;

	  // Бекграунд
  this.back = new Background(Assets.scene1.background,0,0,1920,1080);
  currentStage.addChild(this.back);  

  this.train = new Train();
  this.train.alpha = 1;
	currentStage.addChild(this.train);



   // Снег
	  var sprites = new PIXI.ParticleContainer(10000, {
    scale: true,
    position: true,
    uvs: true,
    alpha: true
  });

  game.particles = [];
  var totalSprites = game.renderer instanceof PIXI.WebGLRenderer ? game.width : 100;
  var p, i;
  for (i = 0; i < totalSprites; i++){
    
    var spriteImage = Assets.snow.baseTexture;

    if (i % 5 === 0) { spriteImage = Assets.snow.advanceTexture};
   // if (i % 315  === 0) {spriteImage = "textures/snowparticles/115snow.png" };

    // p - particle instance...
    p = new PIXI.Sprite.fromImage(spriteImage);

    p.scale.set(0.2 + Math.random() * 0.4);

    p.x = Math.random() * game.width;
    p.y = (Math.random() * 100) - 100; // + 100 for canvas test

    p.alpha = 0.3 + Math.random() * 0.3;
    p.velocity = Math.random();
    p.vx = Math.random() - 0.5;
    
    game.particles.push(p);
    sprites.addChild(p);

  }
  currentStage.addChild(sprites);






  // Эффекты сцены при наведении
  // HoverEffect(x,y,alpha);
  this.hover1 = new HoverEffect(175,340,0);
  currentStage.addChild(this.hover1);
  //hover1 - николай

  this.hover2 = new HoverEffect(280,270,0);
  currentStage.addChild(this.hover2);
  //hover2 - елка

  this.hover3 = new HoverEffect(435,240,0);
  currentStage.addChild(this.hover3);
  // hover3 - сцена

  this.hover4 = new HoverEffect(770,460,0);
  this.hover5 = new HoverEffect(890,450,0);
  // hover4,5 - еда

  currentStage.addChild(this.hover4);
  currentStage.addChild(this.hover5);
  this.hover4.animationSpeed = -1;
  //pixihacks allows to do negative animationSpeed
  // reverse order


/* ------------ Дым --------------*/
  this.smoke = [
    // старая текстура дыма
    //new Smoke(-330,-310,0.5), // smoke[0] - дым слева
    //new Smoke(1270,-350,0.6), // smoke[1] - дым справа
    //new Smoke(675,-165,0.6), // smoke[2] - дым сверху слева
    new Smoke(-135,80,0.5), // smoke[0] - дым слева
    new Smoke(1520,40,0.6), // smoke[1] - дым справа
    new Smoke(565,-120,0.6), // smoke[2] - дым сверху правее
    new Smoke(275,-110,0.8), // smoke[3] - дым сверху слева
    new Smoke(1350,180,0.6) // smoke[4] - дым внизу справа, левее трубы
  ];


  this.smoke[0].gotoAndPlay(10);
  this.smoke[1].gotoAndPlay(5);    
  this.smoke[2].gotoAndPlay(10);    
  this.smoke[3].gotoAndPlay(0);    
  this.smoke[4].gotoAndPlay(15);    

  this.smoke[0].scale.x = 0.8;
  this.smoke[1].scale.x = 0.6;

//  console.log(this.smoke[2]);
  this.smoke[2].scale.x = 0.25;
  this.smoke[2].scale.y = 0.25;
  this.smoke[2].alpha = 0.7;

  this.smoke[3].scale.x = 0.20;
  this.smoke[3].scale.y = 0.20;
  this.smoke[3].alpha = 0.7;

  this.smoke[4].scale.x = 0.7;
  this.smoke[4].alpha = 0.8;

  currentStage.addChild(this.smoke[0]);
  currentStage.addChild(this.smoke[1]);
  currentStage.addChild(this.smoke[2]);
  currentStage.addChild(this.smoke[3]);
  currentStage.addChild(this.smoke[4]);
/* ----------- Елка ---------- */

  // Игрушки на елочке 
  this.tree = new Tree();
  currentStage.addChild(this.tree);

  // Анимация елки
  //this.star1 = new Star();
  this.star1 = new Zvezdopad();
  this.star1.position.x = 360 - 100;
  this.star1.position.y = 320 - 100;

  //this.star1.position.x = 0;
  //this.star1.position.y = 0;

  this.star1.alpha = 1;
  this.star1.animationSpeed = 0.5;
  this.star1.play();
  currentStage.addChild(this.star1);


/* ------------Сцена ----------------*/ 

  // Огни на сцене
  this.soundScene = new SoundScene();
  currentStage.addChild(this.soundScene);

  // Анимация звезды сцены
 /* this.star2 = new Star();
  this.star2.position.x = 520;
  this.star2.position.y = 320;*/
  this.star2 = new Zvezdopad();
  this.star2.position.x = 520 - 100;
  this.star2.position.y = 320 - 100;
   

  this.star2.alpha = 1;
  this.star2.animationSpeed = 0.5;
  this.star2.gotoAndPlay(20);
  currentStage.addChild(this.star2);


/* ---------Еда -------------------- */
  
// Подсветка кухни
  this.kitchen = new Kitchen();
  currentStage.addChild(this.kitchen);

// Еда на сцене
  this.eda = new Eda();

  // добавить еду только если выбрана хоть какая-нибудь еда
  if (Game.events.selectedFood != [0,0,0]){
    currentStage.addChild(this.eda);  
  }

  // Звезда на еде
  /*this.star3 = new Star();
  this.star3.position.x = 920;
  this.star3.position.y = 520;*/
  this.star3 = new Zvezdopad();
  this.star3.position.x = 920 - 100;
  this.star3.position.y = 520 - 100;

  
  this.star3.alpha = 1;
  this.star3.animationSpeed = 0.5;
  this.star3.gotoAndPlay(10);
  currentStage.addChild(this.star3);

 
/* ----------Конец еды ---------------*/ 

/* Этого модуля тоже пока не будет - не нужно
		его отображать
// карусель ---------------
  this.carousel = new Carousel();
  currentStage.addChild(this.carousel);

  this.star4 = new Zvezdopad();
  this.star4.position.x = 1320;
  this.star4.position.y = 320;

  this.star4.alpha = 1;
  this.star4.animationSpeed = 0.5;
  this.star4.gotoAndPlay(10);
  currentStage.addChild(this.star4);

// -----------------------
*/

// ------------- Николай  ------------ //
  this.nikolay = new Nikolay();
  currentStage.addChild(this.nikolay);

  //this.star5 = new Star();
  this.star5 = new Zvezdopad();
  this.star5.position.x = 200;
  this.star5.position.y  = 330;
  this.star5.alpha = 1;
  this.star5.animationspeed = 0.5;
  this.star5.gotoAndPlay(5);
  currentStage.addChild(this.star5);

  /* Пустые элементы для отображения на переднем плане */
  this.emptyLayer1 = new PIXI.Sprite(PIXI.Texture.EMPTY, game.width, game.height);
  this.emptyLayer2 = new PIXI.Sprite(PIXI.Texture.EMPTY, game.width, game.height);
  this.emptyLayer3 = new PIXI.Sprite(PIXI.Texture.EMPTY, game.width, game.height);

  currentStage.addChild(this.emptyLayer1);
  currentStage.addChild(this.emptyLayer2);
  currentStage.addChild(this.emptyLayer3);

  //console.log(currentStage);
  /* /Пустые элементы для отображения на переднем плане */

  /* Програмный снег будет добавляться непосредственно
   в цикле обновления - update, так как он формируется динамически....
   канвасом добавлять не получится - слишком дорогое добавление
   по ресурсам во время обновления... 3 попытки, и все дорого
  */

	/* Интерфейс */

	this.iface = new IGameFace({
			scene: 1,
			titleText : Assets.text.scene1Title,
			descriptionText : Assets.text.scene1Description
	});
	
  this.soundControl = new SoundControl();
  currentStage.addChild(this.soundControl);
    
  this.expand = new IButtonFace(this.iface);

  currentStage.addChild(this.expand);
	currentStage.addChild(this.iface);


  this.iface.initShow();
  this.expand.delayEnabled();
  //setTimeout(this.iface.slowHide.bind(this.iface), Game.events.hideTimeout);
	
  /*
  this.iface.hide();
  this.iface.initShow();
  */

	//this.expand.position.y - 0;
	//this.iface.position.y = -130;
	//this.expand.position.y = 130;
	//this.expand.anchor.x = 0.5;
	//this.expand.position.x = 1357/2+288;

	/* Только на подчиненных сценах */
	/*
	this.backButton = new IButtonBack();
	currentStage.addChild(this.backButton);


	this.choose = new IButtonChoose(this);
	currentStage.addChild(this.choose);
	*/

	/* /Только на подчиненных сценах */


  /* Do not show messages on start
  this.helloForm2 = new IForm({'text' : Assets.text.helloMessage });
  this.helloForm = new IForm({'text' : Assets.text.scene1Hello });
  currentStage.addChild(this.helloForm);
	currentStage.addChild(this.helloForm2);
  */

  // Hide complete message
	this.completeForm = new IForm({'text' : Assets.text.completeMessage});
	currentStage.addChild(this.completeForm);
	this.completeForm.hide();
  
  
  this.exitForm = new IFormSmall({'text' : Assets.text.exitMessage});
  currentStage.addChild(this.exitForm);
  this.exitForm.hide();
	

 /* Конец интерфейса */

  /* Подсказки */
  /* Ещё два участка кода находятся в kitchen.js и game.js 
      Это конечно полохо с архитектурной точки зрения,
      но в данный момент это приемлемое решение
  */
  this.hint = new iHint(true,'', this);
  currentStage.addChild(this.hint);


}

Scene.prototype.complete = function() {

}

Scene.prototype.leaveScene = function() {
  // pause train
  //console.log("Leave scene1");
  this.train.texture.baseTexture.source.pause();
}

Scene.prototype.enterScene = function() {
  // resume paused train
  //console.log("Enter scene1");

  this.soundControl.setTexture();
  this.train.texture.baseTexture.source.play();
}