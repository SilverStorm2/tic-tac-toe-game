const { printMessage, clearMessages } = require('../functions');

describe('functions.js helpers', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="messages"></div>';
    });

    test('printMessage ustawia treść komunikatu', () => {
        printMessage('Wygrywa X!');
        expect(document.getElementById('messages').innerHTML).toBe('Wygrywa X!');
    });

    test('clearMessages czyści komunikat', () => {
        document.getElementById('messages').innerHTML = 'Jakis tekst';
        clearMessages();
        expect(document.getElementById('messages').innerHTML).toBe('');
    });
});
