'use strict'
class Objecte {
    constructor(nom, color) {
    this.nom = nom;
    this.color = color;
    }
  //Getters 
    getNom() {
    return this.nom;
    }
    getColor() {
    return this.color;
    }

  //Setters
    setNom(nom) {
    this.nom = nom;
    }
    setColor(color) {
    this.color = color;
    }
}