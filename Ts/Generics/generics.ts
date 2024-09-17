// Los genéricos son plantillas de código que puedes definir
//  y reutilizar en todo tu código. Proporcionan una manera de indicar a las funciones, clases o interfaces qué
//   tipo quiere usar al llamarlas.

function getArray (items:any[]):any[]{
    return new Array().concat(items)
}

let numberArray=getArray([1,2,4,2])
numberArray.push('ds'); // hasta aqui no peta porque estoy poniendo any

function getArray2<T> (items:T[]): T[]{
    return new Array<T>().concat(items)
}
let numberArray2 = getArray2([1, 2, 4, 2]);
//numberArray2.push("ds"); esto no lo permite ya que por inferencia entiende que espera 

//Usando varias variables de tipo
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "Hello!");
let returnString = identity<string, string>("100", "Hola!");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");

/*
returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'


*/
//Para que el generico solo acepte un intervalo de tipos

type tipoextendido=number|string
function identity2<T extends tipoextendido, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
//Esto por ejemplo no es posible declararlo debido a que T no cepta boolean
//let returnBoolean = identity<boolean, string>(true, "Bonjour!");
//..................

//Restrigiendo un tipo a la propiedad de otro objeto  (extends con el operador keyof)
function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}  // en este ejemplo se dice literalmente que T[k] es valido

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
console.log(getPets(pets1, "fish"));  // Returns 6

//............