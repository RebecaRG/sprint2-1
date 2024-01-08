'use strict'
//Bloc 1.7: Promises & Async/Await
//Nivell 2

//EXERCICI 5
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

async function asyncHola(){
    try{
        console.log("Funció async cridada");
        const missatgeAsync = await diguesHolaMon();
        console.log(missatgeAsync);
    } catch(err){
        console.log(err);
    }
};

function imprimir(){
    asyncHola();
    document.getElementById("msg1").innerHTML = 
    `✅ La funció async ha estat cridada i el resultat de la promesa serà imprès per la consola.`;
}
