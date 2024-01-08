'use strict'
//Bloc 1.6: Array loops
//Nivell 1

let noms = ['Anna', 'Bernat', 'Clara'];

//EXERCICI 1
function imprimirForEach(){
    noms.forEach((nom) => console.log(nom));
    document.getElementById("msg1").innerHTML = 
    `✅ Els noms s'han imprès per la consola.`;
}

//EXERCICI 2
function imprimirForOf(){
    for(let nom of noms){
        console.log(nom);
    }
    document.getElementById("msg2").innerHTML = 
    `✅ Els noms s'han imprès per la consola.`;
}

//EXERCICI 3
function buscarParells(){
    let numeros = [1, 2, 3, 4, 5, 6];
    const esParell = num => num % 2 == 0;
    const numerosParells = numeros.filter(esParell);
    console.log(numerosParells);
    document.getElementById("msg3").innerHTML = 
    `<b>Nova array amb números parells</b> = ${numerosParells.join(", ")}`;
}

