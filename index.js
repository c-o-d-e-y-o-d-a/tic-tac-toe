const cell = (DomPointer) => {
    let ifCellIsMarked = false;
    let cellContent = " ";
    
    const changeCellContent = (content) => {
        cellContent = content;
        ifCellIsMarked = true;
    };

    return { ifCellIsMarked, cellContent, changeCellContent };
};

const GameBoard = (DomOfGameBoard) => {
    let isGameOver = false;
    let cellStorage = [];

    for (let i = 0; i < 9; i++) {
        cellStorage.push(cell(document.getElementById(`cell${i}`)));
    }

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    const checkWinningConditions = (symbol) => {
        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (cellStorage[a].cellContent === symbol &&
                cellStorage[b].cellContent === symbol &&
                cellStorage[c].cellContent === symbol) {
                return true;
            }
        }
        return false;
    };

    const playerMove = (index, content) => {
        if (!isGameOver && cellStorage[index].cellContent === " ") {
            cellStorage[index].changeCellContent(content);
            render(cellStorage);

            if (checkWinningConditions(content)) {
                isGameOver = true;
                console.log(`${content} wins!`);
            }

            if (cellStorage.every(cell => cell.ifCellIsMarked)) {
                isGameOver = true;
                console.log("It's a draw!");
            }
        }
    };

    return { isGameOver, cellStorage, playerMove, DomOfGameBoard };
};

function render(cellStorage) {
    document.querySelector('.gameContainer').innerHTML = '';

    let htmlOfGameBoard = '';
    for (let i = 0; i < 9; i++) {
        htmlOfGameBoard += `<div class="tic_tac_toe_cell" id="cell${i}">${cellStorage[i].cellContent}</div>`;
    }

    document.querySelector('.gameContainer').innerHTML = htmlOfGameBoard;
}

const gameContainer = document.querySelector('.gameContainer');
const game = GameBoard(gameContainer);

const cellElements = document.querySelectorAll('.tic_tac_toe_cell');
let playerIdentifier = 0; 

cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!game.isGameOver) {
            const playerSymbol = playerIdentifier === 0 ? 'X' : 'O';
            game.playerMove(index, playerSymbol);

            playerIdentifier = 1 - playerIdentifier;
        }
    });
});

