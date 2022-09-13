const inputText = document.querySelector('input')
const outputText = document.querySelector('span')


if(inputText.textContent === 0){outputText.innerHTML = 'Anonymous'}
inputText.addEventListener('input', () => {if(inputText.textContent === 0){outputText.innerHTML = 'Anonymous'} else{outputText.innerHTML = inputText.value;}})
inputText.addEventListener('input', () => {if(inputText.textContent === 0){outputText.innerHTML = 'Anonymous'}})