'use strict'
//Bloc 1.6: Array loops
//Nivell 2

//EXERCICI 4
function imprimirForIn(){
    let obj = { 
        nom: 'Ona', 
        edat: 25, 
        ciutat: 'Barcelona' };

    for(const propietat in obj){
        console.log(`${propietat}: ${obj[propietat]}`)
    };

    // noms.forEach((nom) => console.log(nom));
    document.getElementById("msg1").innerHTML = 
    `✅ Les claus i els seus valors s'han imprès per la consola.`;
}

//EXERCICI 5
function imprimirForOf(){
    let numeros = [1, 2, 3, 4, 5, 6];

    for(let numero of numeros){
        console.log(numero);
        if(numero === 5) {break;}
    }

    document.getElementById("msg2").innerHTML = 
    `✅ Els números s'han imprès per la consola fins trobar el 5.`;
}

