function printMessage(msg) {
    document.getElementById('messages').innerHTML = msg;
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

if (typeof module !== 'undefined') {
    module.exports = { printMessage, clearMessages };
}
