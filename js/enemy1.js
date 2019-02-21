function EnemyHtml(game, posY) {

this.game = game
this.x = this.game.w
this.y = posY
this.vx = 15
this.w = 70
this.h = 80
this.imgEnemyHtml = new Image() 
this.imgEnemyHtml.src = "images/enemigo1.png"



}

EnemyHtml.prototype.drawEnemyHtml = function () {
  this.game.ctx.drawImage(this.imgEnemyHtml, this.x, this.y, this.w, this.h)
} 

EnemyHtml.prototype.enemyOneMove = function () {
  this.x -= this.vx
}