function Background (game) {
  this.game = game
  this.x = 0
  this.y = 0
  
  this.mX = 15

  this.backgroundImg = new Image()
  this.backgroundImg.src = "images/background.png"


}

Background.prototype.drawBg = function () {

  this.game.ctx.drawImage(this.backgroundImg, this.x, this.y, this.game.w, this.game.h);
  this.game.ctx.drawImage(this.backgroundImg, this.x + this.game.w, this.y, this.game.w, this.game.h);

}

Background.prototype.moveBg = function () {
  this.x -= this.mX
  if (this.x < -this.game.w) this.x = 0


}
