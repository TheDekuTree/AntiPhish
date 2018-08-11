const chalk = require("chalk");
const readline = require("readline");

var address = "https://postman-echo.com/post";
var time = "1000";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  chalk.cyan(
    "\nPlease enter the request URL where the POST requests should be sent! (default is postman-echo): "
  ),
  answer => {
    if (answer != "") {
      address = answer;
    }
    rl.question(
      chalk.cyan(
        "\nPlease enter the delay in milliseconds for each request (default is 1000): "
      ),
      answer => {
        if (answer != "") {
          time = answer;
        }
        rl.close();
        start();
      }
    );
  }
);

function start() {
  console.log(chalk.green("\nStarting the spamming!"));
  require("./spam.js").startSpamming(address, time);
}
