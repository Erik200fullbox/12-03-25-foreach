function contar() {
    let numero = 0;
    let txtNumeroFinal = document.getElementById("txtNumeroFinal");
    let divNumeros = document.getElementById("divNumeros"); //uma declaração de váriavel, o "divnumeros" esta recebendo um elemento da página
    divNumeros.innerHTML = "";
    for (let i = numero; i <= txtNumeroFinal.value; i++) { //i = i + 1 
        divNumeros.innerHTML += i + "<br />"; //+= vai fazer com que a variavel receba ela mesma + o valor dsejado

    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        contar();
    } else {
    console.log(event.key);
    if (
        isNaN(event.key) && 
        event.keyCode != 8 && //código  8sinifica que a tecla seta para backspace é teclada
        event.keyCode != 46 && //código 46 sinifica que a tecla seta para delete é teclada
        event.keyCode != 37 && //código 37 sinifica que a tecla seta para esquerda é teclada
        event.keyCode != 38 && //código 38 sinifica que a tecla seta para cima é teclada
        event.keyCode != 39 && //código 39 sinifica que a tecla seta para baixo é teclada
        event.keyCode != 40 && //código 40 sinifica que a tecla seta para direita é teclada
        event.keyCode != 35 && //código 35 sinifica que a tecla end é teclada
        event.keyCode != 36 // código 36 sinifica que a tecla home é teclada
    ) {
        console.log("Não é numérico. keyCode: ", event.keyCode);
        divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérica! Por favor, tecle uma tecla numérica e tente novamente.";
    }
    }
});

document.getElementById("txtNumeroFinal").addEventListener('input', function(event) {

    if (this.value.length > 3) {
        if(this.value > 999) {
           this.value = 999;
           alert("0 número máximo permitido é 999!");
        }else {
        console.log("Tem mais de 3 caracteres");
        this.value = this.value.substring(0,3); 
   }
    }
});

