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
  init: function(id) {

    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext("2d")
    this._setDimensions()
    this.background = new Background(game)
    this.player = new Player(game)
    
    
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
  start: function() {
  
    this.interval = setInterval(function () {
      this._draw()
      this._moving()
      this.player.setListener()

    }.bind(this) ,1000/this.fps)

  },
  _moving: function() {
    
    this.background.moveBg()
    
  
  },

  _draw: function() {
  
    this.background.drawBg()
    this.player.drawImg()
  }



}
