'use strict'
//Bloc 1.3: Callbacks
//Nivell 1

//EXERCICI 1
function boto(){
    let numero = Number(document.getElementById("num").value);
   
    function processarMissatge(mensaje){
       document.getElementById("msg1").innerHTML = mensaje;
    }
    function processar(nombre, callback){
        const mensaje = `El nombre processat és ${nombre}.`;
        callback(mensaje);
    }

    processar(numero, processarMissatge);

    document.getElementById("num").value = "";
}

//EXERCICI 2
function calcular(){

    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);

    function suma (n1, n2){
        return n1 + n2;
    }

    function calculadora(n1, n2, callback){
        return callback(n1, n2);
    }

    console.log(calculadora(numero1, numero2, suma));

    document.getElementById("msg2").innerHTML = 
    `La suma de ${numero1} i ${numero2} és ${calculadora(numero1, numero2, suma)}.`;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
