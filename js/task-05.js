const inputText = document.querySelector('input')
const outputText = document.querySelector('span')


if(inputText.value === ''){outputText.innerHTML = 'Anonymous'}
inputText.addEventListener('input', () => {outputText.innerHTML = inputText.value.trim();if(inputText.value.trim() === ''){outputText.innerHTML = 'Anonymous'}})