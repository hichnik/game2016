function Game() {

  this.currentStage = 0;

  //this.width = window.innerWidth || document.body.clientWidth;
  //this.height = window.innerHeight || document.body.clientHeight;
  this.width = 1920; //BASE WIDTH = DO NOT CHANGE!!! This is for game math - not actual resolution
  this.height = 1080; // BASE HEIGHT = DO NOT CHANGE!!!

  this.stages = [];

  this.stages.push(this.newStage()); //scene1 - index 0 - главная
  this.stages.push(this.newStage()); // scene2 - index 1 - елка
  this.stages.push(this.newStage()); // scene3 - index 2 - еда
  this.stages.push(this.newStage()); // scene4 - index 3 - николай
  this.stages.push(this.newStage()); // scene5 - index 4 - звук

  //console.log(stages);

  //this.stage = new PIXI.Container();
  this.stage = this.stages[Game.events.currentStage];

  this.clickSound = [];
  for(var i = 0; i < 5; i++) {
    this.clickSound.push(new Howl({
      'src' : [Assets.music.wav[i]],
      'autoplay' : false,
      'loop' : false,
      'volume' : 1,
      'preload' : true
    }) );
  }

  this.renderer = new PIXI.autoDetectRenderer(
    1920, //this.width,
    1080,//this.height,
    {
      background: 0x000000,
      view: document.getElementById("gameCanvas")
    });

  this.loadAssets();

  /* User logon = all assets and stages loaded */
  this.user = new User({
    'any' : 'params here',
    'you' : 'must override this function' 
  });


}

Game.prototype.changeStage = function(stageIndex){
  this.currentStage = stageIndex;
  console.log(Game.width);
}

Game.prototype.newStage = function() {
  return new PIXI.Container();
}

Game.prototype.loadAssets = function() {
  
var loader = new AssetsLoader();
    loader.add(loader.assetsToLoad('game'));
    //  TODO: add resources by scene...'all', 'scene1' etc...

    loader.once('complete',this.assetsLoaded.bind(this));
    loader.load();

}

Game.prototype.loadMusic = function() {
  var loader = new AssetsLoader();
  loader.add(loader.assetsToLoad('music'));
  loader.load();
}


Game.prototype.start = function() {

  //console.log("Start called");
  // better to do this with promises ...
  // but who wants to refactor if customer dont pay

  //console.log(Game.events.assetsLoaded);
  //console.log(Game.events.loaderPlayed);

  game.resize();
  //console.log(this.scene.update.bind(this));
  //requestAnimationFrame(this.scene.update.bind(this));

  if (Game.events.assetsLoaded && Game.events.loaderPlayed) {
    //actual game start here..
    //destroy loader animation and start game update cycle
    $('.wrapperIntro').fadeOut('slow');
    requestAnimationFrame(this.update.bind(this));

  }
  
  if (Game.events.assetsLoaded && !Game.events.musicLoadStarted) {
    // load music files 
    this.loadMusic();
    Game.events.musicLoadStarted = true;
  }


}

Game.prototype.assetsLoaded = function() {

  this.currentMusic = null;
  //this.resize();
  // change this after rewriting resize method
  this.stage = this.stages[0];
  this.scene = new Scene('scene1', this.stage);

  this.stage = this.stages[1];
  this.scene2 = new Scene2('scene2', this.stages[1]);

  this.stage = this.stages[2];
  this.scene3 = new Scene3('scene3', this.stages[2]);

  this.stage = this.stages[3];
  this.scene4 = new Scene4('scene4', this.stages[3]);

  this.stage = this.stages[4];
  this.scene5 = new Scene5('scene5', this.stages[4]);

  //console.log("Game assets loaded - stages created");
  Game.events.assetsLoaded = true;
  this.start();  
    
}

Game.prototype.endifaceAnimation = function() {

  console.log("endanimation");
  Game.events._ifaceDirty = false;
  Game.events._ifaceDirection = null;
  Game.events._ifaceObject = null;

}

