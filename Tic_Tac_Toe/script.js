document.addEventListener('DOMContentLoaded', () => {
    // Variables to hold game state
    const board = Array(9).fill(null);
    let currentPlayer = 'X';
    let gameOver = false;

    // DOM elements
    const gameBoard = document.getElementById('gameBoard');
    const resetBtn = document.getElementById('resetBtn');

    // Initialize the game board
    function initBoard() {
        for (let i = 0; i < board.length; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => onCellClick(i));
            gameBoard.appendChild(cell);
        }
    }

    // Handle cell click event
    function onCellClick(index) {
        // Ignore the click if the cell is already occupied or the game is over
        if (board[index] !== null || gameOver) return;

        board[index] = currentPlayer;
        gameBoard.children[index].textContent = currentPlayer;

        // Check if the current player has won
        if (checkWin(currentPlayer)) {
            alert(`${currentPlayer} wins!`);
            gameOver = true;
            return;
        }

        // Check for a draw
        if (board.every(cell => cell !== null)) {
            alert('It\'s a draw!');
            gameOver = true;
            return;
        }

        // Switch to the other player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    // Check if the player has won
    function checkWin(player) {
        // Winning combinations
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

        // Iterate through the winning combinations to check for a win
        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (board[a] === player && board[b] === player && board[c] === player) {
                return true;
            }
        }

        return false;
    }

    // Reset the game state
    function resetGame() {
        board.fill(null);
        currentPlayer = 'X';
        gameOver = false;

        // Clear the game board display
        for (const cell of gameBoard.children) {
            cell.textContent = '';
        }
    }

    // Attach reset button event listener
    resetBtn.addEventListener('click', resetGame);

    // Initialize the game board
    initBoard();
});
