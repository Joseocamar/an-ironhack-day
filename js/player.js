function Player (game) {

this.game = game
this.x = function() {return game.canvas.width*0.22}
this.y = 0
this.y0 = function() {return game.canvas.height*0.8}
this.y1 = function() {return game.canvas.height*0.53}
this.y2 = function() {return game.canvas.height*0.26}
this.hp = 3
this.playerImg = new Image()
this.playerImg.src = "images/thump_55500030t212.png"
this.yv = 0.5

this.playerImg.frames = 3
this.playerImg.frameIndex = 0

}


Player.prototype.drawImg = function() {

  this.game.ctx.drawImage(this.playerImg, this.x(), this.y1(), 70, 80)

}

Player.prototype.setListener = function() {
  document.onkeyup = function() {

    if(event.keyCode === this.game.key.arrowUp && this.y === this.y0 || event.keyCode === this.game.key.arroUp && this.y == this.y1)
      console.log("Hola"); else console.log("No funciona")
  }.bind(this)
}

Player.prototype.move = function() {

}

Player.prototype.jump = function() {

  

}


