const inputText = document.querySelector('input')
const outputText = document.querySelector('span')


if(inputText.value === 0){outputText.innerHTML = 'Anonymous'}
inputText.addEventListener('input', () => {if(inputText.value === 0){outputText.innerHTML = 'Anonymous'} else{outputText.innerHTML = inputText.value;}})