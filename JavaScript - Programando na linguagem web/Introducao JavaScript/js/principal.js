var titilo = document.querySelector(".titulo");
titilo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector("#primeiro-paciente");

// console.log(paciente);
// console.log(peso);
// console.log(altura);


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);
NodeList[5]

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
   //console.log(pacientes[i]);

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida= true;

    if(peso <= 0 || peso >= 400){
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!";
        pesoValido = false;
        paciente.classList.add("valor-ivalido");
    }

    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("valor-ivalido");
     }

    if(alturaValida && pesoValido){
        var imc = peso / (Math.pow(altura, 2));
        tdImc.textContent = imc.toFixed(2);
                
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}
   

    



