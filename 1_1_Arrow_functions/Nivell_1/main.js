'use strict'
//Bloc 1.1: Arrow functions
//Nivell 1

//EXERCICI 1
function sumar(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let add = (a, b) => a+b;
    
    document.getElementById("msg1").innerHTML = 
    `<b>La suma de ${a} i ${b} és ${add(a, b)} </b><br/>
    *La funció fletxa utilitzada és: <i>let add = (a, b) => a+b</i>` ;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

//EXERCICI 2
function numRandom(){

    let randomNumber = () => Math.floor(Math.random()*100);

    document.getElementById("msg2").innerHTML = 
    `<b>El número random és: ${randomNumber()}</b><br/>
    *La funció fletxa utilitzada és: <i>let randomNumber = () => Math.floor(Math.random()*100)</i>`;
}

//EJERCICIO 3
function saludar(){

    let nom = document.getElementById("nombre").value;

    class Person {
        name;
        constructor(name){
            this.name = name;
        }

    //Método
    greet = () =>
        `Hola, ${this.name}`;
    }

    const persona = new Person(nom);
    console.log(persona.greet());

    document.getElementById("msg3").innerHTML = 
    `<b>${persona.greet()}!</b><br/>` + 
    "*La funció fletxa utilitzada és: greet =()=>`Hola, ${this.name}`";

    document.getElementById("nombre").value = "";
}

