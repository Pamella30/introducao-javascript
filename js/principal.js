var titulo = document.querySelector(".titulo");
titulo.textContent = "Brasil Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoValido = true;
    alturaValido = true;

    if (peso <= 0 || peso >= 500){
        console.log("Peso invalido!")
        pesoValido = false;
        tdImc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura invalida!")
        alturaValido = false;
        tdImc.textContent = "Altura invalida!"
        paciente.classList.add("paciente-invalido")
    }

    if(pesoValido && alturaValido){
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2);
    }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("OI CLIQUEI NO BOTAO")
})
