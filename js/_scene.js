function Scene(name, currentStage) {

  this.name = name;

  // Бекграунд
  this.back = new Background(Assets.scene1.background,0,0,1920,1080);
  currentStage.addChild(this.back);  

  // Поезд
  this.train = new Train();
  this.train.alpha = 1;

 
/* Попытка остановить паравозик сразу - не удается....
   там где-то вешается колбек на загрузку и он начинает ехать
   а так как ни времени ни денег нет - искать - себе дороже...

 //this.train.stop();

 //console.log(this.train._texture.baseTexture.source);

// i know about private variables ...
// but there is no othre way to do
  //this.train._texture.baseTexture.source.paused = true;
  //console.log(this.train._texture.baseTexture);
  //console.log(this.train.texture);
  
  //console.log(this.train.texture.baseTexture.source.pause());
 // this.train.texture.baseTexture.source.pause();

  //console.log(game);
  //console.log(this.train._texture.baseTexture.source.pause());
  //.source.pause();

  //source.pause();
  //console.log(source);

*/

  currentStage.addChild(this.train);

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


// карусель ---------------
  this.carousel = new Carousel();
  currentStage.addChild(this.carousel);
  
  /*this.star4 = new Star();
  this.star4.position.x = 1320;
  this.star4.position.y = 360;*/

  this.star4 = new Zvezdopad();
  this.star4.position.x = 1320;
  this.star4.position.y = 320;

  this.star4.alpha = 1;
  this.star4.animationSpeed = 0.5;
  this.star4.gotoAndPlay(10);
  currentStage.addChild(this.star4);

// -----------------------

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


    p.scale.set(0.1 + Math.random() * 0.3);

    p.x = Math.random() * game.width;
    p.y = (Math.random() * 100) - 100; // + 100 for canvas test

    p.alpha = 0.1 + Math.random() * 0.4;
    p.velocity = Math.random();
    
    game.particles.push(p);
    sprites.addChild(p);

  }

  currentStage.addChild(sprites);
  // Конец снега

   // БАГФИКС - НЕ Трогайть пока не пойму в чем дело 
   // исходный паровоз - 450пикселов, но почему-то сжимаетяс визуально ещё на 15 пикселов
   // итого нужно установить 465 чтоб было все красиво
//    this.train.height = 465;
  //console.log("Scene1 loaded");

  //
  // Интерфейс поверх всего
  //
  

  this.iplashka = new IPlashka({scene : 1});
  currentStage.addChild(this.iplashka);
  

}



