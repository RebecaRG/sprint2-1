'use strict'
//Bloc 1.2: Operador ternari
//Nivell 2

//EXERCICI 3
function resposta(){
    let numero = Number(document.getElementById("num").value);

    let posNegZero = n => (n > 0) ? "➕ El número és positiu." : (n === 0) ? "0️⃣ El número és 0." : "➖ El número és negatiu."

    document.getElementById("msg1").innerHTML = `${posNegZero(numero)}`;

    document.getElementById("num").value = "";
}

function max(){
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let numero3 = Number(document.getElementById("num3").value);

    let trobarMaxim = (a, b, c) => (a > b && a > c) ? 
    `El valor màxim és el primer número = ${a}.` : (b > a && b > c) ? `El valor màxim és el segon número = ${b}.` : `El valor màxim és el tercer número = ${c}.`

    document.getElementById("msg2").innerHTML = `${trobarMaxim(numero1, numero2, numero3)}`;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
}
