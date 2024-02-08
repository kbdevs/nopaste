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
        alert(alertText);

        var promptText = "FOR EACH QUESTION AND SET OF ANSWERS I WANT YOU TO JUST REPLY WITH THE CORRECT ANSWER IN THE FORMAT OF, QUESTION:, ANSWER | " + alertText;

        alert(promptText);
        if (promptText !== null && promptText.trim() !== "") {
            // take my account id, i don't care
            var url = "https://api.cloudflare.com/client/v4/accounts/6d6f7cdb2f9a91dae4fe89fa9e48117e/ai/run/@cf/meta/llama-2-7b-chat-fp16";
            var headers = {
                // take my api key, i don't care
                "Authorization": "Bearer 18xmwoqct0jwN__M77WSzmocIwOK5hdy6SFxCCOq",
                "Content-Type": "application/json"
            };
            var data = {
                "prompt": promptText,
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
} else {
    alert('No elements found with the specified classes.');
}
})();
