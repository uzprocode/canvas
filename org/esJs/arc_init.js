const _ = require('lodash');

{
  let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
}


let mainCanvas = document.getElementById('canvasAni');
let mcW = mainCanvas.offsetWidth;
let mcH = mainCanvas.offsetHeight;
let mainCtx = mainCanvas.getContext('2d');

//infiniteCircle
function infiniteCircle() {
  this.opt = {
    x: 1,
    y: 2
  };
  this.canvas = document.createElement('canvas');
}
//
{
  let ic = infiniteCircle;
  ic.prototype.init = function (opt) {
    this.opt = _.merge({}, this.opt, opt);
    console.log('init', opt);
  };
  ic.prototype.draw = function () {
    console.log('draw', this.opt);
  }
}

let a = new infiniteCircle();
a.init({
  tag: 123
});

a.draw();

let b = new infiniteCircle();
b.init({
  tag: 'b12',
  x: 100
});
b.draw();


//
let offset = 0;
mainCtx.save();

function aniPlayLoop() {
  // console.log(mcW / 2, mcH);
  offset = offset + 1;
  //clearD
  mainCtx.clearRect(0, 0, mcW, mcH);
  mainCtx.save();
  mainCtx.beginPath();
  mainCtx.lineWidth = 1;
  mainCtx.strokeStyle = '#ffcc00';
  mainCtx.arc(70, 75, 60, Math.PI * 0.3, Math.PI * 1.7, false);
  mainCtx.arc(260, 75, 60, Math.PI * 0.7, Math.PI * 1.3, true);
  mainCtx.closePath();
  mainCtx.stroke();
  mainCtx.restore();

  mainCtx.save();
  mainCtx.beginPath();
  mainCtx.setLineDash([160, 320]);
  mainCtx.lineDashOffset = offset;
  mainCtx.lineWidth = 20;
  mainCtx.lineCap = "round";
  mainCtx.strokeStyle = '#ccc';
  mainCtx.arc(70, 75, 60, Math.PI * 0.3, Math.PI * 1.7, false);
  mainCtx.arc(260, 75, 60, Math.PI * 0.7, Math.PI * 1.3, true);
  mainCtx.lineTo(100, 35);
  // mainCtx.closePath();
  mainCtx.stroke();
  mainCtx.restore();

  requestAnimationFrame(aniPlayLoop);
}
aniPlayLoop();
