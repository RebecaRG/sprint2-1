'use strict'
//Bloc 1.7: Promises & Async/Await
//Nivell 1

//EXERCICI 1
const missatge = "Hola, món";
function diguesHolaMon () {
    return new Promise((resolve, reject) => {
        if (missatge.length === 0) {
            reject(new Error("No hi ha cap mssatge per mostrar."));
            //Aquest missatge s'imprimeix per consola si no hi ha cap missatge. Ex: const missatge = "";
        }
        setTimeout(() =>{
            resolve (missatge);
            }, 2000)
    })
}
function promesa(){
document.getElementById("msg1").innerHTML = 
    `✅ Promesa creada a l'arxiu main.js`;
}

//EXERCICI 2
function imprimir(){
    diguesHolaMon()
    .then((response) => console.log(response));
    
    document.getElementById("msg2").innerHTML = 
    `✅ El resultat de la promesa serà imprès per la consola.`;
}

//EXERCICI 3
function diguesHola () {
    return new Promise((resolve, reject) => {
        if (missatge != "Hola") {
            reject(new Error(`En el missatge no posa "Hola"`))
        }
        setTimeout(() =>{
            resolve (missatge);
            }, 2000)
    })
}

function promesaReject(){
    diguesHola()
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

    document.getElementById("msg3").innerHTML = 
    `✅ El resultat de la promesa serà imprès per la consola.`;
}

//EXERCICI4
async function asyncHola(){
    console.log("Funció async cridada");
    const missatgeAsync = await diguesHolaMon();
    console.log(missatgeAsync);
}

function imprimirConsola(){
    asyncHola();
    document.getElementById("msg4").innerHTML = 
    `✅ La funció async ha estat cridada i el resultat de la promesa serà imprès per la consola.`;
}
