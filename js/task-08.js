const form = document.forms[0]
const loginBut = document.getElementsByTagName("button");
loginBut[0]?.addEventListener('click', (e)=>{
    e.preventDefault(); 
    let email = form.elements.email.value;
    let password = form.elements.password.value;
    if(email.trim() == '' || password.trim() == ''){alert("Потрібно заповнити усі поля!");return falsew;}
    let User ={
        email,
        password,
    }
    console.log(User)
    form.reset()
})



