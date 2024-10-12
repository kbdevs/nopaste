(function(){
    var promptText = prompt("Enter message (may take a few seconds):");

    if (promptText !== null && promptText.trim() !== "") {
        // take my account id, i don't care
        var url = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAHBZJKJw4zQNkNpl1VD2TGioLpz7sFeSk";
        var headers = {
            "Content-Type": "application/json"
        };
        var data = {"contents":[
            {"role": "user",
                 "parts":[{"text": promptText}]}]};
        var corsAnywhereUrl = 'https://cors.kbdevs.xyz/';

        fetch(corsAnywhereUrl + url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                var responseArea = data.candidates[0]?.content?.parts[0]?.text || "No response text available.";
                alert("Responses may be inaccurate \n\n" + responseArea);
            })
            .catch(error => {
                alert("Error occurred: " + error.message);
            });
    } else {
        alert("Prompt area cannot be empty. Please try again.");
    }
})();
