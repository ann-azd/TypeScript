//Objetos
//Type Alias
type Heroe={ 
   readonly id?:number // oedad solo de lectura
    fuerte:string,
    age:number
    activo?:boolean //esto es una propiedad opcional
}
// function crearheroe(fuerte:string,age:number):Heroe{

//     return{fuerte,age}
// }

// const thor = crearheroe('Thor',123)


function crearheroe(heroe:Heroe):Heroe{
   const {fuerte,age}=heroe 

    return{fuerte,age,activo:true}
}

const thor = crearheroe({fuerte:'Thor',age:123})
const thor2 =Object.freeze( crearheroe({ fuerte: "Thor", age: 123 })); // esto vuelve a todo el objeto de solo lectura 
console.log(thor.activo)
thor.id?.toString();