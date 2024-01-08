'use strict'
//Bloc 1.1: Arrow functions
//Nivell 3

//EXERCICI 5
function imprimir(){
    let mens = document.getElementById("mis").value;

   let escriuMissatge = missatge => console.log(missatge);

    setTimeout(escriuMissatge, 3000, mens);

    document.getElementById("mis").value = "";
}
