const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
for(const element of toggle){
    element.addEventListener('click',function(){
        nav.classList.toggle('show')
    })
}


//Deixar o Header fixo quando rolar a scroll

const header = document.querySelector('#header');
window.addEventListener('scroll', function () {
    let getScrollposition = window.scrollY;
if(getScrollposition > 10){

    header.style.position = 'fixed'
    header.style.background = '#FFF'
    header.style.borderBottom = '1px solid rgb(248,248,248)'
}
else{
    header.style.position = 'relative'
    header.style.background = 'transparent'
    header.style.border = '0'
}
    
})


//FORMULARIO

const validForm = function (event) {
    var inputName = document.querySelector('#name');
    var inputPhone = document.querySelector('#phone');
    var inputEmail = document.querySelector('#email');
    var inputMessage = document.querySelector('#message');

    if(inputName.value === ""){
        alert("Preecha o nome");
        inputName.focus();
        return false;        
    }
    if(inputPhone.value === ""){
        alert("Preecha o Telefone");
        inputPhone.focus();
        return false;        
    }
    if(inputEmail.value === ""){
        alert("Preecha o E-mail");
        inputEmail.focus();
        return false;        
    }
    if(inputMessage.value === ""){
        alert("Digite uma Mensagem");
        inputMessage.focus();
        return false;        
    }

    alert("Formulário foi enviado com sucesso!")

}