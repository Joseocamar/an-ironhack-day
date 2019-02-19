function Player (game) {

this.game = game
this.x = this.game.canvas.width*.22
this.y0 = this.game.canvas.height*.8
this.y1 = this.game.canvas.height*.53
this.y2 = this.game.canvas.height*.26
this.y = this.y0
this.hp = 3
this.playerImg = new Image()
this.playerImg.src = "images/thump_55500030t212.png"
this.yv = 0.5

this.playerImg.frames = 3
this.playerImg.frameIndex = 0

}


Player.prototype.drawImg = function() {

  this.game.ctx.drawImage(this.playerImg, this.x, this.y, 70, 80)

}


Player.prototype.moveUp = function() {

  

    if(this.y <= this.y2){
      console.log("You cannot go up boy")
    }
    if(this.y <= this.y1 && this.y > this.y2){
      
      
      this.vy = 5
      this.y -= this.vy



    }
    if(this.y <= this.y0 && this.y >= this.y1){
      
      this.vy = 5
      this.y -= this.vy


    }     
}

Player.prototype.moveDown = function() {
  if(this.y === this.y0){
        console.log("You cannot go down boy")
      }
  if(this.y === this.y1){
        this.y = this.y0
      }
  if (this.y === this.y2){
        this.y = this.y1
        
    }
  }

  Player.prototype.setListener = function() {
    document.onkeydown = function() {
  
      if(event.keyCode === this.game.key.arrowUp){

        this.moveUp()

      }
  
      if(event.keyCode === this.game.key.arrowDown){

        this.moveDown()

      }
      
    }.bind(this)
  }




