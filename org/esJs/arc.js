{
  let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
}


let mainCanvas = document.getElementById('arcAni');
let mcW = mainCanvas.offsetWidth;
let mcH = mainCanvas.offsetHeight;
// let mcW = 300;
// let mcH = 300;
let mainCtx = mainCanvas.getContext('2d');

function createCube(width, height, color) {
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  let tCtx = tempCanvas.getContext('2d');
  tCtx.save();
  tCtx.fillStyle = color;
  tCtx.fillRect(0, 0, width, height);
  tCtx.restore();
  return tempCanvas;
}

let greenbox = createCube(300, 400, 'blue');
let redbox = createCube(300, 400, 'red');



let deg = 0;
// function clearDraw(){

// }
mainCtx.save();

function aniPlayLoop() {
  console.log(mcW / 2, mcH);
  //clearD
  mainCtx.clearRect(0, 0, mcW, mcH);

  mainCtx.save();
  mainCtx.filter = 'blur(10px)';
  deg += 0.1;
  mainCtx.translate(mcW / 2, mcH / 2);
  mainCtx.rotate(deg * Math.PI / 180);
  mainCtx.translate(-mcW / 2, -mcH / 2);
  // mainCtx.drawImage(leftCanvas, -leftCanvas.width/2, -leftCanvas.height/2);
  mainCtx.drawImage(greenbox, mcW / 2 - greenbox.width / 2, mcH / 2 - greenbox.height / 2);
  mainCtx.restore();


  mainCtx.save();
  mainCtx.filter = 'blur(0px)';
  mainCtx.globalCompositeOperation = 'source-in';
  // mainCtx.globalCompositeOperation = 'destination-atop';
  // mainCtx.globalCompositeOperation = 'destination-out';
  // mainCtx.globalCompositeOperation = 'destination-in';
  // mainCtx.globalCompositeOperation = 'xor';
  // mainCtx.globalCompositeOperation = 'xor';
  // mainCtx.translate(mcW / 2, mcH / 2);
  // mainCtx.rotate(deg * Math.PI / 180 * -1);
  // mainCtx.translate(-mcW / 2, -mcH / 2);
  // mainCtx.drawImage(redbox, mcW / 2 - greenbox.width / 2, mcH / 2 - greenbox.height / 2);
  mainCtx.drawImage(redbox, 0 + deg * 10 + 60, 30 * Math.cos(deg * Math.PI) + mcH / 2 - redbox.height / 2);
  mainCtx.restore();

  mainCtx.save();
  mainCtx.globalCompositeOperation = '';
  mainCtx.drawImage(redbox, 0, 0, 10, 10);
  mainCtx.drawImage(redbox, 100, 100, 40, 40);
  mainCtx.drawImage(redbox, 300, 300, 10, 10);
  mainCtx.drawImage(greenbox, 500, 400, 100, 100);
  mainCtx.beginPath();
  mainCtx.moveTo(188, 130);
  mainCtx.bezierCurveTo(140, 10, 388, 10, 388, 170);
  mainCtx.lineWidth = 10;

  // line color
  mainCtx.strokeStyle = 'black';
  mainCtx.stroke();
  mainCtx.restore();
  requestAnimationFrame(aniPlayLoop);
}
aniPlayLoop();
