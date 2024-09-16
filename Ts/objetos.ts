//Objetos
//Type Alias
type Heroe = {
  readonly id?: HeroId; // oedad solo de lectura
  fuerte: string;
  age: number;
  activo?: boolean;
  velo?:velocidad; //esto es una propiedad opcional
};
// function crearheroe(fuerte:string,age:number):Heroe{

//     return{fuerte,age}
// }

// const thor = crearheroe('Thor',123)


function crearheroe(heroe:Heroe):Heroe{
   const {fuerte,age}=heroe 

    return{id:crypto.randomUUID(), fuerte,age,activo:true}
}

const thor = crearheroe({fuerte:'Thor',age:123})
const thor2 =Object.freeze( crearheroe({ fuerte: "Thor", age: 123 })); // esto vuelve a todo el objeto de solo lectura 
console.log(thor.activo)
thor.id?.toString(); 
thor.id?? 'no tiene' // para dar valor por defecto

//Template unior type
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

//Union types
type velocidad='poco'|'medio'|'alto' //escala de valores

let ff:number|string // puede ser uno u otro
let fff: 2 | string; 
thor.velo="medio"

//Extender las propiedades de un type

type TulioCaracteristicas = {
   // oedad solo de lectura
  
  activo?: boolean;
  velo?: velocidad; //esto es una propiedad opcional
};

type TulioPropiedades = {
  readonly id?: HeroId;
  fuerte: string;
  age: number;
};

type Tulio = TulioCaracteristicas & TulioPropiedades;

function crearTulio(imput: TulioPropiedades): Heroe {
  const { fuerte, age } = imput;

  return { id: crypto.randomUUID(), fuerte, age, activo: true };
}

//Reutilizar partes de un Type  *Type index
// type jjj = {
//   g: number;
//   gg: number;
// };

type hola={
    q:boolean
    qq:{
        g:number
        gg:number
    }
}
const Q:hola['qq']= {g:3,gg:5}

//Type from valor
const objeto={
    propiedad1:'wewe',
    propiedad2:'fdfd'
}

type nuevo= typeof objeto
// para crear un tipo a partir del retorno de una funcion 

function kaka(){
    return {a:'fd',b:'fsd'}
}
type kaka2= ReturnType<typeof kaka>

//Array 
 
const lenguajes :string[]=[] //este es un arrgelo inicializado como vacio con el tipo definido
lenguajes.push('tuliesky')

const lenguajes2: (string|number)[] = []; //si queremos que el arrglo acepte dos tipos 
lenguajes.push("tuliesky");


//Cerito y cryz tipado
/*
[
[x,0,x], //String[]
[x,0,x], String[]
[x,0,x] String[]
]

*/

type celda='x'|'0'|''

const juego:celda[][]=[
['x','0','x'], //String[]
['x','0','x'],
['x','0','x'] 
]
const juego3: Array<Array <celda>> = [ // otra sintaxis 
  ["x", "0", "x"], //String[]
  ["x", "0", "x"],
  ["x", "0", "x"],
];

//hacerlo con tuplas
type tablero = [
  [celda, celda, celda], //String[]
  [celda, celda, celda],
  [celda, celda, celda]
];
const juego2:tablero= [
  ["x", "0", "x"], 
  ["x", "0", "x"],
  ["x", "0", "x"],
];
