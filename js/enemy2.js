function EnemyJavaScript(game, posY) {

  this.game = game
  this.x = this.game.w
  this.y = posY
  this.vx = 20
  this.w = 70
  this.h = 80
  this.imgEnemyJavaScript = new Image()
  this.imgEnemyJavaScript.src = "images/Enemigo2.png"

}
EnemyJavaScript.prototype.drawEnemyJavaScript = function () {
  this.game.ctx.drawImage(this.imgEnemyJavaScript, this.x, this.y, this.w, this.h)
} 

EnemyJavaScript.prototype.enemyTwoMove = function () {
  this.x -= this.vx
}