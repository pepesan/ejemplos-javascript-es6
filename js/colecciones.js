//Colecciones
//mapas
var map = new Map(); 
map.set('nombre','valor'); 
map.get('name'); // valor


var map = new Map(); 
map.set("1",true); 
//has busca el indice
console.log(map.has("1")); //true

//Definición por constructor
var roles = new Map([ 
   ['r1', 'User'], 
   ['r2', 'Guest'], 
   ['r3', 'Admin'], 
]);  
console.log(roles.get('r2'))

for(let r of roles.entries()) {
    console.log(`${r[0]}: ${r[1]}`);
}


//Set conjuntos
'use strict' 
   let weakSet = new WeakSet();  
   let obj = {msg:"hello"}; 
   weakSet.add(obj); 
   console.log(weakSet.has(obj)); 
   weakSet.delete(obj); 
   console.log(weakSet.has(obj));



var  set = new Set(['a','b','c','d','e']);  
//iterador
var iterator = set.entries(); 
console.log(iterator.next());
iterator = set.values(); 
console.log(iterator.next());
iterator = set.keys(); 
console.log(iterator.next()); 