function Player (game) {

this.game = game
this.x = Math.floor(this.game.canvas.width*.22)
this.y0 = Math.floor(this.game.canvas.height*.8)
this.y1 = Math.floor(this.game.canvas.height*.8-160)
this.y2 = Math.floor(this.game.canvas.height*.8-320)
this.y = this.y0
this.hp = 3
this.playerImg = new Image()
this.playerImg.src = "images/thump_55500030t212.png"
this.yv = undefined

this.playerImg.frames = 3
this.playerImg.frameIndex = 0

}


Player.prototype.drawImg = function() {

  this.game.ctx.drawImage(this.playerImg, this.x, this.y, 70, 80)

}


Player.prototype.moveUp = function() {

    if(this.y <= this.y1 && this.y > this.y2){
        
      this.vy = 170
      this.y -= this.vy


    }  

    if(this.y <= this.y0 && this.y > this.y1){
      
      
      this.vy = 170
      this.y -= this.vy



    }

    if(this.y === this.y2){
      console.log("You cannot go up boy")
    }
      
}

Player.prototype.moveDown = function() {

  if(this.y >= this.y0){
    console.log("You cannot go down boy")
  }
  
  if(this.y >= this.y1 && this.y < this.y0){
    
    
    this.vy = 5
    this.y += this.vy



  }
  if(this.y < this.y1 && this.y >= this.y2){
    
    this.vy = 5
    this.y += this.vy
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

  
Player.prototype.move = function () {
  
  this.vy = 5

  if (this.y < this.y2) {
    

    this.y += this.vy
    console.log(this.y)
    if (this.y2 % this.y === 0) {this.y = this.y2}
    
  }

  if (this.y2 < this.y && this.y1 > this.y) {
    
    this.y += this.vy
    console.log(this.y)
    if (this.y1 % this.y === 0) {this.y = this.y1}
  }

  if (this.y1 < this.y && this.y0 > this.y) {
    
    this.y += this.vy
    console.log(this.y)
    if (this.y0 % this.y === 0) {this.y = this.y0}
  }


}


