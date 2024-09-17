//las tuplas son mutables 
type RGB= readonly[number,number,number]
const black:RGB=[3,5,2]

//sin embargo RGB como typo no es inmutable
//black.push(4); // lo acepta lo cual no deberia ser posible



//Asi se haria en JS
const ERROR_TYPES={
    NOT_FOUND:'no hay',
    ERROR1:'conocer a ana',
    ERROR2:'no conocer a ana'
}

function mostrarMensaje (tipoDeError:String){
    if (tipoDeError == ERROR_TYPES.ERROR1) console.log("error 1 ok");
    else if (tipoDeError == ERROR_TYPES.ERROR2) console.log("error 2 ok");
}

// Enums, pueden compilarse a js o no depende de como se haga
const enum ERROR_TYPES2{ //se utiliza para coleccion de datos finitos, conocidos, no dinamicos
    NOT_FOUND,
    ERROR1,
    ERROR2
}
function mostrarMensaje2(tipoDeError: ERROR_TYPES2) {
  if (tipoDeError == ERROR_TYPES2.ERROR1) console.log("error 1 ok");
  else if (tipoDeError == ERROR_TYPES2.ERROR2) console.log("error 2 ok");
}

//Aserciones de tipos 

//EJemplo con canvas
const canvas=document.getElementById('canvaaaa') 
// esto retorna null sino lo encuentra y HTMLElement si lo encuentra

//?? como sabe TS que realmente estas recuperando un elemento canvas
/* La solucion es decirle con as el tipo de retorno

const canvas=document.getElementById('canvaaaa') as HTMLCanvasElement
hacerlo la acercion aqui dejaria fuera al null lo mejor es hacerlo abajo
una vez que ya se comprobó que no habia null

*/

if (canvas!=null){
    const ctx=(canvas as HTMLCanvasElement).getContext('2d')
}
// El problema es que ts no es capaz de reconocer si este cambio es realmente valido
// asi que lo mejor seria hacerlo con instanceof
if ( canvas instanceof HTMLCanvasElement)  { //deduce que canva es htmlcanva
  const ctx = canvas.getContext("2d");
}

//typeof para tipos
//instanceof para instancias

//Definicion de contratos de objetos con interfaces 

interface producto
{
id:number,
nombre:string,
precio:number
}

interface carrito {
  preciototal: number;
  productos: (producto | cuboRubik)[];
}

const carrito1: carrito = {
  preciototal: 342,
  productos: [
    { id: 34, nombre: "cosa", precio: 43 },
    { id: 34, nombre: "cubo", precio: 43 ,marca:'rubiks'},
  ],
  
};

//Una ventaja por encima de los tipos es que permite extender
interface cuboRubik extends producto{
    marca:string;
    nivel:number;
}
 
//funciones en las interfaces
interface OperacionesCarrito {
  add: (p: producto) => void; // otra forma es add(p:producto):void
  remove: (id: number) => void;
  clear: () => void;
}

const operaciones: OperacionesCarrito={
   add: (p: producto) => {}, // otra forma es add(p:producto):void
  remove: (id: number) => {},
  clear: () => {}, 
};


//narrowin
function mostrarLong(objeto:number|string)
{
    if(typeof objeto =='string') //esto es como hacer un embudo
  return objeto.length      
}

mostrarLong(1);
//.....................................................
interface mario{
    company:"nintendo", //siempre tiene que ser nintendo en este ejemplo
    nombre:string,
    saltar:()=>void
}

interface sonic {
  company: string; //siempre tiene que ser nintendo en este ejemplo
  nombre: string;
  correr: () => void;
}

type personaje= mario|sonic

function jugar(per:personaje){
    console.log(per.company) // no es posible correo o saltar porque el tipo personaje hace referencia a las dos intefaces

}

//type guard
//esto comprueba si personaje es sonic
//esta funcion discrimina el tipo
function checkidentidadSonic(per:personaje):per is sonic
{ return (per as sonic).correr!= undefined

}
function jugartypeguard(per: personaje) {
    if(checkidentidadSonic(per))
        per.correr()
    else {
        per.saltar() 
    }
    
}

//tipo necer 
