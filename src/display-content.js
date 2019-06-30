console.log('display-content.js ran successfully.');

let vars = require('./vars');

const displayAppTitle = () => document.getElementById('app-title').innerHTML = vars.appTitle; 

const displayAppBodyText = () => document.getElementById('app-body-text').innerHTML = vars.appBodyText;

const displayAppAuthor = () => document.getElementById('app-author').innerHTML = `App by: ${vars.appAuthor}`;

module.exports = {
	appTitle: displayAppTitle,
	appBodyText: displayAppBodyText,
	appAuthor: displayAppAuthor
}