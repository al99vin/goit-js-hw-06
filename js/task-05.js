const inputText = document.querySelector('input')
const outputText = document.querySelector('span')


if(inputText.value === ''){outputText.innerHTML = 'Anonymous'}
inputText.addEventListener('input', () => {outputText.innerHTML = inputText.value;if(inputText.value === ''){outputText.innerHTML = 'Anonymous'}})