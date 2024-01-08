'use strict'
//Bloc 1.2: Operador ternari
//Nivell 3

//EXERCICI 4
const arrayNum =[];
const parells = [];
const imparells = [];
let parOImpar = arr => { for(let i = 0; i < arr.length; i++){
    (arr[i]%2 == 0) ? parells.push(arr[i]) : imparells.push(arr[i]);
}
}

function intro(){
    let numeroIntro = Number(document.getElementById("num").value);
    arrayNum.push(numeroIntro);

    document.getElementById("num").value = "";

    console.log(arrayNum);
    console.log("Array length: " + arrayNum.length);

    document.getElementById("msg1").innerHTML = `Array = [${arrayNum}]`;
}

function imprimir(){
    parOImpar(arrayNum);
    document.getElementById("msg2").innerHTML = `<b>Parells = </b>${parells.join(", ")}</br><b>Imparells = </b>${imparells.join(", ")}`;
}

