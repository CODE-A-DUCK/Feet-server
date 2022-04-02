const TicTacToe = require('discord-tictactoe');

new TicTacToe({
    token: 'token-here',
    language: 'en',
    command: 'tictactoe',
    commandOptionName: 'opponent',
    textCommand: 'fs/ttt'
})
.login()
.then(() => console.log("tictactoe done."));

//npm install discord-tictactoe
