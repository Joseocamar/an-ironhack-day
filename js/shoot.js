function Shoots (game, x, y, typeOfShot) {
  this.game = game
  this.x = x
  this.y = y
  this.vx = 25
  this.w = 75
  this.h = 30
  this.shot = typeOfShot
  this.shotImgOne = new Image() 
  this.shotImgOne.src = "images/bala1.png"
  this.shotImgTwo = new Image()
  this.shotImgTwo.src = "images/bala2.png"
  
} 



Shoots.prototype.drawShot1 = function () {
  this.game.ctx.drawImage(this.shotImgOne, this.x, this.y, this.w, this.h)
}

Shoots.prototype.drawShot2 = function () {
  this.game.ctx.drawImage(this.shotImgTwo, this.x, this.y, this.w, this.h)
}

Shoots.prototype.drawBullet = function() {
  if(this.shot === 0) this.drawShot1()
  if(this.shot === 1) this.drawShot2()
}

Shoots.prototype.move = function() {
  this.x += this.vx
}

