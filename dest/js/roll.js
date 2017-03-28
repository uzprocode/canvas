(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var mainCanvas = document.getElementById('rollAni');
var mainCtx = mainCanvas.getContext('2d');

var leftCanvas = document.createElement('canvas');
var leftCtx = leftCanvas.getContext('2d');
mainCtx.save();
mainCtx.fillStyle = 'green';
mainCtx.fillRect(10, 10, 100, 100);
mainCtx.restore();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjRkNGQ2YTMuanMiXSwibmFtZXMiOlsibWFpbkNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYWluQ3R4IiwiZ2V0Q29udGV4dCIsImxlZnRDYW52YXMiLCJjcmVhdGVFbGVtZW50IiwibGVmdEN0eCIsInNhdmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlc3RvcmUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYUMsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixDQUFqQjtBQUNBLElBQUlDLFVBQVVILFdBQVdJLFVBQVgsQ0FBc0IsSUFBdEIsQ0FBZDs7QUFFQSxJQUFJQyxhQUFhSixTQUFTSyxhQUFULENBQXVCLFFBQXZCLENBQWpCO0FBQ0EsSUFBSUMsVUFBVUYsV0FBV0QsVUFBWCxDQUFzQixJQUF0QixDQUFkO0FBQ0FELFFBQVFLLElBQVI7QUFDQUwsUUFBUU0sU0FBUixHQUFvQixPQUFwQjtBQUNBTixRQUFRTyxRQUFSLENBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCO0FBQ0FQLFFBQVFRLE9BQVIiLCJmaWxlIjoiZmFrZV9mNGQ0ZDZhMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBtYWluQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvbGxBbmknKTtcbmxldCBtYWluQ3R4ID0gbWFpbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQgbGVmdENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xubGV0IGxlZnRDdHggPSBsZWZ0Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5tYWluQ3R4LnNhdmUoKTtcbm1haW5DdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbm1haW5DdHguZmlsbFJlY3QoMTAsIDEwLCAxMDAsIDEwMCk7XG5tYWluQ3R4LnJlc3RvcmUoKTtcbiJdfQ==
},{}]},{},[1])