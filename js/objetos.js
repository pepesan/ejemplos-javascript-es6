//Construyendo un objeto de 0
var myCar = new Object(); 
myCar.make = "Ford"; //define an object 
myCar.model = "Mustang"; 
myCar.year = 1987;  

console.log(myCar["make"]) //access the object property 
console.log(myCar["model"]) 
console.log(myCar["year"])

//creando una clase por su constructor
function Car() { 
   this.make = "Ford" 
   this.model = "F123" 
}  
var obj = new Car() 
console.log(obj.make) 
console.log(obj.model)

//Object.create
var roles = { 
   type: "Admin", // Default value of properties 
   displayType : function() {  
      // Method which will display type of role 
      console.log(this.type); 
   } 
}  
// Create new role type called super_role 
var super_role = Object.create(roles); 
super_role.displayType(); // Output:Admin  

// Create new role type called Guest 
var guest_role = Object.create(roles); 
guest_role.type = "Guest"; 
guest_role.displayType(); // Output:Guest


//clonando objetos
"use strict" 
var det = { name:"Tom", ID:"E1001" }; 
var copy = Object.assign({}, det); 
console.log(copy);  
for (let val in copy) { 
   console.log(copy[val]) 
}

//fusionando objetos
var o1 = { a: 10 }; 
var o2 = { b: 20 }; 
var o3 = { c: 30 }; 
var obj = Object.assign(o1, o2, o3); 
console.log(obj);  
console.log(o1);

//borrando propiedades
// Creates a new object, myobj, with two properties, a and b. 
var myobj = new Object; 
myobj.a = 5; 
myobj.b = 12; 

// Removes the ‘a’ property 
delete myobj.a; 
console.log ("a" in myobj) // yields "false"


//comparando objetos
var val1 = {name: "Tom"}; 
var val2 = {name: "Tom"}; 
console.log(val1 == val2)  // return false 
console.log(val1 === val2)  // return false


var val1 = {name: "Tom"}; 
var val2 = val1  

console.log(val1 == val2) // return true 
console.log(val1 === val2) // return true

//desestructurando objeto
var emp = { name: 'John', Id: 3 } 
var {name, Id} = emp ;
console.log(name) ;
console.log(Id);