javascript:(function(){var url='https://cdn.jsdelivr.net/gh/kbdevs/nopaste@latest/test/ai.html';var newTab=window.open();fetch(url).then(response=>response.text()).then(html=>newTab.document.write(html)).catch(error=>console.error('Error fetching HTML:',error));})();"