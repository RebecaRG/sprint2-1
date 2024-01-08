'use strict'
class Dades {
    constructor(nom, primerCognom,segonCognom) {
    this.nom = nom;
    this.primerCognom = primerCognom;
    this.segonCognom = segonCognom;
    }

  //Getters 
    getNom() {
    return this.nom;
    }
    getPrimerCognom() {
      return this.primerCognom;
      }
    getSegonCognom() {
    return this.segonCognom;
    }

  //Setters
    setNom(nom) {
    this.nom = nom;
    }
    setColor(primerCognom) {
    this.primerCognom = primerCognom;
    }
    setColor(segonCognom) {
      this.segonCognom = segonCognom;
      }
}