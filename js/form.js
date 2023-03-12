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
        exibeMensagensDeErro(erros);
        return;
    }


var tabela = document.querySelector("#tabela-pacientes"); // adiciona o paciente na tabela

tabela.appendChild(pacienteTr);

form.reset(); // limpa o campo 
var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";

});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
} 


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

    if(paciente.nome.length == 0){
        erros.push("O nome nao pode ser em branco.");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso invalido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura invalida!");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso nao pode ser em branco.");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura nao pode ser em branco.");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura nao pode ser em branco.");
    }

    return erros;

}