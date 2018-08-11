const jsonfile = require('jsonfile')
const rp = require('request-promise');
const chalk = require('chalk');

var namesFile = 'names.json'

function startSpamming(address, time) {

    // load a json file containing random names
    jsonfile.readFile(namesFile, function (err, obj) {
        console.log(chalk.green(obj.length + " names loaded\n"))

        var i = 1; //  set your counter to 1

        function mainloop() { //  create a loop function
            setTimeout(function () { //  call a 3s setTimeout when the loop is called
                sendLogin(obj); // send a login
                i++; //  increment the counter
                if (i < obj.length) { //  if the counter < 10, call the loop function
                    mainloop(); //  ..  again which will trigger another 
                } //  ..  setTimeout()
            }, time)
        }

        mainloop();
    })


    function sendLogin(names) {

        // Submit Login Details
        var options = {
            method: 'POST',
            uri: address,
            formData: {
                // Like <input type="text" name="name">
                // Send the email and password
                email: names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 90 + 10).toString() + '@gmail.com',
                pass: (Math.floor(Math.random() * 99999999999) + 1).toString()
            },
            headers: {
                /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically

            }
        };
        console.log(chalk.yellow("-------------------------------------------"))
        console.log(chalk.cyan("Sending login: " + options.formData.email))
        console.log(chalk.cyan("\nSending password: " + options.formData.pass))
        console.log(chalk.yellow("-------------------------------------------"))

        rp(options)
            .then(function (body) {
                // POST succeeded...
                console.log(chalk.green.bold("< Request Sent! >"))
            })
            .catch(function (err) {
                // POST failed...
                console.log(chalk.red.bold("< Error sending request to " + address + " >"))
            });

    }
}

module.exports = {
    startSpamming
};