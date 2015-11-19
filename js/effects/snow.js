Snow.CANVAS_HEIGHT = 300;
Snow.ALFA_FADE = 0.0005;

function Snow(numParticles) {
  // console.log("snow constructor called");
  this.numParticles = numParticles || game.width;
  //this.numParticles = 10;
  // by default we create particles count base on device width
  
  //console.log("Creating " + this.numParticles + " particles for show");
  // create particles object
  
  this.particles = this.createParticles();
  //console.log(this.particles);

  this.canvas = document.createElement('canvas');
  this.canvas.width = game.width;
  this.canvas.height = Snow.CANVAS_HEIGHT;
  this.ctx = this.canvas.getContext('2d');

  //console.log(game.stage);
  this.renderCanvas(this.ctx);

  this.texture = new PIXI.Texture.fromCanvas(this.canvas);
  this.sp = new PIXI.Sprite(this.texture);
  game.stage.addChild(this.sp);   

  //console.log(this.ctx);

}

Snow.prototype.renderCanvas = function(ctx) {
  
  // TODO : rewrite this ugly spahetti code with OOD

  var len = this.particles.length, i, particle;

  for(var i = 0; i < len; i++) {
      particle = this.particles[i];
      // render on canvas
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.scale*10, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(255,255,255,'+ particle.alpha +')';
      ctx.fill();

      // update positions
      // TODO : rewrite this ugly spahetti code with OOD

      this.particles[i].y += this.particles[i].velocity;
      this.particles[i].alpha -= Snow.ALFA_FADE;

      if (this.particles[i].y > Snow.CANVAS_HEIGHT) { this.particles[i].alpha = -1}
      if (this.particles[i].y && this.particles[i].alpha > 0.1) {
        this.particles[i].alpha -= Snow.ALFA_FADE*10; 
      }

      if (this.particles[i].alpha < 0) {
        this.particles[i] = new this.Particle();
      }

  }

}

Snow.prototype.createParticles = function() {

  var particles = [];
  //console.log("Create particles");
  //console.log("this numparticles: " + this.numParticles);
  for(var i = 0; i < this.numParticles; i++){
    particles.push( new this.Particle() );
  }

  return particles;
}


Snow.prototype.update = function() {
  
//  game.stage.removeChild(this.sp);


  //console.log("removing canvas");
  //this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

//  this.canvas = document.createElement('canvas');

//  this.canvas.width = game.width;
//  this.canvas.height = Snow.CANVAS_HEIGHT;

//  this.ctx = this.canvas.getContext('2d');
//  this.renderCanvas(this.ctx);  
//  this.texture = new PIXI.Texture.fromCanvas(this.canvas);
//  this.sp = new PIXI.Sprite(this.texture);
//  game.stage.addChild(this.sp);   

  //console.log(this.particles[0].x | 0);

  //console.log("snow update function called:" + this.ctx);
  //console.log(this);

}


Snow.prototype.Particle = function() {
  this.x = Math.random() * game.width;
  this.y = (Math.random() * 100) - 100 + 100; // + 100 for canvas test
  // We need to ensure that all particles created from negative offset first
  // That made to fill top content with snow

  this.alpha = 0.1 + Math.random() * 0.4;
  this.scale = 0.1 + Math.random() * 0.3;
  this.velocity = Math.random();

  //console.log(this);
}