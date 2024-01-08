'use strict'
//Bloc 1.4: Rest & Spread operators
//Nivell 1

//EXERCICI 1
const array1 = [];
const array2 = [];
let array3 = [];
function a1(){
    let numeroIntroA1 = Number(document.getElementById("arr1").value);
    array1.push(numeroIntroA1);
    document.getElementById("arr1").value = "";
    console.log("Array1: " + array1);
}

function a2(){
    let numeroIntroA2 = Number(document.getElementById("arr2").value);
    array2.push(numeroIntroA2);
    document.getElementById("arr2").value = "";
    console.log("Array2: " + array2);
}

function a3(){
    function numArray(array, numArray){
        return `Array${numArray}= ${array}`;
        }
    
    array3 = [...array1, ...array2];
    console.log("Array3: " + array3);

    document.getElementById("msg1").innerHTML = 
    `${numArray(array1.join(", "), 1)}</br> 
    ${numArray(array2.join(", "), 2)}</br></br>
    <b>${numArray(array3.join(", "), 3)} </b>`;
}

//EXERCICI 2
const arrayNum = [];

function suma(...argumentos){
    let total = 0;
    for (const argument of argumentos){
        total += argument;
    }
    return total;
}
function sumar(){
    let numeroSuma = Number(document.getElementById("num").value);
    arrayNum.push(numeroSuma);
    console.log(arrayNum);
    
    console.log("Suma: " + suma(...arrayNum));
    
    document.getElementById("msg2").innerHTML = `<b>Suma = </b> ${suma(...arrayNum)}`;
    document.getElementById("num").value = "";
}