// Get the game board element from the HTML.
const gameBoard = document.getElementById("gameBoard");

// Create the game board cells.
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = i;
  cell.addEventListener("click", handleCellClick);
  gameBoard.appendChild(cell);
}

// Set the initial state of the game.
let currentPlayer = "X";
let gameOver = false;
let selectedSquares = new Array(9).fill(null);

// Handle clicks on the game board cells.
function handleCellClick(event) {
  const cell = event.target;
  const index = parseInt(cell.id);

  // Only allow clicks on empty cells when the game is not over.
  if (selectedSquares[index] === null && !gameOver) {
    cell.textContent = currentPlayer;
    selectedSquares[index] = currentPlayer;

    // Check for win or tie conditions.
    if (checkWin(currentPlayer)) {
      alert(`${currentPlayer} wins!`);
      gameOver = true;
    } else if (selectedSquares.every(square => square !== null)) {
      alert("It's a tie!");
      gameOver = true;
    } else {
      // Switch to the other player.
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

// Check if the specified player has won the game.
function checkWin(player) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winConditions.some(condition => {
    return condition.every(index => selectedSquares[index] === player);
  });
}

// Reset the game board and state.
document.getElementById("resetBtn").addEventListener("click", () => {
  currentPlayer = "X";
  gameOver = false;
  selectedSquares = new Array(9).fill(null);

  for (let i = 0; i < 9; i++) {
    const cell = document.getElementById(String(i));
    cell.textContent = "";
  }
});
