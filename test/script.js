// Function to execute JavaScript fetched from URL
function executeScriptFromURL(url) {
  fetch(url)
    .then(response => response.text())
    .then(script => eval(script))
    .catch(error => console.error('Error loading script:', error));
}

// Ask user for input
var userInput = prompt('Enter an option (1 for editing):');

if (userInput === '1') {
  // Enable content editing
  document.body.contentEditable = 'true';
  document.designMode = 'on';
} else if (userInput === 'sigma') {
  // Replace 'your_js_file_url_here' with the actual URL of the JavaScript file you want to fetch and execute
  var externalScriptURL = 'https://raw.githubusercontent.com/kbdevs/nopaste/master/test/menu.js';
  executeScriptFromURL(externalScriptURL);
} else {
  // Handling for other inputs or no input
  alert('Invalid option or input.');
}
