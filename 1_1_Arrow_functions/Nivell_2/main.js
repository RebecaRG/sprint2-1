'use strict'
//Bloc 1.1: Arrow functions
//Nivell 2

//EXERCICI 4
const arrayNum =[];
let printNumbers = arr => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])};
    }

function intro(){
    let numeroIntro = Number(document.getElementById("num").value);
    arrayNum.push(numeroIntro);

    document.getElementById("num").value = "";

    console.log(arrayNum);
    console.log("Array length: " + arrayNum.length);
}

function imprimir(){
    console.log("Els números del Array són:")
    printNumbers(arrayNum);
}
