'use strict'
//Bloc 1.5: Array transformations
//Nivell 3

//EXERCICI 5
const array = [11, 12, 13, 14]; 
const major10 = num => num > 10; 

function every(){
    let totsMajor10 = array.every(major10);
    console.log("TOTS majors que 10? " + totsMajor10);
    document.getElementById("msg1").innerHTML = 
    (totsMajor10)? "Tots els números són majors que 10." : "Tots els números no són majors que 10.";
}

function some(){
    let algunsMajor10 = array.some(major10);
    console.log("ALGUNS majors que 10? " + algunsMajor10);
    document.getElementById("msg2").innerHTML = 
    (algunsMajor10)? "Alguns dels números són majors que 10." : "Cap número és més gran que 10.";
}



