/*
Comentario de varias lineas
*/
//Comentario de una linea
//hola mundo
console.log("hello world") ;
//console.log();
console.log("We are learning ES6");
//Uso de variable sin declarar
v="variable";
"use strict";
//si no se declara la variable en modo estricto falla
var x="variables"

//ES6 dispone de "hoisting" es decir permite utilizar algo que no se haya declarado con anterioridad, excepto si se ha activado el modo estricto

//Definición de una variable dentro de un bloque de código
let foo="bar";
//Definición de una constante dentro de un bloqie de código
const bar="foo";


const key = 'abc123';
let points = 50;
let winner = false;

if(points > 40) {
    let winner = true
    console.log(winner);
    winner=false;
    console.log(winner);
    winner=true;
    console.log(key);
    //no puedo modificar key porque es una constante
    //key="123";
}
console.log(winner);


//Cosas curiosas con las constantes
const person = {
  name: 'Wes',
  age: 28
};
//puedo modificar age porque no es la "constante" pero no podría modificar person
person.age = 29;
console.log(person.age);

//cosas cusriosas con let
let no = 10; 
//no puedo redeclarar la variable porque se ha declarado anteriormente
//let no = 20; 
console.log(no);

var main = function() { 
   for(var x = 0;x<5;x++) { 
      console.log(x); 
   } 
   console.log("x can be accessed outside the block scope x value is :"+x); 
   console.log('x is hoisted to the function scope'); 
} 
main();     