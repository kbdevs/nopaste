javascript:(function() {
    function loadJSON(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status == "200") {
                callback(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(null);
    }

    function showOptionsAndExecute(jsonData) {
        var options = jsonData.options;
        var optionNames = Object.keys(options);
        var selectedOption = prompt("Choose an option (Make sure you type it exactly): \n" + optionNames.join("\n"));

        if (selectedOption && options[selectedOption]) {
            var codeToExecute = options[selectedOption];
            eval(codeToExecute);
        } else {
            alert("Invalid option selected or canceled.");
        }
    }

    var jsonURL = 'https://cdn.jsdelivr.net/gh/kbdevs/nopaste/test/data.json'; // Replace with your JSON file URL
    loadJSON(jsonURL, showOptionsAndExecute);
})();
