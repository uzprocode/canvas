{
  let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
}


let mainCanvas = document.getElementById('rollAni');
let mcW = mainCanvas.offsetWidth;
let mcH = mainCanvas.offsetHeight;
// let mcW = 300;
// let mcH = 300;
let mainCtx = mainCanvas.getContext('2d');

let leftCanvas = document.createElement('canvas');
leftCanvas.width = 100;
leftCanvas.height = 100;
let leftCtx = leftCanvas.getContext('2d');

leftCtx.save();
leftCtx.fillStyle = 'green';
leftCtx.fillRect(0, 0, 100, 100);
leftCtx.restore();

let deg = 0;
// function clearDraw(){

// }
function aniPlayLoop() {
  console.log(mcW / 2, mcH);

  mainCtx.clearRect(0, 0, mcW, mcH);
  mainCtx.save();
  deg += 0.1;
  mainCtx.translate(mcW / 2, mcH / 2);
  mainCtx.rotate(deg * Math.PI / 180);
  mainCtx.translate(-mcW / 2, -mcH / 2);

  // mainCtx.drawImage(leftCanvas, -leftCanvas.width/2, -leftCanvas.height/2);
  mainCtx.drawImage(leftCanvas, mcW / 2 - leftCanvas.width / 2, mcH / 2 - leftCanvas.height / 2);
  mainCtx.restore();
  // mainCtx.translate(mcW / 2, mcH / 2);
  // mainCtx.rotate(deg * Math.PI / 180 * -1);
  // mainCtx.translate(-mcW / 2, -mcH / 2);
  mainCtx.drawImage(leftCanvas, 0+deg*10+60, 30 * Math.cos(deg * Math.PI)+100);
  mainCtx.restore();
  requestAnimationFrame(aniPlayLoop);
}
aniPlayLoop();
