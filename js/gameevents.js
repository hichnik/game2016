Game.DEBUG = false;

// Global static property of game
// TODO: Load from JSON

Game.events = {};
// Stages
Game.events.currentStage = 0;
// 0 - main
// 1 - tree stage (scene2 in js path)
// 2 - kitchen stage (scene3 in js path)
// 3 - nikolay stage (scene4 in js path)
// 4 - music stage (scene5 in js path)
Game.events.stageDirty = true;
// Do we need to reRender this stage


// stage completions
Game.events.carouselCompleted = false;
Game.events.kitchenCompleted = false;
Game.events.nikolayCompleted = false;
Game.events.soundSceneCompleted = false;
Game.events.treeCompleted = false;
//Game.events.treeSelectedTexture = -1;
Game.events.treeSelectedTexture = -1;

// By default train is not paused = I need to pause it after load callback ...
// so only pseudoevents
Game.events.trainPaused = true;

// Selected food array - 3 of 6th
Game.events.selectedFood = [0,0,0];
// 0 = not selected
// 1-6 - selected food by index

// Selected nikolay friends array
Game.events.selectedFriends = [0,0,0,0,0,0];


// This is set to true after completing full game
Game.events.gameCompeted = false;


/* INTERFACE */
Game.events.hideTimeout = 4000;


/* Hint */

Game.events.hint = {
	'x' : 0,
	'y' : 0,
	'text' : '',
	'show' : false,
	'numhints' : 0 // added for handling multiply objects at once
};



// Selected Sound in SoundScene
Game.events.selectedSound = -1;

// DO NOT TOUCH THIS
Game.events.soundScenePlayed = false;
Game.events.sound = {
	'muted' : false,
	'playing' : false,
	'index' : -1
}

// Preloader and assets 
Game.events.loaderPlayed = false;
Game.events.assetsLoaded = false;
Game.events.musicLoadStarted = false;