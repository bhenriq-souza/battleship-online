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