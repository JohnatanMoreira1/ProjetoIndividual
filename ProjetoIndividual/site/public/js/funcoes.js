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

var contadortime1 = 0;
var contadortime2 = 0;

function jogar(){

var equipe1 = time_1.value; 
equipe1 == true;
var equipe2 = time_2.value;
var rodadas = num_rodadas.value;

if(){}





for(var index = 0; index < rodadas; index++){
    if()



}
}

//mathrandom de booleanas, time 1 igual a true e time 2 igual a false, quando cair um resultado ou outro vai decidir, 
// quem leva o ponto, estrutura da mensagem ${equipe1} ${contadortime1} x ${contadortime2} ${equipe2}, no final mostrar EQUIPE 1 VENCEDORA OU EQUIPE 2 VENCEDORA
// se houver empate, o vencedor será quem conquistou a primeira rodada (regra de negócio!) if(contador == contador)



