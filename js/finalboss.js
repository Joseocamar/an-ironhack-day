function FinalBoss (game, posY) {
  this.game = game
this.x = this.game.w + 100
this.y = posY - 50
this.vx = 1
this.w = 450
this.h = 450
this.hp = 10

this.hudx = 720
this.hudy = 15
this.hudw = 850
this.hudh = 70
this.hudWidth = 550
this.imgFinalBoss = new Image() 
this.imgFinalBoss.src = "images/FinalBoss.png"
this.imgLifeHud = new Image()
this.imgLifeHud.src = "images/FinalBossLife.png"



}

FinalBoss.prototype.drawFinalBoss = function () {
  this.game.ctx.drawImage(this.imgFinalBoss, this.x, this.y, this.w, this.h)
} 


FinalBoss.prototype.drawFinalBossHud = function() {
  if (this.hp === 10){this.game.ctx.drawImage(this.imgLifeHud, 0, 0, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)}
  else if(this.hp === 9) {this.game.ctx.drawImage(this.imgLifeHud, 0, 100, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh,)}
  else if(this.hp === 8) {this.game.ctx.drawImage(this.imgLifeHud, 0, 200, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)}
  else if(this.hp === 7) {this.game.ctx.drawImage(this.imgLifeHud, 0, 300, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)}
  else if(this.hp === 6) {this.game.ctx.drawImage(this.imgLifeHud, 0, 400, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)}
  else if(this.hp === 5) {this.game.ctx.drawImage(this.imgLifeHud, 0, 500, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)}
  else if(this.hp === 4) {this.game.ctx.drawImage(this.imgLifeHud, 0, 600, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)}
  else if(this.hp === 3) {this.game.ctx.drawImage(this.imgLifeHud, 0, 700, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)}
  else if(this.hp === 2) {this.game.ctx.drawImage(this.imgLifeHud, 0, 800, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)}
  else if(this.hp === 1) {
    this.game.ctx.drawImage(this.imgLifeHud, 0, 900, this.hudw, 100, this.hudx, this.hudy, this.hudWidth, this.hudh)
    this.game._youWin()}
  else if(this.hp === 0) {this.game._youWin()}
  else {console.log("What to do know?")}
}

FinalBoss.prototype.finalBossMove = function () {
  this.x -= this.vx
}
