'use strict'; 

let persona = {
    nombre: "nombre",
    nacimiento: new Date('2006-09-11'), 
    hobbies: ["comer", "domir", "jugar"],
    edad: function(){
        let diferencia = new Date() - this.nacimiento; 
        let anos = diferencia / (1000*60*60*24*365);
        return Math.trunc(anos); 
    },
    saludar: function(){
        return `Hola, me llamo ${this.nombre} y me gusta ${this.hobbies}`;
    }


}

//prueba primer objeto

console.log(persona.edad()); 
console.log(persona.saludar()); 

console.log("");

function Persona2 (nombre, nacimiento, hobbies ){
    this.nombre = nombre; 
    this.nacimiento = nacimiento; 
    this.hobbies = hobbies; 
    this.edad =function(){
        let diferencia = new Date() - this.nacimiento; 
        let anos = diferencia / (1000*60*60*24*365);
        return Math.trunc(anos); }
    this.saludar = function(){
         return `Hola, me llamo ${this.nombre} y me gusta ${this.hobbies}`;
    }
}

let brylin = new Persona2("Brylin" , new Date('2002-12-12'), 
    ["Comer chetos ", "Comer doritos"]
); 
console.log(brylin.edad());
console.log(brylin.saludar());
class Persona3 {
    constructor(nombre, nacimiento, hobbies){
        this.nombre = nombre; 
        this.nacimiento = nacimiento; 
        this.hobbies = hobbies; 
        this.edad = (function (){
            let diferencia = new Date() - nacimiento; 
        let anos = diferencia / (1000*60*60*24*365);
        return Math.trunc(anos); 
        })(); 

    }
    saludar (){
        return `Hola, me llamo ${this.nombre} y me gusta ${this.hobbies}`;
    }
}

let brel  = new Persona3("Brel", new Date('2001-12-12'), 
["pecar", "comer", "fumar"]);
console.log(brel.edad); 
console.log(brel.saludar()); 


//EJERCICIO 2 
function Animal (tipo, nombre){
    const tipoAnimal = "animal"; 
    const tipoPerro = "perro"; 
    const tipoGato = "gato" ;
    this.tipo = tipo; 
    this.nombre = nombre; 
    this.comer = function(){
        return `${this.nombre} está comiendo. `; 
    }
    this.domir = function(){
        return `${this.nombre} está durmiendo`; 
    }
    this.hacerRuido = function(){
        if(this.tipo == tipoPerro){
            return `${this.nombre} GUAU GUAU`; 
        }else if(this.tipo == tipoGato){
            return `${this.nombre} MIAU MIAU`; 
        }else{
            return `${this.nombre} What does the fox says? `; 
        }
    }


}


let gato = new Animal("gatod", "browny"); 
console.log(gato.comer());
console.log(gato.domir());
console.log(gato.hacerRuido());
 Animal.prototype;

class Animal2{
    static tipoAnimal = "animal"; 
    static tipoPerro = "perro"; 
    static tipoGato = "gato" ;
    constructor(tipo, nombre){
        static 
        this.tipo = tipo; 
        this.nombre = nombre; 
    }
    comer(){
        return `${this.nombre} está comiendo. `; 
    }
    dormir(){
         return `${this.nombre} está durmiendo`; 
    }
    hacerRuido(){  
        if(this.tipo == tipoPerro){
            return `${this.nombre} GUAU GUAU`; 
        }else if(this.tipo == tipoGato){
            return `${this.nombre} MIAU MIAU`; 
        }else{
            return `${this.nombre} What does the fox says? `; 
        }

    }
    
}

