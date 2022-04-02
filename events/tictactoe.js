const TicTacToe = require('discord-tictactoe');

new TicTacToe({
    token: 'OTUxMTE5NDUzMTk2Nzk2MDI0.Yii1BA.Rm2K0_cZ27TY64GwzJOvuncbccQ',
    language: 'en',
    command: 'tictactoe',
    commandOptionName: 'opponent',
    textCommand: 'fs/ttt'
})
.login()
.then(() => console.log("tictactoe done."));

//npm install discord-tictactoe
