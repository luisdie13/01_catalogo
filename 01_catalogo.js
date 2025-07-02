/**           Catálogo escolar        
 * 
 * La universidad quiere un catálogo que contenga material
 * de referencia rápida para cada escuela de la ciudad.
 * 
 * Necesitamos crear clases para primaria y secundaria.
 * Dado que estas clases comparten propiedades y métodos,
 * cada una heredará de una clase principal School.
 * Nuestra clase principal y tres clases secundarias
 * tienen las siguientes propiedades, getters, setters y
 * métodos:
 * 
 * Escuela (School)
 *  - Propiedades:
 *      - name (string)
 *      - level (una de tres cadenas: 'primary', 'middle' o 'high')
 *      - numberOfStudents (number)
 *  - Getters:
 *      - Todas las propiedades tienen getters.
 *  - Setters:
 *      - La propiedad numberOfStudents cuenta con un setter.
 *  - Métodos:
 *      - .quickFacts() y .pickSubstituteTeacher() (este es
 *         un método estático)
 * 
 * Primaria (Primary)
 *  - Incluye todo lo de la clase School, más una propiedad
 *    adicional.
 *  - Propiedad: pickupPolicy (string)
 * 
 * Medio (Middle)
 *  - No incluye propiedades ni métodos adicionales.
 * 
 * Secundaria (High)
 *  - Incluye todo lo de la clase School, más una 
 *    propiedad adicional.
 *  - Propiedad: sportsTeams (array de strings)
 */

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}

// Paso 14: Crear instancia de PrimarySchool
const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

// Paso 15: Llamar a quickFacts()
lorraineHansbury.quickFacts();

// Paso 16: Llamar al método estático pickSubstituteTeacher
const substituteTeacher = School.pickSubstituteTeacher([
  'Jamal Crawford',
  'Lou Williams',
  'J. R. Smith',
  'James Harden',
  'Jason Terry',
  'Manu Ginobli'
]);
console.log(`Substitute teacher: ${substituteTeacher}`);

// Paso 17: Crear instancia de HighSchool
const alSmith = new HighSchool('Al E. Smith', 415, [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field'
]);

// Paso 18: Obtener sportsTeams
alSmith.sportsTeams;

// Ejemplo de clase SchoolCatalog para el paso 19 opcional
class SchoolCatalog {
  constructor() {
    this._schools = [];
  }

  addSchool(school) {
    this._schools.push(school);
  }

  get schools() {
    return this._schools;
  }
}

// Ejemplo de uso de SchoolCatalog
const primaryCatalog = new SchoolCatalog();
primaryCatalog.addSchool(lorraineHansbury);

const highSchoolCatalog = new SchoolCatalog();
highSchoolCatalog.addSchool(alSmith);