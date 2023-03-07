var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");


var form = document.querySelector("#form-adiciona");  //pegando o form

var paciente = obtemFormDoPaciente(form); // pega o paciente do form

var pacienteTr = montaTr(paciente); // monta uma tr a partir do paciente

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