Game.prototype.update = function() {

  var i,len,p,ifo;

  // check if game is completed to show last message;
    if (!Game.events.gameCompleted &&
        Game.events.currentStage === 0 && 
        Game.events.kitchenCompleted &&
        Game.events.nikolayCompleted && 
        Game.events.soundSceneCompleted &&
        Game.events.treeCompleted){
          // game completion message
          game.user.exitGame(1);
    }
    
  
  if (Game.events._ifaceDirty) {
    // interface update - do not change this code
    // do not use jquery for this reasons
    // Webgl updates are much faster and shold be done such way
    // console.log("Updating interface");

    ifo = Game.events._ifaceObject;
    
 //   console.log(ifo.position.y);
    if (Game.events._ifaceDirection === 'show') {
      ifo.position.y += 25;
      if (ifo.position.y > -1) {
        // show animation end
        ifo.position.y = 0; // for more than 1px movement
        ifo.endIFaceAnimation(); //  clear animation data
        Game.events._ifaceDirty = false; // but for sure here
      }
    }
    else {
      ifo.position.y -= 25;
//      console.log( ifo.position.y );
//      console.log("x")
      if (ifo.position.y <= -225) { 

        ifo.hide(); // костыль
        ifo.endIFaceAnimation(); // clear animation data
        Game.events._ifaceDirty = false; // but for sure here also

//        console.log( ifo.position.y );
//        console.log("last")
      
      }
    }
    // clear ifo

    // set iface not dirty
    // Game.events._ifaceDirty = false;
  }

  if (Game.events.stageDirty) {
    // we need to change a stage 
    //console.log(this.stages);
    //console.log(this.stage);
    for(i = 0; i < this.stages.length; i++) {
      this.stages.alpha = 0;
    }

    this.stage = this.stages[Game.events.currentStage];
    // Clean stage state 
    Game.events.stageDirty = false;

  }



  if (Game.events.currentStage === 0) {
    //console.log(game);    
    // snow on stage0 update;

      for (i = 0; i < game.particles.length; i++) {
        // p - particle
        var p = game.particles[i];
        p.x += p.vx;
        if (Math.random() < 0.01) p.vx = -p.vx;
        p.y += p.velocity*0.8;
        p.position.y = p.y;
        p.alpha -= 0.0005;
    
        if (p.y > 200) {p.alpha -= 0.005;}
        if (p.y > 300) {p.alpha = -1}
    
        if (p.alpha < 0) {
          // reinit particle;
          p.x = Math.random() * game.width;
          p.y = (Math.random() * game.height*2) - game.height; // + 100 for canvas test

          p.alpha = 0.6 + Math.random() * 0.3;
          p.velocity = 0.1 + Math.random();


          p.scale.set(0.2 + Math.random() * 0.4);
    
          p.x = Math.random() * game.width;
          p.y = (Math.random() * 100) - 100; // + 100 for canvas test
          //p.y = (Math.random() * 100) - 100 + 100; // + 100 for canvas test
          // We need to ensure that all particles created from negative offset first
          // That made to fill top content with snow
          p.alpha = 0.1 + Math.random() * 0.4;
          p.velocity = 0.2 + Math.random();
    
        }
       }
  }




  if (Game.events.currentStage === 1) {
  // снег на сцене с елкой  
    for (i = 0, len = game.s2particles.length; i < len; i++) {
      // very hard operations ....
      p = game.s2particles[i];
      p.y += p.velocity*0.8;
      p.x += p.vx;
      p.position.y = p.y;
      
      //p.alpha -= 0.001;

      if (p.y > 950) {
        p.alpha -= 0.005;  
      }

      if (p.x > 2050) {
        p.x = -50;
      }

      if (p.position.y > 1000 || p.alpha < 0) {
        // reinit particle
        p.x = Math.random() * game.width;
        p.y = (Math.random() * game.height) - game.height*2; // + 100 for canvas test

        p.alpha = 0.3 + Math.random() * 0.4;
        p.velocity = 0.1 + Math.random();
    }


    }
    
  }

  if (Game.events.currentStage === 3) {
  // снег на сцене с Николаем -
  //  Данный код не нужно рефакторить, лепя в 1 вареник - 
  // несмотря на внешнюю похожесть, у него разные зоны отвественности  
    for (i = 0, len = game.s4particles.length; i < len; i++) {
      // very hard operations ....
      p = game.s4particles[i];
      p.x += p.vx;
      if (Math.random() < 0.01) p.vx = -p.vx;
      p.y += p.velocity*0.7;
      p.position.y = p.y;
      
      //p.alpha -= 0.001;

      if (p.y > 950) {
        p.alpha -= 0.005;  
      }

      if (p.position.y > 1000 || p.alpha < 0) {
        // reinit particle
        p.x = Math.random() * game.width;
        p.y = (Math.random() * game.height) - game.height*2; // + 100 for canvas test

        p.alpha = 0.3 + Math.random() * 0.4;
        p.velocity = 0.1 + Math.random();
    }


    }
    
  }

  this.renderer.render(this.stage);
  requestAnimationFrame(this.update.bind(this));
}



Game.prototype.resize = function() {
  // TOTO : Сделать нормальный ресайз для устройств
  // с учетом ретины, пиксель аспект ратио т.т.д. 
  var i;

  var currentWidth = window.innerWidth;
  var currentHeight = window.innerHeight;

  var gameRatio = game.height/game.width;
  var viewportRatio = currentHeight/currentWidth;

  var aspectRatio = 1; // Default do not scale

  // console.log("gameRatio: " + gameRatio + " viewportRatio: " + viewportRatio);

  if (gameRatio > viewportRatio) {
    // console.log("scale by height");
    aspectRatio = currentHeight/game.height;
  } else {
    // console.log("scale by width");
    aspectRatio = currentWidth/game.width;
  }

  // console.log("ratio: " + "\n" + aspectRatio);

  game.renderer.resize(game.width*aspectRatio, game.height*aspectRatio);
  for(i = 0; i < game.stages.length; i++){
    game.stages[i].scale.x = aspectRatio;
    game.stages[i].scale.y = aspectRatio;
  }


}

Game.prototype.playSound = function(type) {
  this.clickSound[type].play();
} 




