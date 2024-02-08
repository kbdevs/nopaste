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
                }
            });

            alertText += '\n\n'; // Add two newlines after the last entry of each parent div
        });
    });

    if (alertText !== '') {
		alert(alertText)
        var promptText = "REPLY WITH ONLY THE CORRECT ANSWER AND REMOVE ANY OTHER ANSWERS THAT ARE NOT CORRECT IN THE FORM OF, QUESTION: ANSWER | " + alertText;

        if (promptText !== null && promptText.trim() !== "") {
            // take my account id, i don't care
            var url = "https://api.cloudflare.com/client/v4/accounts/6d6f7cdb2f9a91dae4fe89fa9e48117e/ai/run/@hf/thebloke/llama-2-13b-chat-awq";
            var headers = {
                // take my api key, i don't care
                "Authorization": "Bearer 18xmwoqct0jwN__M77WSzmocIwOK5hdy6SFxCCOq",
                "Content-Type": "application/json"
            };
            var data = {
                  messages: [
                    { role: "system", content: "you are a question answering robot that replies with just the question and the answer with no fluff" },
                    { role: "user", content: promptText },
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
                alert(responseArea);
            })
            .catch(error => {
                alert("Error occurred: " + error.message);
            });
        } else {
            alert("Prompt area cannot be empty. Please try again.");
        }
} else {
    alert('No elements found with the specified classes.');
}
})();
