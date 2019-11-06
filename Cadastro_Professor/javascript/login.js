function validarLogin() {
    var login = forma.login.value;
    var senha = forma.senha.value;

    if (login == "") {
        alert('Por favor,Colocar o seu Login.');
        forma.login.focus();
        return false;
    } else if (senha == "") {
        alert('Por favor, Colocar a sua Senha.');
        forma.senha.focus();
        return false;
    } else if (senha != "" || login != "") {
        window.location.href = "./Consulta_Professor.html";
    }

}