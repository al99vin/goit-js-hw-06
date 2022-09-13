const inputText = document.querySelector('input')

inputText.addEventListener('blur', () => {if(inputText.value.length === 6){inputText.className = ("valid");}else{inputText.className = ("invalid")}})