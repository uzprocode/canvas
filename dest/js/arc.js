(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

{
  var _requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = _requestAnimationFrame;
}

var mainCanvas = document.getElementById('arcAni');
var mcW = mainCanvas.offsetWidth;
var mcH = mainCanvas.offsetHeight;
// let mcW = 300;
// let mcH = 300;
var mainCtx = mainCanvas.getContext('2d');

function createCube(width, height, color) {
  var tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  var tCtx = tempCanvas.getContext('2d');
  tCtx.save();
  tCtx.fillStyle = color;
  tCtx.fillRect(0, 0, width, height);
  tCtx.restore();
  return tempCanvas;
}

var greenbox = createCube(300, 400, 'blue');
var redbox = createCube(300, 400, 'red');

var deg = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDZhODA1NGEuanMiXSwibmFtZXMiOlsicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtYWluQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1jVyIsIm9mZnNldFdpZHRoIiwibWNIIiwib2Zmc2V0SGVpZ2h0IiwibWFpbkN0eCIsImdldENvbnRleHQiLCJjcmVhdGVDdWJlIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsInRlbXBDYW52YXMiLCJjcmVhdGVFbGVtZW50IiwidEN0eCIsInNhdmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlc3RvcmUiLCJncmVlbmJveCIsInJlZGJveCIsImRlZyIsImFuaVBsYXlMb29wIiwiY29uc29sZSIsImxvZyIsImNsZWFyUmVjdCIsImZpbHRlciIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImNvcyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImJlemllckN1cnZlVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNFLE1BQUlBLHlCQUF3QkMsT0FBT0QscUJBQVAsSUFBZ0NDLE9BQU9DLHdCQUF2QyxJQUMxQkQsT0FBT0UsMkJBRG1CLElBQ1lGLE9BQU9HLHVCQUQvQztBQUVBSCxTQUFPRCxxQkFBUCxHQUErQkEsc0JBQS9CO0FBQ0Q7O0FBR0QsSUFBSUssYUFBYUMsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFqQjtBQUNBLElBQUlDLE1BQU1ILFdBQVdJLFdBQXJCO0FBQ0EsSUFBSUMsTUFBTUwsV0FBV00sWUFBckI7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsVUFBVVAsV0FBV1EsVUFBWCxDQUFzQixJQUF0QixDQUFkOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDeEMsTUFBSUMsYUFBYVosU0FBU2EsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBRCxhQUFXSCxLQUFYLEdBQW1CQSxLQUFuQjtBQUNBRyxhQUFXRixNQUFYLEdBQW9CQSxNQUFwQjtBQUNBLE1BQUlJLE9BQU9GLFdBQVdMLFVBQVgsQ0FBc0IsSUFBdEIsQ0FBWDtBQUNBTyxPQUFLQyxJQUFMO0FBQ0FELE9BQUtFLFNBQUwsR0FBaUJMLEtBQWpCO0FBQ0FHLE9BQUtHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CUixLQUFwQixFQUEyQkMsTUFBM0I7QUFDQUksT0FBS0ksT0FBTDtBQUNBLFNBQU9OLFVBQVA7QUFDRDs7QUFFRCxJQUFJTyxXQUFXWCxXQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsTUFBckIsQ0FBZjtBQUNBLElBQUlZLFNBQVNaLFdBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixLQUFyQixDQUFiOztBQUlBLElBQUlhLE1BQU0sQ0FBVjtBQUNBOztBQUVBO0FBQ0FmLFFBQVFTLElBQVI7O0FBRUEsU0FBU08sV0FBVCxHQUF1QjtBQUNyQkMsVUFBUUMsR0FBUixDQUFZdEIsTUFBTSxDQUFsQixFQUFxQkUsR0FBckI7QUFDQTtBQUNBRSxVQUFRbUIsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QnZCLEdBQXhCLEVBQTZCRSxHQUE3Qjs7QUFFQUUsVUFBUVMsSUFBUjtBQUNBVCxVQUFRb0IsTUFBUixHQUFpQixZQUFqQjtBQUNBTCxTQUFPLEdBQVA7QUFDQWYsVUFBUXFCLFNBQVIsQ0FBa0J6QixNQUFNLENBQXhCLEVBQTJCRSxNQUFNLENBQWpDO0FBQ0FFLFVBQVFzQixNQUFSLENBQWVQLE1BQU1RLEtBQUtDLEVBQVgsR0FBZ0IsR0FBL0I7QUFDQXhCLFVBQVFxQixTQUFSLENBQWtCLENBQUN6QixHQUFELEdBQU8sQ0FBekIsRUFBNEIsQ0FBQ0UsR0FBRCxHQUFPLENBQW5DO0FBQ0E7QUFDQUUsVUFBUXlCLFNBQVIsQ0FBa0JaLFFBQWxCLEVBQTRCakIsTUFBTSxDQUFOLEdBQVVpQixTQUFTVixLQUFULEdBQWlCLENBQXZELEVBQTBETCxNQUFNLENBQU4sR0FBVWUsU0FBU1QsTUFBVCxHQUFrQixDQUF0RjtBQUNBSixVQUFRWSxPQUFSOztBQUdBWixVQUFRUyxJQUFSO0FBQ0FULFVBQVFvQixNQUFSLEdBQWlCLFdBQWpCO0FBQ0FwQixVQUFRMEIsd0JBQVIsR0FBbUMsV0FBbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTFCLFVBQVF5QixTQUFSLENBQWtCWCxNQUFsQixFQUEwQixJQUFJQyxNQUFNLEVBQVYsR0FBZSxFQUF6QyxFQUE2QyxLQUFLUSxLQUFLSSxHQUFMLENBQVNaLE1BQU1RLEtBQUtDLEVBQXBCLENBQUwsR0FBK0IxQixNQUFNLENBQXJDLEdBQXlDZ0IsT0FBT1YsTUFBUCxHQUFnQixDQUF0RztBQUNBSixVQUFRWSxPQUFSOztBQUVBWixVQUFRUyxJQUFSO0FBQ0FULFVBQVEwQix3QkFBUixHQUFtQyxFQUFuQztBQUNBMUIsVUFBUXlCLFNBQVIsQ0FBa0JYLE1BQWxCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDO0FBQ0FkLFVBQVF5QixTQUFSLENBQWtCWCxNQUFsQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxFQUFwQyxFQUF3QyxFQUF4QztBQUNBZCxVQUFReUIsU0FBUixDQUFrQlgsTUFBbEIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsRUFBcEMsRUFBd0MsRUFBeEM7QUFDQWQsVUFBUXlCLFNBQVIsQ0FBa0JaLFFBQWxCLEVBQTRCLEdBQTVCLEVBQWlDLEdBQWpDLEVBQXNDLEdBQXRDLEVBQTJDLEdBQTNDO0FBQ0FiLFVBQVE0QixTQUFSO0FBQ0E1QixVQUFRNkIsTUFBUixDQUFlLEdBQWYsRUFBb0IsR0FBcEI7QUFDQTdCLFVBQVE4QixhQUFSLENBQXNCLEdBQXRCLEVBQTJCLEVBQTNCLEVBQStCLEdBQS9CLEVBQW9DLEVBQXBDLEVBQXdDLEdBQXhDLEVBQTZDLEdBQTdDO0FBQ0E5QixVQUFRK0IsU0FBUixHQUFvQixFQUFwQjs7QUFFQTtBQUNBL0IsVUFBUWdDLFdBQVIsR0FBc0IsT0FBdEI7QUFDQWhDLFVBQVFpQyxNQUFSO0FBQ0FqQyxVQUFRWSxPQUFSO0FBQ0F4Qix3QkFBc0I0QixXQUF0QjtBQUNEO0FBQ0RBIiwiZmlsZSI6ImZha2VfNDZhODA1NGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIGxldCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbn1cblxuXG5sZXQgbWFpbkNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcmNBbmknKTtcbmxldCBtY1cgPSBtYWluQ2FudmFzLm9mZnNldFdpZHRoO1xubGV0IG1jSCA9IG1haW5DYW52YXMub2Zmc2V0SGVpZ2h0O1xuLy8gbGV0IG1jVyA9IDMwMDtcbi8vIGxldCBtY0ggPSAzMDA7XG5sZXQgbWFpbkN0eCA9IG1haW5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuZnVuY3Rpb24gY3JlYXRlQ3ViZSh3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICBsZXQgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICB0ZW1wQ2FudmFzLndpZHRoID0gd2lkdGg7XG4gIHRlbXBDYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBsZXQgdEN0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgdEN0eC5zYXZlKCk7XG4gIHRDdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHRDdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIHRDdHgucmVzdG9yZSgpO1xuICByZXR1cm4gdGVtcENhbnZhcztcbn1cblxubGV0IGdyZWVuYm94ID0gY3JlYXRlQ3ViZSgzMDAsIDQwMCwgJ2JsdWUnKTtcbmxldCByZWRib3ggPSBjcmVhdGVDdWJlKDMwMCwgNDAwLCAncmVkJyk7XG5cblxuXG5sZXQgZGVnID0gMDtcbi8vIGZ1bmN0aW9uIGNsZWFyRHJhdygpe1xuXG4vLyB9XG5tYWluQ3R4LnNhdmUoKTtcblxuZnVuY3Rpb24gYW5pUGxheUxvb3AoKSB7XG4gIGNvbnNvbGUubG9nKG1jVyAvIDIsIG1jSCk7XG4gIC8vY2xlYXJEXGJcbiAgbWFpbkN0eC5jbGVhclJlY3QoMCwgMCwgbWNXLCBtY0gpO1xuXG4gIG1haW5DdHguc2F2ZSgpO1xuICBtYWluQ3R4LmZpbHRlciA9ICdibHVyKDEwcHgpJztcbiAgZGVnICs9IDAuMTtcbiAgbWFpbkN0eC50cmFuc2xhdGUobWNXIC8gMiwgbWNIIC8gMik7XG4gIG1haW5DdHgucm90YXRlKGRlZyAqIE1hdGguUEkgLyAxODApO1xuICBtYWluQ3R4LnRyYW5zbGF0ZSgtbWNXIC8gMiwgLW1jSCAvIDIpO1xuICAvLyBtYWluQ3R4LmRyYXdJbWFnZShsZWZ0Q2FudmFzLCAtbGVmdENhbnZhcy53aWR0aC8yLCAtbGVmdENhbnZhcy5oZWlnaHQvMik7XG4gIG1haW5DdHguZHJhd0ltYWdlKGdyZWVuYm94LCBtY1cgLyAyIC0gZ3JlZW5ib3gud2lkdGggLyAyLCBtY0ggLyAyIC0gZ3JlZW5ib3guaGVpZ2h0IC8gMik7XG4gIG1haW5DdHgucmVzdG9yZSgpO1xuXG5cbiAgbWFpbkN0eC5zYXZlKCk7XG4gIG1haW5DdHguZmlsdGVyID0gJ2JsdXIoMHB4KSc7XG4gIG1haW5DdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gIC8vIG1haW5DdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWF0b3AnO1xuICAvLyBtYWluQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xuICAvLyBtYWluQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gIC8vIG1haW5DdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3hvcic7XG4gIC8vIG1haW5DdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3hvcic7XG4gIC8vIG1haW5DdHgudHJhbnNsYXRlKG1jVyAvIDIsIG1jSCAvIDIpO1xuICAvLyBtYWluQ3R4LnJvdGF0ZShkZWcgKiBNYXRoLlBJIC8gMTgwICogLTEpO1xuICAvLyBtYWluQ3R4LnRyYW5zbGF0ZSgtbWNXIC8gMiwgLW1jSCAvIDIpO1xuICAvLyBtYWluQ3R4LmRyYXdJbWFnZShyZWRib3gsIG1jVyAvIDIgLSBncmVlbmJveC53aWR0aCAvIDIsIG1jSCAvIDIgLSBncmVlbmJveC5oZWlnaHQgLyAyKTtcbiAgbWFpbkN0eC5kcmF3SW1hZ2UocmVkYm94LCAwICsgZGVnICogMTAgKyA2MCwgMzAgKiBNYXRoLmNvcyhkZWcgKiBNYXRoLlBJKSArIG1jSCAvIDIgLSByZWRib3guaGVpZ2h0IC8gMik7XG4gIG1haW5DdHgucmVzdG9yZSgpO1xuXG4gIG1haW5DdHguc2F2ZSgpO1xuICBtYWluQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICcnO1xuICBtYWluQ3R4LmRyYXdJbWFnZShyZWRib3gsIDAsIDAsIDEwLCAxMCk7XG4gIG1haW5DdHguZHJhd0ltYWdlKHJlZGJveCwgMTAwLCAxMDAsIDQwLCA0MCk7XG4gIG1haW5DdHguZHJhd0ltYWdlKHJlZGJveCwgMzAwLCAzMDAsIDEwLCAxMCk7XG4gIG1haW5DdHguZHJhd0ltYWdlKGdyZWVuYm94LCA1MDAsIDQwMCwgMTAwLCAxMDApO1xuICBtYWluQ3R4LmJlZ2luUGF0aCgpO1xuICBtYWluQ3R4Lm1vdmVUbygxODgsIDEzMCk7XG4gIG1haW5DdHguYmV6aWVyQ3VydmVUbygxNDAsIDEwLCAzODgsIDEwLCAzODgsIDE3MCk7XG4gIG1haW5DdHgubGluZVdpZHRoID0gMTA7XG5cbiAgLy8gbGluZSBjb2xvclxuICBtYWluQ3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcbiAgbWFpbkN0eC5zdHJva2UoKTtcbiAgbWFpbkN0eC5yZXN0b3JlKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmlQbGF5TG9vcCk7XG59XG5hbmlQbGF5TG9vcCgpO1xuIl19
},{}]},{},[1])