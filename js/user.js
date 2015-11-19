function User(params) {

	var params = params || {};
	// You definetly shoul rewrite this function
	// add any params you wish

	this.userName = Assets.user.userFirstName;
	this.lastName = Assets.user.userLastName;
	this.fullName = this.userName + ' ' + this.lastName;
	this.photo = Assets.user.photo;
	Assets.user.fullName = this.fullName;
	Assets.user.description = 'Такий собі Костянтин';

/* From image to pixi texture you can convert with such code

var img = new Image();
//img.src = 'my/url/image.png' // load with ajax;

var base = new PIXI.BaseTexture(img),
    texture = new PIXI.Texture(base);
// return your  texture

*/

}

User.prototype.getStats = function() {

	return {
		// Insert any param from gameevents.js that you wish to stat
		// or maybe even any param from game
		
		//Game.events.carouselCompleted = false;
		'kitchenCompleted' : Game.events.kitchenCompleted,
		'nikolayComleted' : Game.events.nikolayComleted,
		'soundSceneCompleted' : Game.events.soundSceneCompleted,
		'treeCompleted' : Game.events.treeCompleted,
		'selectedFood' : Game.events.selectedFood,
		'selectedFriends' : Game.events.selectedFriends,
		'selectedSound' : Game.events.selectedSound,
		'gameCompleted' : Game.events.gameCompeted
	};

}

User.prototype.exitGame = function(complete) {

	var gameCompleted = complete;
	console.log("TODO: send user stats to server");
	console.log("TODO: implement other functionality");
	console.log("Close game");

	//console.log( !!gameCompleted );

	if (!!gameCompleted) {
		game.scene.completeForm.show();
		Game.events.gameCompleted = true;
	} else {
		game.stages[Game.events.currentStage].getChildByName('exitForm').show();
	}
/*
	if (!complete) {
		// Iknow I know ... Life is Hard
		
	}
	*/
}