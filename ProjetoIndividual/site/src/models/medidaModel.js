var database = require("../database/config");

function buscar(fkmapa) {
    //passei parametros novamente para conseguir utilizar a variavel que está alocada em outro local 

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
    select cadastro.idcadastro, mapas.nomemapa from mapas join cadastro on fkmapa = idmapa where idcadastro = ${fkmapa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao); // select para buscar o mapa
}


function setuser(){

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        select count(cadastro.idcadastro) as cadastrados from cadastro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao); //select para buscar a quantidade de usuarios cadastrados
}



module.exports = {
    buscar,
    setuser
}
