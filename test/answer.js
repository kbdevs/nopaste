(function(){

    alert("Please select all the text in a question, select from start of question to end of last answer.")
        var userInput = prompt("Enter question and answers (format: question/answer, answer 2, answer 3):");
        
        if (userInput) {
            var parts = userInput.split('/');
            
            if (parts.length === 2) {
                var question = parts[0].trim();
                var answers = parts[1].split(',').map(function(answer) {
                    return answer.trim();
                });
                
                var formattedString = "QUESTION: " + question + " ANSWERS: " + answers.join(', ') + " | REPLY WITH JUST THE CORRECT ANSWER";
            }
        }
    
    var promptText = formattedString

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
