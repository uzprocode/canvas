let mainCanvas = document.getElementById('rollAni');
let mainCtx = mainCanvas.getContext('2d');

let leftCanvas = document.createElement('canvas');
let leftCtx = leftCanvas.getContext('2d');
mainCtx.save();
mainCtx.fillStyle = 'green';
mainCtx.fillRect(10, 10, 100, 100);
mainCtx.restore();
