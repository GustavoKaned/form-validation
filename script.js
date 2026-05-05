function validaFormulario() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.getElementById("saida").innerHTML = "<strong> Sucesso! </strong>";

    if(nome.length>=3){
        document.getElementById("nome").style.borderColor = 'green'
    } else {    
        document.getElementById("nome").style.borderColor = 'red'
    }

    if(regex.test(email)){
        document.getElementById("email").style.borderColor = 'green';
    } else {
        document.getElementById("email").style.borderColor = 'red';
    }
}