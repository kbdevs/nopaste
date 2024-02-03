(function(){
    var promptText = prompt("Enter message (may take a few seconds):");

    if (promptText !== null && promptText.trim() !== "") {
        // take my account id, i don't care
        var url = "https://api.cloudflare.com/client/v4/accounts/6d6f7cdb2f9a91dae4fe89fa9e48117e/ai/run/@cf/meta/llama-2-7b-chat-int8";
        var headers = {
            // take my api key, i don't care
            "Authorization": "Bearer 18xmwoqct0jwN__M77WSzmocIwOK5hdy6SFxCCOq",
            "Content-Type": "application/json"
        };
        var data = {
            "prompt": promptText
        };
        var corsAnywhereUrl = 'https://corsproxy.io/?';

        fetch(corsAnywhereUrl + url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            var responseArea = data.result.response;
            alert(responseArea);
        })
        .catch(error => {
            alert("Error occurred: " + error.message);
        });
    } else {
        alert("Prompt area cannot be empty. Please try again.");
    }
})();
