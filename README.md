# AntiPhish
Spams randomly generated credentials to a phishing site of your choice!

## Usage
Once your target site has been acquired, open it up in Firefox or Chrome and go to the network section of the dev tools. Once there, enter some fake login details and log into the site. You should see a bunch of stuff pop up in the dev tools. Look for POST, click on it and you should see "Request URL" on the side. This is what you should enter when the program prompts you for an address.

Once you have the URL, simply run:
`node index.js`
