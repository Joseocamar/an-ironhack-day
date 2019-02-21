var game = {
  canvas: undefined,
  ctx: undefined,
  w: undefined,
  h: undefined,
  fps: 60,
  posX: undefined,
  posY: undefined,
  key: {
    space: 32,
    c: 67,
    arrowUp: 38,
    arrowDown: 40,
  },
  framerate: 0,
  randomNumber: 0,
  randomPosY: 0,
  init: function(id) {

    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext("2d")
    this._setDimensions()
    this.background = new Background(game)
    this.player = new Player(game)
    this.platform = new Platform(game)
    this.enemy1 = []
    this.enemy2 = []
    
    
    
    this.start()
  
  },
  _setDimensions: function() {
  
    this.w = window.innerWidth
    this.h = window.innerHeight
    this.canvas.setAttribute("width", this.w)
    this.canvas.setAttribute("height", this.h)
    this._setHandler()
  
  },
  _setHandler: function() {

    window.onresize = function () {
      this._setDimensions()
    }.bind(this)
  
  
  },
  playerCollisionEnemy1: function() {
    return this.enemy1.some(function (enemy1) {
      return (
        ((this.player.x + this.player.w - 26) >= enemy1.x &&
          this.player.x < (enemy1.x + enemy1.w) &&
          this.player.y === enemy1.y)
      );
    }.bind(this));
  },
  playerCollisionEnemy2: function() {
    return this.enemy2.some(function (enemy2) {
      return (
        ((this.player.x + this.player.w - 26) >= enemy2.x &&
          this.player.x < (enemy2.x + enemy2.w) &&
          this.player.y === enemy2.y)
      );
    }.bind(this));
  },
  clearEnemy1: function() {
    this.enemy1 = this.enemy1.filter(function (enemy1) {
      return enemy1.x >= 0
  })
},
  clearEnemy2: function() {
    this.enemy2 = this.enemy2.filter(function (enemy2) {
      return enemy2.x >= 0
  })
  },
  generateEnemy1: function() {
    this.enemy1.push(new EnemyHtml(game, this._randomPosY()))
  },
  generateEnemy2: function() {
    this.enemy2.push(new EnemyJavaScript(game, this._randomPosY()))
  },
  _bulletCollitionEnemy1: function() {
    
     
    this.player.bulletType.forEach(function (bullet, i) {
       this.enemy1.forEach(function (enemy, a){
        if ((bullet.x + bullet.w) >= enemy.x &&
          bullet.x < (enemy.x + enemy.w) &&
          bullet.y === enemy.y + 40) {
            
            if(this.player.typeOfShot === 0){
            this.player.bulletType.splice(i, 1)
            this.enemy1.splice(a, 1)
            } else {
              this.player.bulletType.splice(i, 1)
            }
          }
       }.bind(this))
    }.bind(this))

  },
  _bulletCollitionEnemy2: function() {
  
    this.player.bulletType.forEach(function (bullet, i) {
       this.enemy2.forEach(function (enemy, a){
        if ((bullet.x + bullet.w) >= enemy.x &&
          bullet.x < (enemy.x + enemy.w) &&
          bullet.y === enemy.y + 40) {
      
            if(this.player.typeOfShot === 1){
            this.player.bulletType.splice(i, 1)
            this.enemy2.splice(a, 1)
            } else {
              this.player.bulletType.splice(i, 1)
            }
          }
       }.bind(this))
    }.bind(this))

    
  },

  start: function() {
  
    this.interval = setInterval(function () {
      this._draw()
      this._moving()
      this.player.setListener()
      this.framerate++
      this.clearEnemy1()
      this.clearEnemy2()
      if(this.playerCollisionEnemy1()) {
        console.log('Te chingaron Wey')}
      if(this.playerCollisionEnemy2()){
        console.log('Te rechingaron Weon')}
      this._bulletCollitionEnemy1()
      this._bulletCollitionEnemy2()
      

      if(this.framerate > 300) {
        if(this.framerate % 60 === 0) this.generateEnemy1()
       if(this.framerate % 40 === 0) this.generateEnemy2()
        
      }

     //if(this.framerate > 6000) this.framerate--
      
  
      if(this.framerate > 9000) this.framerate = 0 

    }.bind(this) ,1000/this.fps)

  },
  _moving: function() {
    
    this.background.moveBg()
    this.player.move()
    this.enemy1.forEach(function (enemy1) { enemy1.enemyOneMove() })
    this.enemy2.forEach(function (enemy2) { enemy2.enemyTwoMove() })
  
  },

  _draw: function() {
  
    this.background.drawBg()
    this.platform.platformDraw1()
    this.platform.platformDraw2()
    this.player.drawPlayer()
    this.enemy1.forEach(function (enemy1) {enemy1.drawEnemyHtml()})
    this.enemy2.forEach(function (enemy2) {enemy2.drawEnemyJavaScript()})
  },

  _randomNumberThree: function() {

    this.randomNumber = Math.floor(Math.random()*3)
    return this.randomNumber

  },

  _randomPosY: function () {
    if (this._randomNumberThree() === 0) {
        this.randomPosY = this.player.y0
        return this.randomPosY
    } else if (this._randomNumberThree() === 1) {
        this.randomPosY = this.player.y1
        return this.randomPosY
    } else {
        this.randomPosY = this.player.y2
        return this.randomPosY
    }
  }

}
