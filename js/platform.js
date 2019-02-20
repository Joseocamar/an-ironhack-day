function Platform (game) {
  
  this.game = game
  this.w = 80
  this.h = 30

  this.platformImg = new Image()
  this.platformImg.src = "images/platform.png"

  this.platformImg2 = new Image()
  this.platformImg2.src = "images/platform.png"

}


Platform.prototype.platformDraw1 = function () {

  this.game.ctx.drawImage(this.platformImg, game.player.x - game.player.w/8, game.player.y1 + game.player.h, this.w, this.h)

}

Platform.prototype.platformDraw2 = function () {

  this.game.ctx.drawImage(this.platformImg2, game.player.x - game.player.w/8, game.player.y2 + game.player.h, this.w, this.h)
}