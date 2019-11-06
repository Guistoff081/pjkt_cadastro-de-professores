/* Mensagem de Cadastro Realizado */
function alertar() {
    alert("falsa");
};

/* Mascarando o CPF */
$(document).ready(function() {
    var $seuCampoCpf = $("#CPF");
    $seuCampoCpf.mask('000.000.000-00', { reverse: true });
});

/* Mascarando o CEP */
$(document).ready(function() {
    var $seuCampoCep = $('#CEP');
    $seuCampoCep.mask('00000-000', { reverse: true });
});


/*Validar os Campos */
function validar() {
    var nome = formc.Nome.value;
    var cpf = formc.CPF.value;
    var forma = formc.formacao.value;
    var pass = formc2.Password.value;
    var reppass = formc2.Reptpassword.value;
    var email = formc2.email.value;
    var sel = formc.select.value;


    if (nome == "" || nome.length < 3) {
        alert('Por favor, indique seu nome!');
        formc.nome.focus();
        return false;
    } else if (cpf == "") {
        alert('Por favor, indique seu CPF!');
        formc.cpf.focus();
        return false;
    } else if (cpf.length < 11) {
        alert('Por favor, completar o CPF!');
        formc.cpf.focus();
        return false;
    } else if (forma == "") {
        alert('Por favor, indique sua formação!');
        formc.forma.focus();
        return false;
    } else if (pass == "") {
        alert('Por favor, coloque uma senha!');
        formc2.pass.focus();
        return false;
    } else if (pass.length < 8) {
        alert('Por favor, A senha precisa ser mais de 8 digitos!');
        formc2.pass.focus();
        return false;
    } else if (reppass != pass) {
        alert('A senha não está igual, por favor tentar novamente!');
        formc2.reppass.focus();
        return false;
    } else if (email == "") {
        alert('Por favor, indique seu e-mail!');
        formc2.email.focus();
        return false;
    } else if (sel == "") {
        alert('Indique a sua Graduação!');
        formc.sel.focus();
        return false;
    } else if (nome != "" || cpf != "" || forma != "" || pass != "" || email != "" || sel != "") {
        alert('Cadastro realizado com Sucesso, Você está sendo direcionado para a Página de Login.');
        window.location.href = "./Login_Professor.html";
    }

}

/* Teste


*/