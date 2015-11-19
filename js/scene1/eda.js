function Eda() {
  var texture = new PIXI.Texture.fromImage(Assets.scene1.eda);
  PIXI.Sprite.call(this, texture, game.width, game.height);
  this.position.x = 884;
  this.position.y = 622;
  this.width = 290;
  this.height = 65;

  // Еда появляется только после прохождения уровня с едой...
  this.alpha = 0.3;
  // Отработчик висит на клике по еде
}

Eda.prototype = Object.create(PIXI.Sprite.prototype);
Eda.prototype.constructor = Eda;