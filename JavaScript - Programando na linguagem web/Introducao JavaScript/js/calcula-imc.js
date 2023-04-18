var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//funtion retorna array c/ todos os elementos que tem a classe paciente e armazena na variável pacientes
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);


// interacao entre os pacientes
for(var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhvalido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhvalido) {
        pesoEhvalido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido"); //Add class estilo do css no html de acordo com a condição.
    }
    if(!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if(pesoEhvalido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso >= 0.1 && peso <= 300) {
        return true;
    }
    else {
        return false;
    }
}


function validaAltura(altura) {
    if(altura >= 0.1 && altura <= 3) {
        return true;
    }
    else {
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

