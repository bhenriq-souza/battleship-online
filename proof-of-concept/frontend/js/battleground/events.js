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