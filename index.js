const chalk = require('chalk');
const readline = require('readline');

var address = 'http://facebook.2rm299.trade/login.php';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the address where the POST requests should be sent! (This is not the URL of the login page): ', (answer) => {
    address = answer
    rl.close();
    start()
});

function start() {
    console.log(chalk.green("\nStarting the spamming!"))
    require('./spam.js').startSpamming(address)
}