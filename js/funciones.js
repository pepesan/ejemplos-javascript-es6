/*
función impura
*/
var values={
    a:1
};
/*
    El parámetro items es un objeto con una propiedad llamada a que se multiplicará por 1 se le sumará 2;
*/
function impureFunction(items){
    var b=1;
    items.a=items.a*b+2;
    return items.a;
}
var values2={a:2};
var c=impureFunction(values);
console.log(c);
console.log(values.a);
c=impureFunction(values2);
console.log(c);


function pureFunction(a){
    var b=1;
    return a*b+2;
}
values.a=1;
c=pureFunction(values.a);
console.log(c);
c=pureFunction(7);
console.log(c);

/*
Funciones con parámetros por defecto
*/

function add(a, b = 1) { 
   return a+b; 
} 
console.log(add(4));
console.log(add(4,2));


//parámetros indefinidos en número
function fun1(...params) { 
   console.log(params.length); 
}  
fun1();  
fun1(5); 
fun1(5, 6, 7); 

//funciones lambda
var foo = (x)=>10+x;
/*
var foo=function (x){
    return 10+x;
}
*/
console.log(foo(10)) 


var disp = ()=>console.log("Hello World") 
disp();


//puedo invocar funciones que más tarde está definida
hoist_function();  
function hoist_function() { 
   console.log("foo"); 
} 



//funciones que se llaman a si mismas
var main = function() { 
   var loop = function() { 
      for(var x = 0;x<5;x++) {
         console.log(x); 
      } 
   }(); 
    //no se puede acceder a x fuera de la función
   //console.log("x can not be accessed outside the block scope x value is :"+x); 
} 
main();


//funciones generadoras 
function* rainbow() { 
   // the asterisk marks this as a generator 
   yield 'red'; 
   yield 'orange'; 
   yield 'yellow'; 
   yield 'green'; 
   yield 'blue'; 
   yield 'indigo'; 
   yield 'violet'; 
} 
for(let color of rainbow()) { 
   console.log(color); 
} 

//Esto es muy raro, pero substituye las variables
function* ask() { 
   const name = yield "What is your name?"; 
   const sport = yield "What is your favorite sport?"; 
   return `${name}'s favorite sport is ${sport}`; 
}  
const it = ask(); 
console.log(it.next()); 
console.log(it.next('Ethan'));  
console.log(it.next('Cricket')); 

/*
Generator started in paused stated; iterator is returned.

The it.next() yields “What is your name”. The generator is paused. This is done by the yield keyword.

The call it.next(“Ethan”) assigns the value Ethan to the variable name and yields “What is your favorite sport?” Again the generator is paused.

The call it.next(“Cricket”) assigns the value Cricket to the variable sport and executes the subsequent return statement.   
*/
