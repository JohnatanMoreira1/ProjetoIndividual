// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_CADASTRO;
    var usuario = sessionStorage.NOME_CADASTRO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && usuario != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = usuario;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    alert("Um momento por favor!")
}




