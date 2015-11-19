function SceneManager() {
      this.scenes = [];
    }

SceneManager.prototype.addScene = function(sceneName) {
  //console.log("Add scene: " + this.scenes + " " + sceneName);
  this.scenes.push(sceneName);
};
    
SceneManager.prototype.getScene = function(name) {
    var i, len;
    //console.log(this);
    for (i = 0, len=this.scenes.length; i < len; i++) {
      if (this.scenes[i].name === name) {
        return this.scenes[i];
      };
    }
}
