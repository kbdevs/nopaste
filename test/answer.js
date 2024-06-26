(function () {
    var parentDivClasses = ['cQHeE_bvdE', 'cQHeE_ebwZ'];
    var alertText = '';
    var uniqueEntries = new Set();

    parentDivClasses.forEach(function (parentClass) {
        var parentDivs = document.querySelectorAll('.' + parentClass);

        parentDivs.forEach(function (parentDiv) {
            var entries = parentDiv.querySelectorAll('.cLlJH_caGd, .gmVuP_esVF, .user_content, .enhanced, .p');
            entries.forEach(function (entry, index) {
                var trimmedEntry = entry.textContent.trim();
                if (!uniqueEntries.has(trimmedEntry)) {
                    uniqueEntries.add(trimmedEntry);

                    if (index === 0) {
                        alertText += 'QUESTION: ' + trimmedEntry;
                    } else {
                        alertText += '\nANSWERS: ' + trimmedEntry;
                    }

                    if (index !== entries.length - 1) {
                        alertText += '\n'; // Add newline after each entry
                    }
                }
            });

            alertText += '\n\n'; // Add two newlines after the last entry of each parent div
        });
    });

    if (alertText !== '') {

        var promptText = "FOR EACH QUESTION AND SET OF ANSWERS I WANT YOU TO JUST REPLY WITH THE CORRECT ANSWER IN THE FORMAT OF, QUESTION:, ANSWER | " + alertText;

        if (promptText !== null && promptText.trim() !== "") {
            option = prompt("gemini or llama (type the one you want, gemini is better)")
            if (option == 'gemini') {
                // take my account id, I don't care
                var url = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAHBZJKJw4zQNkNpl1VD2TGioLpz7sFeSk";
                var headers = {
                    "Content-Type": "application/json"
                };
                var context = prompt("Give the AI some context about what this quiz is") + "\n"
                var data = {"contents":[
                {"role": "user",
                  "parts":[{"text": "CONTEXT: " + context + promptText}]}]};
                var corsAnywhereUrl = 'https://corsproxy.io/?';
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
            else {
                // take my account id, I don't care
                var url = "https://api.cloudflare.com/client/v4/accounts/6d6f7cdb2f9a91dae4fe89fa9e48117e/ai/run/@hf/thebloke/llama-2-13b-chat-awq";
                var headers = {
                    // take my API key, I don't care
                    "Authorization": "Bearer 18xmwoqct0jwN__M77WSzmocIwOK5hdy6SFxCCOq",
                    "Content-Type": "application/json"
                };
                var context = prompt("Give the AI some context about what this quiz is") + "\n"
                var data = {
                      messages: [
                        { role: "system", content: "you are a question answering robot that replies with just the question and the answer with no fluff" },
                        { role: "user", content: "CONTEXT: " + context + promptText },
                      ],
                };
                var corsAnywhereUrl = 'https://corsproxy.io/?';
                fetch(corsAnywhereUrl + url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                    })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    var responseArea = data.result.response;
                    alert("Responses may be inaccurate" + responseArea);
                })
                .catch(error => {
                    alert("Error occurred: " + error.message);
                });
            }
        } else {
            alert("Prompt area cannot be empty. Please try again.");
        }
    } else {
        alert('No elements found with the specified classes.');
    }
})();
