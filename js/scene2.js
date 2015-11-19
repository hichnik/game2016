function Scene2(name, currentStage) {
  this.name = name;

  //var tmpback = new TempBackground();
  //tmpback.alpha = 0.5;
  //currentStage.addChild(tmpback);

  //this.back = new Background2();
  this.back = new Background(Assets.scene2.background,0,1080-120,1920,120);
  currentStage.addChild(this.back);



  // Снег на сцене
  var sprites = new PIXI.ParticleContainer(10000, {
    scale: true,
    position: true,
    uvs: true,
    alpha: true
  });
  
  game.s2particles = [];
  //console.log(game.s2particles);
  //console.log(game);
  var totalSprites = game.renderer instanceof PIXI.WebGLRenderer ? 8000 : 100;
  var p, i;
  for (i = 0; i < totalSprites; i++) {
    var spriteImage = Assets.snow.baseTexture;
    p = new PIXI.Sprite.fromImage(spriteImage);

    p.scale.set(0.1 + Math.random() * 0.5);

    p.x = Math.random() * game.width;
    p.y = (Math.random() * game.height*2) - game.height; // + 100 for canvas test

    p.alpha = 0.3 + Math.random() * 0.4;
    p.velocity = 0.1 + Math.random();
    p.vx = Math.random();
    
    game.s2particles.push(p);
    sprites.addChild(p);

  }

  currentStage.addChild(sprites);



  // подсветка елочки
  this.treeLight = new MainTreeLight();
  currentStage.addChild(this.treeLight); 

  // сама елочка
  this.mainTree = new MainTree();
  currentStage.addChild(this.mainTree);

  // игрушки на елочке
  this.treeDecoration = new TreeDecoration();
  currentStage.addChild(this.treeDecoration); 
  


  // Decorations behind bubbles
  this.decorations = [
    new Decoration(0,20,20),
    new Decoration(1,20,260),
    new Decoration(2,20,500),
    new Decoration(3,20,740),
    new Decoration(4,1660,20),
    new Decoration(5,1660,260),
    new Decoration(6,1660,500),
    new Decoration(7,1660,740)
  ];

  for(var i = 0; i < this.decorations.length; i++) {
    currentStage.addChild(this.decorations[i]);
  }
  
  this.bubbles = [
    new Bubble(0,20,20),
    new Bubble(1,20,260),
    new Bubble(2,20,500),
    new Bubble(3,20,740),
    new Bubble(4,1660,20),
    new Bubble(5,1660,260),
    new Bubble(6,1660,500),
    new Bubble(7,1660,740)
  ];

  for(var i = 0; i < this.bubbles.length; i++) {
    currentStage.addChild(this.bubbles[i]);
  }

/* Интерфейс */

  this.iface = new IGameFace({
      scene: 2,
      titleText : Assets.text.scene2Title,
      descriptionText : Assets.text.scene2Description
  });
  this.expand = new IButtonFace(this.iface);

  this.soundControl = new SoundControl();
  currentStage.addChild(this.soundControl);

  currentStage.addChild(this.expand);
  currentStage.addChild(this.iface);
  
  /*
  this.iface.hide();
  */

  this.backButton = new IButtonBack(this);
  currentStage.addChild(this.backButton);

  this.chooseButton = new IButtonChoose(this);
  currentStage.addChild(this.chooseButton);

  if (!Game.events.treeCompleted || (Game.events.treeSelectedTexture < 0)) {
    this.chooseButton.disable();    
  }

  /*
  this.helloForm = new IForm({'text' : Assets.text.scene2Hello });
  currentStage.addChild(this.helloForm);
  */

  this.exitForm = new IFormSmall({'text' : Assets.text.exitMessage});
  currentStage.addChild(this.exitForm);
  this.exitForm.hide();
  

 /* Конец интерфейса */

  this.hint = new iHint(true,'', this);
  currentStage.addChild(this.hint);

  
}

Scene2.prototype.complete = function() {

  // Убираем возможность входа
  game.scene.tree.buttonMode = false;
  game.scene.tree.click = null;
  game.scene.tree.tap = null; // убираем для планшетов

  // Где-то неверная замена текстуры - костыль вот...
  if (Game.events.treeSelectedTexture > -1) {
    game.scene.tree.texture = game.scene.tree.completedTextures[Game.events.treeSelectedTexture];
    //console.log(Game.events.treeSelectedTexture);
  }
 
  // Завершение сцены елочки
  Game.events.treeCompleted = true;
  game.scene.star1.alpha = 0;

  game.scene.enterScene();

  Game.events.currentStage = 0;
  Game.events.stageDirty = true;
}

Scene2.prototype.enterScene = function() {
  //console.log("Enter scene2");
  this.soundControl.setTexture();
}

Scene2.prototype.leaveScene = function() {
  //console.log("Leave scene2");
}