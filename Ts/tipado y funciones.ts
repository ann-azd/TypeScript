const nombre:String ='Hola'

const hola:string='df  '

hola.trim();

let n='wdewe'


//inferencia

const a=5;
const b=4;
const c=a+b //tambien c es numero 

//funciones
function saludar(name:string):void{
    console.log(`hola ${name}`)
}
saludar('Laura')

function tulio ({nombre,edad}:{nombre:string,edad:number}){
    console.log(`Este es ${nombre} y su edad es ${edad}`)
    return edad 
}

let username:number
username=tulio({nombre:'tulio',edad:4})

const funcion1=(funcion2 :(nombre:string)=>void)=>{ // aqui al lado de funcion2 definimos el tipado de la funcion
    return funcion2('Miguel')
}
funcion1((nombre:string)=>{console.log(`hola ${nombre}`)})

//return void y never no es o mismo , el never no llega al return implicito 

//Dos formas de tipar una funcion
const sumar=(a:number,b:number):number=>{
    return a+b;
}
const sumar2=(a:number,b:number)=>{
    return a+b;
}

const restar:(a:number,b:number)=>number=(a,b)=>{
   return a-b
}

//Inferencia de funciones anonmas'
const hamsters=['Susi','Tulio','Lucha Chispin']
hamsters.forEach(hamster=> {
    console.log(hamster.toUpperCase())}) //sabe que hamsters es un array de string
