'use strict'
class Caracteristiques {
    constructor(anys, altura, pes) {
    this.anys = anys;
    this.altura = altura;
    this.pes = pes;

    }
  //Getters 
    getAnys() {
    return this.anys;
    }
    getAltura() {
      return this.altura;
      }
    getPes() {
    return this.pes;
    }

  //Setters
    setAnys(anys) {
    this.anys = anys;
    }
    setAltura(altura) {
    this.altura = altura;
    }
    setPes(pes) {
      this.pes = pes;
      }
}