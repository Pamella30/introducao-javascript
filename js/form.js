var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");  //pegando o form
    var paciente = obtemFormDoPaciente(form); // pega o paciente do form

    var pacienteTr = montaTr(paciente); // monta uma tr a partir do paciente

    if(!validaPaciente(paciente)){
        console.log("Paciente invalido!"); 
        return;
    }

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro"); 
        mensagemErro.textContent = erros;
        return;
    }


var tabela = document.querySelector("#tabela-pacientes"); // adiciona o paciente na tabela

tabela.appendChild(pacienteTr);

form.reset(); // limpa o campo 

});


function obtemFormDoPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

    }

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function validaPaciente(paciente){
    
    var erros = [];

    if(!validaPeso(paciente)) erros.push("Peso invalido!");
    if(!validaAltura(paciente)) erros.push("Altura Invalida");

    return erros;

}