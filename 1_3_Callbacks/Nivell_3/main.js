'use strict'
//Bloc 1.3: Callbacks
//Nivell 3

//EXERCICI 5
function majuscules(){

    let cadenaCaracters = document.getElementById("cadena").value;
    console.log(cadenaCaracters);

        function imprimirfrase(cadena){
            console.log(cadena);
            document.getElementById("msg1").innerHTML = cadena;
            }

        function processarCadena(cadena, callback){
            let fraseMaj = cadena.toUpperCase();
            callback(fraseMaj);
            };
        
        processarCadena(cadenaCaracters, imprimirfrase);
        document.getElementById("cadena").value = "";
    }

