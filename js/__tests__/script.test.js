/**
 * Testy logiki gry w tic-tac-toe oparte na manipulacji DOM.
 */

const path = require('path');

function setupDom() {
    document.body.innerHTML = `
        <input id="player-x-name" value="Ala" />
        <input id="player-y-name" value="Bob" />
        <div id="current-player"></div>
        <div id="player-x-label"></div>
        <div id="player-y-label"></div>
        <div id="score-x"></div>
        <div id="score-y"></div>
        <div id="messages"></div>
        <button id="next-button"></button>
        <button id="reset-button"></button>
        <button id="apply-players"></button>
        ${Array.from({ length: 9 }, (_, idx) => `<div class="cell" id="cell-${idx}"></div>`).join('')}
    `;
}

function loadGameModule() {
    jest.resetModules();
    setupDom();
    const modulePath = path.resolve(__dirname, '../script.js');
    // eslint-disable-next-line global-require
    return require(modulePath);
}

function clickCell(index, handleCellClick) {
    const cell = document.getElementById(`cell-${index}`);
    handleCellClick({ target: cell });
}

describe('logika gry', () => {
    test('resetGame(true) zmienia imiona i zeruje wyniki gdy gracz się zmienia', () => {
        const game = loadGameModule();
        // zmiana nazw graczy
        document.getElementById('player-x-name').value = 'Kasia';
        document.getElementById('player-y-name').value = 'Marek';

        game.resetGame(true);

        expect(document.getElementById('player-x-label').textContent).toBe('Kasia');
        expect(document.getElementById('player-y-label').textContent).toBe('Marek');
        expect(document.getElementById('score-x').textContent).toBe('0');
        expect(document.getElementById('score-y').textContent).toBe('0');
        expect(document.getElementById('current-player').textContent).toContain('Kasia');
    });

    test('wygrana zwiększa wynik odpowiedniego gracza', () => {
        const game = loadGameModule();
        game.resetGame(true);

        // X wygrywa linią 0-1-2
        clickCell(0, game.handleCellClick); // X
        clickCell(3, game.handleCellClick); // Y
        clickCell(1, game.handleCellClick); // X
        clickCell(4, game.handleCellClick); // Y
        clickCell(2, game.handleCellClick); // X wygrywa

        expect(document.getElementById('score-x').textContent).toBe('1');
        expect(document.getElementById('score-y').textContent).toBe('0');
        expect(document.getElementById('messages').textContent).toContain('Wygrywa');
        const state = game.getState();
        expect(state.gameActive).toBe(false);
    });

    test('resetGame(false) czyści planszę ale zachowuje wyniki', () => {
        const game = loadGameModule();
        game.resetGame(true);

        // szybka wygrana X
        clickCell(0, game.handleCellClick);
        clickCell(3, game.handleCellClick);
        clickCell(1, game.handleCellClick);
        clickCell(4, game.handleCellClick);
        clickCell(2, game.handleCellClick);

        expect(document.getElementById('score-x').textContent).toBe('1');

        game.resetGame(false);

        expect(document.getElementById('score-x').textContent).toBe('1');
        expect(Array.from({ length: 9 }, (_, idx) => document.getElementById(`cell-${idx}`).textContent).every(v => v === '')).toBe(true);
        expect(document.getElementById('messages').textContent).toBe('');
        expect(game.getState().gameActive).toBe(true);
    });
});
