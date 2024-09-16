import { SerVivo } from "./interfaz";
class Animal implements SerVivo {

readonly _name:string;
 _species:string; //esto no lo vuelve provado para ts
 edad=3 // es utilizado para mantener su visibilidad dentro de la clase y las que hereden de ella
 casa:'cuba'
 
  constructor(name: string, species: string) {
    this._name = name;
    this._species = species;
  }

  // Getter para el nombre
  get name() {
    return this._name;
  }

  // Setter para el nombre
  // set name(newName) {
  //   if (newName.trim() === "") {
  //     throw "El nombre no puede estar vacío";
  //   }
  //   this._name = newName;
  // }

  // Getter para la especie
  get species() {
    return this._species;
  }

  // Setter para la especie
  set species(newSpecies) {
    if (newSpecies.trim() === "") {
      throw "La especie no puede estar vacía";
    }
    this._species = newSpecies;
  }

  // Método para mostrar información del animal
  info() {
    return `${this._name} es un ${this._species}.`;
  }
}

// Ejemplo de uso
const miAnimal = new Animal("Firulais", "Perro");
console.log(miAnimal.info()); // Firulais es un Perro.

// miAnimal.name = "Max";
miAnimal.species = "Gato";
console.log(miAnimal.info()); // Max es un Gato.

const Tulio= new Animal('Tulio','Hnaster')

// las interfaces se pueden usar combinadas con clases 
// de esta forma las clases implementan las interfaces


