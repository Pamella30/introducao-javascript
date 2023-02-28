var titulo = document.querySelector(".titulo");
titulo.textContent = "Brasil Nutrição";

var paciente = document.querySelector("#primeiro-paciente");

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
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura invalida!")
    alturaValido = false;
    tdImc.textContent = "Altura invalida!"
}

if(pesoValido && alturaValido){
    var imc = peso / (altura * altura)
    tdImc.textContent = imc;
}
