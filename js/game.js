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
  scoreBoard: undefined,
//=======================================================================================================================================================================
// FUNCIONES DE ARRANQUE  

_reset: function() {
  this.background = new Background(game)
  this.player = new Player(game)
  this.scoreBoard = ScoreBoard
  this.platform = new Platform(game)
  this.finalBoss = new FinalBoss(game, this.player.y2)
  this.enemy1 = []
  this.enemy2 = []
  this.score = 0
  this.framerate = 0
  this.gameMusic = new Audio()
  this.youLoseSound = new Audio()
  this.youWinSound = new Audio()
},
  
start: function() {

    
    this._reset()

    this.gameMusic.src = "sound/gameMusic.mp3"
    this.youLoseSound.src = "sound/youLoseSound.mp3"
    this.youWinSound.src = "sound/youWinSound.mp3"
    this.gameMusic.play()

    this.interval = setInterval(function () {
    this._draw()
    this._moving()
    this.player.setListener()
    this.framerate++
    this.clearEnemy1()
    this.clearEnemy2()
    if (this.playerCollisionFinalBoss()) this._youLose()
    if(this.playerCollisionEnemy1()) this._youLose()
    if(this.playerCollisionEnemy2()) this._youLose()
    this._bulletCollitionEnemy1()
    this._bulletCollitionEnemy2()
    this._bulletCollitionFinalBoss()
    
    if(this.framerate < 5000){
      if(this.framerate > 300) {
        if(this.framerate % 60 === 0) this.generateEnemy1()
        
      }
      if(this.framerate > 900) {
        if(this.framerate % 150 === 0) this.generateEnemy1()
        if(this.framerate % 123 === 0) this.generateEnemy2()
      }

      if(this.framerate > 2000) {
        if(this.framerate % 130 === 0) this.generateEnemy1()
        if(this.framerate % 150 === 0) this.generateEnemy2()
      }

      if(this.framerate > 3500) {
        if(this.framerate %  80 === 0) this.generateEnemy1()
        if(this.framerate % 90 === 0) this.generateEnemy2()
      }
    } else {
      this.finalBoss.drawFinalBossHud()
      if(this.framerate % 25 === 0) this.generateEnemy1()
        

    }
  

  }.bind(this) ,1000/this.fps)

},

_stop: function(){

  clearInterval(this.interval);
},

_youWin: function(){
  this.gameMusic.pause()
  this.youWinSound.play()
  this._stop()
  document.getElementById('win').style.display = 'block'
  
},

_youLose: function() {
  this.gameMusic.pause()
  this.youLoseSound.play()
  this._stop()
  document.getElementById('gameover').style.display = 'block'
},

init: function(id) {

  this.canvas = document.getElementById(id)
  this.ctx = this.canvas.getContext("2d")
  this._setDimensions()
  

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

_moving: function() {
  
  this.background.moveBg()
  this.player.move()
  this.enemy1.forEach(function (enemy1) { enemy1.enemyOneMove() })
  this.enemy2.forEach(function (enemy2) { enemy2.enemyTwoMove() })
  if(this.framerate > 5000) this.finalBoss.finalBossMove()

},

_draw: function() {

  this.background.drawBg()
  this.platform.platformDraw1()
  this.platform.platformDraw2()
  this.player.drawPlayer()
  this.enemy1.forEach(function (enemy1) {enemy1.drawEnemyHtml()})
  this.enemy2.forEach(function (enemy2) {enemy2.drawEnemyJavaScript()})
  this._drawScore()
  this.finalBoss.drawFinalBoss()
},
_drawScore: function() {
  this.scoreBoard.update(this.score, this.ctx)
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
},
  //====================================================================================================================
  // FUNCIONES DE BATALLA
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
  playerCollisionFinalBoss: function() {
    if ((this.player.x + this.player.w -26) >= this.finalBoss.x && this.player.x < (this.finalBoss.x + this.finalBoss.w)) {
      return true
    }
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
              this.score += 100
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
              this.score += 200
              this.player.bulletType.splice(i, 1)
              this.enemy2.splice(a, 1)
            } else {
              this.player.bulletType.splice(i, 1)
            }
          }
       }.bind(this))
    }.bind(this))

  },

  _bulletCollitionFinalBoss: function() {
  
    this.player.bulletType.forEach(function (bullet,i) {
      if ((bullet.x + bullet.w) >= this.finalBoss.x && bullet.x < (this.finalBoss.x + this.finalBoss.w)) {
        if(this.player.typeOfShot === 1){
          this.player.bulletType.splice(i,1)
          this.finalBoss.hp--
          this.finalBoss.drawFinalBossHud()
        } else {
          this.player.bulletType.splice(i,1)
          
        }
      }
    }.bind(this))
  
  }
}
