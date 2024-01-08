'use strict'
//Bloc 1.5: Array transformations
//Nivell 2

//EXERCICI 5
const array = [1,3,7,10,15,17,11,5,8,12,9];

const calcular = array.filter(num => num >= 10).map(x => x * 2).reduce((a, b) => a + b);

function retorn(){
    console.log(calcular);
    document.getElementById("msg1").innerHTML = 
    `<b>El resultat de la suma és</b> = ${calcular}`;
}

