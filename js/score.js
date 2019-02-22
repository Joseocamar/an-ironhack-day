var ScoreBoard = {
  update: function (score, ctx) {
      ctx.font = "70px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(score, 30, 70);
  }
}