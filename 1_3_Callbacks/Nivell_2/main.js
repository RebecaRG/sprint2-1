'use strict'
//Bloc 1.3: Callbacks
//Nivell 2

//EXERCICI 3
function boto(){

    let nombreIntro = document.getElementById("nom").value;

    function saludar (nombre){
        let mensaje = "Hola, "+ nombre + "!";
        console.log(mensaje);
        document.getElementById("msg1").innerHTML = mensaje;
    }
    function esperarIsaludar(nombre, callback){
    setTimeout(callback, 2000, nombre);
    }

    esperarIsaludar(nombreIntro, saludar);

    document.getElementById("nom").value = "";
}

//EXERCICI 4
const arrayNum = [];
function intro(){
    let numeroIntro = Number(document.getElementById("num").value);
    arrayNum.push(numeroIntro);

    document.getElementById("num").value = "";

    console.log(arrayNum);
    document.getElementById("msg2").innerHTML = `Array = [${arrayNum}]`;
}

function processar(){
    function imprimirLista(elemento){
        console.log(elemento);
        document.getElementById("msg3").innerHTML += `${elemento}</br>`;
        }
    //S'imprimeixen els elements del Array a l'html en forma de llista (un a sota de l'altre).

    function processarElements(array, callback){
        array.forEach(function(elemento){
            callback(elemento);
        });
    }

    processarElements(arrayNum, imprimirLista);
}
