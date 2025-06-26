// script.js
const board = document.getElementById('gameBoard');
const width = 28;
const layout = [
  // 0 = pac-dot, 1 = wall, 2 = ghost-lair, 3 = power-pellet, 4 = empty
  // Linha exemplo (deve ser 28 * 31 = 868 elementos no total)
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  // (...adicione o restante do layout real aqui...)
];

const cells = [];
let pacmanIndex = 490;
let score = 0;

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    switch (layout[i]) {
      case 0:
        cell.classList.add('pac-dot');
        break;
      case 1:
        cell.classList.add('wall');
        break;
      case 3:
        cell.classList.add('power-pellet');
        break;
    }
    board.appendChild(cell);
    cells.push(cell);
  }
}

function drawPacman() {
  cells[pacmanIndex].classList.add('pacman');
}

function movePacman(e) {
  cells[pacmanIndex].classList.remove('pacman');
  switch (e.key) {
    case 'ArrowUp':
      if (!cells[pacmanIndex - width].classList.contains('wall')) pacmanIndex -= width;
      break;
    case 'ArrowDown':
      if (!cells[pacmanIndex + width].classList.contains('wall')) pacmanIndex += width;
      break;
    case 'ArrowLeft':
      if (!cells[pacmanIndex - 1].classList.contains('wall')) pacmanIndex -= 1;
      break;
    case 'ArrowRight':
      if (!cells[pacmanIndex + 1].classList.contains('wall')) pacmanIndex += 1;
      break;
  }
  eatDot();
  drawPacman();
}

function eatDot() {
  if (cells[pacmanIndex].classList.contains('pac-dot')) {
    cells[pacmanIndex].classList.remove('pac-dot');
    score++;
    document.getElementById('score').textContent = `Pontos: ${score}`;
  }
}

createBoard();
drawPacman();
document.addEventListener('keydown', movePacman);

// Fantasmas e movimentação seriam adicionados aqui com IA semelhante ao original
