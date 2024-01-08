'use strict'
//Bloc 1.2: Operador ternari
//Nivell 1

//EXERCICI 1
function resposta(){
    let edat = Number(document.getElementById("edad").value);

    let potConduir = anys => (anys >= 18) ? "✅ Tens " + anys +" anys, pots conduir." : "❌ Tens " + anys + " anys, no pots conduir.";

    document.getElementById("msg1").innerHTML = `${potConduir(edat)}`;

    document.getElementById("edad").value = "";
}

//EXERCICI 2
function gran(){

    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);

    let mesGran = (n1, n2) => (n1 > n2) ? "Num1 és més gran." : (n1 == n2) ? "Num1 i Num2 són iguals." : "Num2 és més gran."

    document.getElementById("msg2").innerHTML = `${mesGran(numero1, numero2)}`;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
