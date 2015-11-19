function MainTree() {

this.emptyTexture = PIXI.Texture.EMPTY;
this.treeTexture = PIXI.Texture.fromImage(Assets.scene2.tree);

PIXI.Sprite.call(this,this.treeTexture,game.width,game.height);
this.position.x = 530; //(1920-860)/2
this.position.y = 0;
this.width = 860;
this.height = 1080;

}


MainTree.prototype.constructor = MainTree;
MainTree.prototype = Object.create(PIXI.Sprite.prototype);