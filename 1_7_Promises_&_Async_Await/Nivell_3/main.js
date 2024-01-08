'use strict'
//Bloc 1.7: Promises & Async/Await
//Nivell 3

//EXERCICI 6
function hola (nom) {
    return new Promise((resolve, reject) => {
        let missatge = `Hola, ${nom}!`; 
        if (nom.length === 0) {
            reject(new Error("Has d'introduir un nom."));
            //Aquest missatge s'imprimeix per consola si no s'ha escrit cap nom.
        }
        setTimeout(() =>{
            resolve (missatge);
            console.log("Promesa1: " + missatge);
            }, 2000)
    })
}

function adeu (nom) {
    return new Promise((resolve, reject) => {
        let missatge = `Adèu, ${nom}!`; 
        if (nom.length === 0) {
            reject(new Error("Has d'introduir un nom."));
            //Aquest missatge s'imprimeix per consola si no s'ha escrit cap nom.
        }
        setTimeout(() =>{
            resolve (missatge);
            console.log("Promesa2: " + missatge);
            }, 3000)
    })
}

function imprimir(){
    let nombre = document.getElementById("nom").value;
    Promise.all([hola(nombre), adeu(nombre)])
    .then((mis) => {
        console.log(mis);
    })
    .catch((err) => {
        console.log(err);
    })

    
    document.getElementById("msg1").innerHTML = 
    `✅ El resultat de les dues promeses serà imprès per la consola.`;
    document.getElementById("nom").value = "";
}
