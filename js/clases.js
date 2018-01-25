//nueva definición de clase
class Polygon { 
   constructor(height, width) { 
      this.height = height; 
      this.width = width; 
   } 
}

var poli=new Polygon(200,300);
console.log(poli.height);
console.log(poli.width);

//Clases con métodos estáticos
'use strict' 
class StaticMem { 
   static disp() { 
      console.log("Static Function called") 
   } 
} 
StaticMem.disp() //invoke the static method


//tipos de objetos
class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log(" obj is an instance of Person " + isPerson); 

//herencia
class Shape { 
   constructor(a) { 
      this.Area = a
   } 
} 
class Circle extends Shape { 
   disp() { 
      console.log("Area of the circle:  "+this.Area) 
   } 
} 
var obj = new Circle(223); 
obj.disp() 



class Root { 
   test() { 
      console.log("call from parent class") 
   } 
} 
class Child extends Root {} 
class Leaf extends Child   

//indirectly inherits from Root by virtue of inheritance {} 
var obj = new Leaf();
obj.test() 


//sobre escritura de métodos del padre
class PrinterClass { 
   doPrint() { 
      console.log("doPrint() from Parent called… ");
   }
}
class StringPrinter extends PrinterClass { 
   doPrint() { 
      console.log("doPrint() is printing a string…"); 
   } 
} 
var obj = new StringPrinter(); 
obj.doPrint();


//uso de super
class PrinterClass { 
   doPrint() {
      console.log("doPrint() from Parent called…") 
   } 
}  
class StringPrinter extends PrinterClass { 
   doPrint() { 
      super.doPrint() 
      console.log("doPrint() is printing a string…") 
   } 
} 
var obj = new StringPrinter() 
obj.doPrint()