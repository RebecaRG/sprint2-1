'use strict'
//Bloc 1.4: Rest & Spread operators
//Nivell 3

//EXERCICI 5
let nam = "";
let lastName = "";
const cualidades = [];

function persona(nom, cognom, ...qualitats){
    let imprimir =
    `<b>Nom i Cognom:</b> ${nom} ${cognom}</br>
    <b>Qualitats personals:</b> ${qualitats.join(", ")}`;

    return imprimir;
}
function guardar(){
        nam = document.getElementById("nombre").value;
        console.log("Nom: " + nam);
        lastName = document.getElementById("apellido").value; 
        console.log("Cognom: " + lastName);
        let introQua1 = document.getElementById("qua1").value;
        let introQua2 = document.getElementById("qua2").value;
        let introQua3 = document.getElementById("qua3").value;
        cualidades.push(introQua1);
        cualidades.push(introQua2);
        cualidades.push(introQua3);
        console.log("Qualitats: " + cualidades);

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("qua1").value = "";
        document.getElementById("qua2").value = "";
        document.getElementById("qua3").value = "";
}

function imprimir(){
    document.getElementById("msg1").innerHTML = persona(nam, lastName, ...cualidades);
}

//EXERCICI 6
let dades;
let caract;
let fusioObjectes;
function crearObjecte1(){
    let nom = document.getElementById("nombreClase").value;
    let primerCognom = document.getElementById("apellido1Clase").value;
    let segonCognom = document.getElementById("apellido2Clase").value;

    dades = new Dades(nom, primerCognom,segonCognom);
    alert("Objecte creat!");
    console.log(dades);

    document.getElementById("nombreClase").value = "";
    document.getElementById("apellido1Clase").value = "";
    document.getElementById("apellido2Clase").value = "";
}
function crearObjecte2(){
    let anys = Number(document.getElementById("edatClase").value);
    let altura = Number(document.getElementById("alturaClase").value);
    let pes = Number(document.getElementById("pesClase").value);
    
    caract = new Caracteristiques(anys, altura, pes);
    alert("Objecte creat!");
    console.log(caract);

    document.getElementById("edatClase").value = "";
    document.getElementById("alturaClase").value = "";
    document.getElementById("pesClase").value = "";
}
function fusionar(){
    fusioObjectes = {...dades, ...caract};
    console.log(fusioObjectes);
    document.getElementById("msg2").innerHTML = 
    `<b>Nom:</b> ${fusioObjectes.nom}</br>
    <b>Primer Cogom:</b> ${fusioObjectes.primerCognom}</br>
    <b>Segon Cogom:</b> ${fusioObjectes.segonCognom}</br>
    <b>Edat:</b> ${fusioObjectes.anys} anys</br>
    <b>Alçada:</b> ${fusioObjectes.altura}cm</br>
    <b>Pes:</b> ${fusioObjectes.pes}kg</br>`;
}
