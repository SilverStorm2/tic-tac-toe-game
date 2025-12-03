let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const playerXInput = document.getElementById('player-x-name');
const playerYInput = document.getElementById('player-y-name');
const currentPlayerInfo = document.getElementById('current-player');
const playerXLabel = document.getElementById('player-x-label');
const playerYLabel = document.getElementById('player-y-label');
const scoreXCell = document.getElementById('score-x');
const scoreYCell = document.getElementById('score-y');
let players = {
    X: playerXInput?.value?.trim() || 'Gracz X',
    Y: playerYInput?.value?.trim() || 'Gracz Y'
};
let scores = {
    X: 0,
    Y: 0
};

function setPlayersFromInputs(resetScores = false) {
    const newPlayers = {
        X: playerXInput.value.trim() || 'Gracz X',
        Y: playerYInput.value.trim() || 'Gracz Y'
    };
    const namesChanged = players.X !== newPlayers.X || players.Y !== newPlayers.Y;
    players = newPlayers;
    if (resetScores && namesChanged) {
        scores = { X: 0, Y: 0 };
    }
    updateScoreboard();
}

function updateTurnInfo() {
    currentPlayerInfo.textContent = `Ruch: ${players[currentPlayer]} (${currentPlayer})`;
}

function updateScoreboard() {
    playerXLabel.textContent = players.X;
    playerYLabel.textContent = players.Y;
    scoreXCell.textContent = scores.X;
    scoreYCell.textContent = scores.Y;
}

function incrementScore(playerKey) {
    const currentScore = Number(scores[playerKey]) || 0;
    scores[playerKey] = currentScore + 1;
    updateScoreboard();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('id').replace('cell-', ''));

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkResult();
}

function checkResult() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let roundWon = false;
    for (let i = 0; i < 8; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        printMessage('Wygrywa ' + players[currentPlayer] + ' (' + currentPlayer + ')!');
        gameActive = false;
        incrementScore(currentPlayer);
        return;
    }

    let roundDraw = !board.includes('');
    if (roundDraw) {
        printMessage('Remis!');
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'Y' : 'X';
    updateTurnInfo();
}

function resetGame(resetScores = false) {
    setPlayersFromInputs(resetScores);
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    clearMessages();
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    updateTurnInfo();
    updateScoreboard();
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('next-button').addEventListener('click', () => resetGame(false));
document.getElementById('reset-button').addEventListener('click', () => resetGame(true));
document.getElementById('apply-players').addEventListener('click', () => {
    resetGame(true);
});

resetGame(true);

if (typeof module !== 'undefined') {
    module.exports = {
        handleCellClick,
        resetGame,
        updateTurnInfo,
        updateScoreboard,
        setPlayersFromInputs,
        getState: () => ({
            currentPlayer,
            board: [...board],
            gameActive,
            players: { ...players },
            scores: { ...scores }
        })
    };
}
