'use strict'
//Bloc 1.5: Array transformations
//Nivell 1

//EXERCICI 1
function ferMap(){
    const array1 = [1, 2, 3, 4];

    const quadrat = array1.map(x => x ** 2);
    console.log(quadrat);

    document.getElementById("msg1").innerHTML = 
    `<b>Quadrat de cada número</b> = ${quadrat.join(", ")}`;
}

//EXERCICI 2
function ferFilter(){
    const array2 = [1, 2, 3, 4];

    const parells = array2.filter(num => num % 2 == 0);
    console.log(parells);

    document.getElementById("msg2").innerHTML = 
    `<b>Números parells</b> = ${parells.join(", ")}`;
}

//EXERCICI 3
function ferFind(){
    const array3 = [1, 10 , 8, 11];

    const major10 = array3.find(num => num > 10);
    console.log(major10);

    document.getElementById("msg3").innerHTML = 
    `<b>Primer número més gran a 10</b> = ${major10}`;
}

//EXERCICI 4
function ferReduce(){
    const array4 = [13, 7, 8, 21];

    const suma = array4.reduce((a, b) => a + b);
    console.log(suma);
    
    document.getElementById("msg4").innerHTML = 
    `<b>Suma de tots els números</b> = ${suma}`;
}
