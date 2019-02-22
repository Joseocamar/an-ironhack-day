window.onload = function() {
  
  game.init("videojuego")

  var menuMusic = document.getElementById('iframeAudio')
  var fatherMusic = document.getElementById('center')
  
  
  
  var start = document.getElementsByClassName('start')[0]
  var div = document.getElementById('menu')
  
  console.log(menuMusic)
  console.log(fatherMusic)
  start.onclick = function() {
    fatherMusic.removeChild(menuMusic)
    div.style.display = "none"
    game.start()
  }
};



