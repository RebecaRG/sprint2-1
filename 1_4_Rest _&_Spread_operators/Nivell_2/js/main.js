'use strict'
//Bloc 1.4: Rest & Spread operators
//Nivell 2

//EXERCICI 3
const objectes = [];
function crear(){
        let nom, color;
        let objecte1;

        nom = document.getElementById("nombre").value;
        color = document.getElementById("col").value;

        objecte1 = new Objecte(nom, color);
        alert("Objecte creat!");

        objectes.push(objecte1);
        console.table(objectes);

        document.getElementById("nombre").value = "";
        document.getElementById("col").value = "";
}

function copiar(){
    let objecte2 = { ...objectes[0]};
    objectes.push(objecte2);
    console.table(objectes);
    alert("Objecte1 copiat i Objecte2 creat!")
}

function canviar(){
    let nomNou = document.getElementById("nuevoNombre").value;
    objectes[1].nom = nomNou;
    console.table(objectes);
    alert("Objecte2 modificat!");
    document.getElementById("nuevoNombre").value = "";
    }

function imprimir(){
    document.getElementById("msg1").innerHTML = 
    `- El nom de l'Objecte1 és <b>${objectes[0].nom}</b> i el color és <b>${objectes[0].color}</b>.</br>
    - El nom de l'Objecte2 és <b>${objectes[1].nom}</b> i el color és <b>${objectes[1].color}</b>.`;
    console.table(objectes);
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

function assignar(){
    let a, b, rest;
    [a, b, ...rest] = arrayNum;
    console.log(a);
    console.log(b);
    console.log(rest);
    document.getElementById("msg3").innerHTML = 
    `Primera variable = [${a}]</br>
    Segona variable = [${b}]</br>
    Tercera variable = [${rest}]</br>`
}