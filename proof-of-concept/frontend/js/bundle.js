(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { ROWS, CELLS } = require('./constants');
const { onCellClickHandler, onCellMouseEnter } = require('./events');

function buildBattleground() {
    const battleground = document.getElementById('battleground');

    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
        const row = document.createElement('tr');
      
        for (let cellIndex = 0; cellIndex < CELLS; cellIndex++) {
          const id = `${rowIndex}-${cellIndex}`;
          const cell = document.createElement('td');
          cell.setAttribute('id', id);
          const content = document.createElement('div');
          content.classList.add('content');
          const textContent = document.createTextNode(id);
          content.appendChild(textContent);
      
          // adds event listner to the cells
          content.addEventListener('click', onCellClickHandler);
          content.addEventListener('mousedown', onCellMouseEnter);
      
          cell.appendChild(content);
          row.appendChild(cell);
        }
      
        battleground.appendChild(row);
    }
}

module.exports = {
    buildBattleground
};
},{"./constants":2,"./events":3}],2:[function(require,module,exports){
exports.ROWS = 10;
exports.CELLS = 10;
},{}],3:[function(require,module,exports){
function onCellClickHandler(event) {
  console.log(event);
  const cellId = event.srcElement.innerText;
  const selectedCell = document.getElementById(cellId);
  selectedCell.classList.add('selectedCell');
}

function onCellMouseEnter(event) {
  event.target.style.backgroundColor = 'red';
}

function onMouseUpHandler(event) {

}

function onMouseDownHandler(event) {
  const cellId = event.srcElement.innerText;
  const selectedCell = document.getElementById(cellId);
  selectedCell.classList.add('selectedCell');
}

module.exports = {
  onCellClickHandler,
  onCellMouseEnter,
  onMouseDownHandler
};
},{}],4:[function(require,module,exports){
const { buildBattleground } = require('./build');

module.exports = {
  buildBattleground
};
},{"./build":1}],5:[function(require,module,exports){
const { buildBattleground } = require('./battleground');

buildBattleground();
},{"./battleground":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MTIuMTEuMC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iYXR0bGVncm91bmQvYnVpbGQuanMiLCJqcy9iYXR0bGVncm91bmQvY29uc3RhbnRzLmpzIiwianMvYmF0dGxlZ3JvdW5kL2V2ZW50cy5qcyIsImpzL2JhdHRsZWdyb3VuZC9pbmRleC5qcyIsImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgeyBST1dTLCBDRUxMUyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHsgb25DZWxsQ2xpY2tIYW5kbGVyLCBvbkNlbGxNb3VzZUVudGVyIH0gPSByZXF1aXJlKCcuL2V2ZW50cycpO1xuXG5mdW5jdGlvbiBidWlsZEJhdHRsZWdyb3VuZCgpIHtcbiAgICBjb25zdCBiYXR0bGVncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlZ3JvdW5kJyk7XG5cbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgUk9XUzsgcm93SW5kZXgrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgXG4gICAgICAgIGZvciAobGV0IGNlbGxJbmRleCA9IDA7IGNlbGxJbmRleCA8IENFTExTOyBjZWxsSW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGlkID0gYCR7cm93SW5kZXh9LSR7Y2VsbEluZGV4fWA7XG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlkKTtcbiAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHRDb250ZW50KTtcbiAgICAgIFxuICAgICAgICAgIC8vIGFkZHMgZXZlbnQgbGlzdG5lciB0byB0aGUgY2VsbHNcbiAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DZWxsQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uQ2VsbE1vdXNlRW50ZXIpO1xuICAgICAgXG4gICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBiYXR0bGVncm91bmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGJ1aWxkQmF0dGxlZ3JvdW5kXG59OyIsImV4cG9ydHMuUk9XUyA9IDEwO1xuZXhwb3J0cy5DRUxMUyA9IDEwOyIsImZ1bmN0aW9uIG9uQ2VsbENsaWNrSGFuZGxlcihldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudCk7XG4gIGNvbnN0IGNlbGxJZCA9IGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJUZXh0O1xuICBjb25zdCBzZWxlY3RlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsSWQpO1xuICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDZWxsJyk7XG59XG5cbmZ1bmN0aW9uIG9uQ2VsbE1vdXNlRW50ZXIoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlVXBIYW5kbGVyKGV2ZW50KSB7XG5cbn1cblxuZnVuY3Rpb24gb25Nb3VzZURvd25IYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IGNlbGxJZCA9IGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJUZXh0O1xuICBjb25zdCBzZWxlY3RlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsSWQpO1xuICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDZWxsJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbkNlbGxDbGlja0hhbmRsZXIsXG4gIG9uQ2VsbE1vdXNlRW50ZXIsXG4gIG9uTW91c2VEb3duSGFuZGxlclxufTsiLCJjb25zdCB7IGJ1aWxkQmF0dGxlZ3JvdW5kIH0gPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBidWlsZEJhdHRsZWdyb3VuZFxufTsiLCJjb25zdCB7IGJ1aWxkQmF0dGxlZ3JvdW5kIH0gPSByZXF1aXJlKCcuL2JhdHRsZWdyb3VuZCcpO1xuXG5idWlsZEJhdHRsZWdyb3VuZCgpOyJdfQ==
