const input = document.querySelector('input')
let inputText = new String; 
input.addEventListener('blur', () => {
    inputText = input.value.trim();
    if(inputText.length === 6){
        input.className = ("valid");
    }
    else{input.className = ("invalid")}})