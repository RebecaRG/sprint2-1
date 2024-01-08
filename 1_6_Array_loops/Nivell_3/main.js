'use strict'
//Bloc 1.6: Array loops
//Nivell 3

//EXERCICI 6
function imprimirForOf(){
    let noms = ['Anna', 'Bernat', 'Clara'];

for(const[posicio, element] of noms.entries()){
    console.log(posicio, element);
    }

    document.getElementById("msg1").innerHTML = 
    `✅ Els elements i la seva posició s'han imprès per la consola.`;
}
