// declaracion de interfaz gen[erica 

interface Identity <T,U>{
    value:T,
    message:U
}

//Declarar dos objetos utilizando la interfaz como tipo de objeto
const number:Identity<number,string>={value:2,message:'231'}

//Declaracion de una interfaz como un ....tipo de funcion....
interface funcionGenerica<T,U>{
    (value:T,message:U):T;  // aqui declara el tipo de la funcion 
}
// Declaracion de function generica 
function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
//.............uso de dos anteriores
let processor: funcionGenerica<number, string> = processIdentity;

//................Declaracion de interfaz generica como tipo de clase.................
interface ProcessIdentity<T, U> {
  value: T;
  message: U;
  process(): T;
}
class processIdentity2<X, Y> implements ProcessIdentity<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value;
  }
}

/*
Conclusiones
tenemos interfaz 
interfaz como tipo
interfaz siendo implementada por clases
interfaces extendiendo de interfaces
interfaces para funciones o conjunto de funciones

..... de manera generica tenemos
interfaces genericas como tipos 
funciones genericas
interfaces de funciones genericas
clases genricas
clases genericas implementando interfaces genericas

*/