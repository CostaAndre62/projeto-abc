// Endereço da API json-server para CANDIDATOS
let urlCandidatos = "http://localhost:3000/candidatos";

// Selecionando os campos no HTML
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoData = document.querySelector("#data");
const campoTelefone = document.querySelector("#telefone");
const campoEmail = document.querySelector("#email");
const campoVaga = document.querySelector("#vaga");


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    // Montando um objeto com os dados do formulário
    let dados = {
        nome: campoNome.value,
        data: campoData.value,
        telefone: campoTelefone.value,
        email: campoEmail.value,

        // Instrução abaixo permite pegar o título da
        // vaga escolhida
        vaga: campoVaga.selectedOptions[0].textContent
    };

    /* Transmissão dos dados para a API (Técnica Ajax) */
    fetch(urlCandidatos, {
        // ENVIO DE DADOS
        method: "POST", 

        // Converter os dados em JSON
        body: JSON.stringify(dados), 

        // Cabeçalho da mensagem de dados
        headers: { // importante p/ back-end api
            'Content-type' : 'application/json'
        }
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);
        alert("Dados enviados com sucesso!");
    });

}); // final da função do formulário

/*  Ativação da mascara para o telefone usando jquery */

$(campoTelefone).mask("(00) 0000-0000");
