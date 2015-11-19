function IForm(params) {

	var params = params || {};
	var width = 1030;
	var height = 579;

	PIXI.Container.call(this);

	this.width = width;
	this.height = height;

	var background = new Background(Assets.iface.formBg,0,0,1030,579);
	this.addChild(background);

	if (!params.text) params.text = 'NO TEXT';

	var description = new IText(params.text, {
		'position' : {'x' : 20, 'y' : 20, 'width' : width-20*2},
		'style' : Assets.text.formTextStyle
	});

	description.anchor.x = 0.5;
	description.anchor.y = 0.5;
	description.position.x = width/2;
	description.position.y = height/2;
	this.addChild(description);

	var submitButton = new IButtonSubmit(0,this); // pass container to hide/show handler
	submitButton.anchor.x = 0.5;
	submitButton.anchor.y = 0.5;
	submitButton.position.x = width/2;
	submitButton.position.y = height-45;

	this.addChild(submitButton);

	this.position.x = 443;
	this.position.y = 224;


}

IForm.prototype = Object.create(PIXI.Container.prototype);
IForm.prototype.constructor = IForm;

IForm.prototype.hide = function() {
	this.alpha = 0;
	this.position.y = game.height;

}

IForm.prototype.show = function() {
	this.alpha = 1;
	this.position.y = 224;
}





function IFormSmall(params) {
	var params = params || {};
	
	this.name = 'exitForm';

	PIXI.Container.call(this);

	//var container = new PIXI.Container();

	var background = new Background(Assets.iface.smallFormBg,0,0,774,423);
	this.addChild(background);

	if (!params.text) params.text = 'NO TEXT';

	var description = new IText(params.text, {
		'position' : {'x' : 20, 'y' : 20, 'width' : 1030-20*2},
		'style' : Assets.text.smallFormTextStyle
	});

	description.anchor.x = 0.5;
	description.anchor.y = 0.5;
	description.position.x = this.width/2;
	description.position.y = this.height/2-30;
	this.addChild(description);

	var submitButton = new IButtonSubmit(0,this); // pass container to hide/show handler
	submitButton.anchor.x = 0.5;
	submitButton.anchor.y = 0.5;
	submitButton.position.x = this.width/2;
	submitButton.position.y = this.height-45;

	this.addChild(submitButton);

	this.position.x = 571;
	this.position.y = 373;

	//return container;

}

IFormSmall.prototype = Object.create(PIXI.Container.prototype);
IFormSmall.prototype.constructor = IFormSmall;

IFormSmall.prototype.hide = function() {
	this.alpha = 0;
	this.position.y = game.height;

}

IFormSmall.prototype.show = function() {
	this.alpha = 1;
	this.position.y = 373;
}



