(function () {
    // take my account id, I don't care
    var url = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAHBZJKJw4zQNkNpl1VD2TGioLpz7sFeSk";
    var headers = {
        "Content-Type": "application/json"
    };

    var context = prompt("Give the AI some context about what this quiz is") + "\n"
    var promptText = "FOR EACH QUESTION AND SET OF ANSWERS I WANT YOU TO JUST REPLY WITH THE CORRECT ANSWER IN THE FORMAT OF, QUESTION:, ANSWER | " + prompt("please paste the question and all answer options in this format, QUESTION: ANSWERS:") + "\n"
    var data = {"contents":[
        {"role": "user",
          "parts":[{"text": "CONTEXT: " + context + promptText}]}]};
    if (promptText != null) {
        var corsAnywhereUrl = 'https://web-production-43a1e.up.railway.app/';
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
    }
})(); // Add closing parenthesis here
