function IText(text, params) {

	var params = params || {};
	var text = text;
	var style = params.style || {'font' : '50px Arial'};

	PIXI.Text.call(this, text, style);

}

IText.prototype = Object.create(PIXI.Text.prototype);
IText.prototype.constructor = IText;