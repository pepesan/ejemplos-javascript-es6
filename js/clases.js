//antigua definición
/*
var Polygon=function(height, width){
    this.height = height; 
    this.width = width; 
}
*/
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
StaticMem.disp(); //invoke the static method
class Pepito{
    construct(){
        StaticMem.disp();
    }
}

//tipos de objetos
class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log(" obj is an instance of Person " + isPerson); 

//herencia
class Madre { 
   constructor(area) { 
      this.area = area;
   } 
} 
class Hija extends Madre { 
   disp() { 
      console.log("Area of the circle:  "+this.area) 
   } 
} 
var obj = new Hija(223); 
console.log(obj);
obj.disp();



class Root { 
   test() { 
      console.log("call from parent class");
   } 
} 
class Child extends Root {} 
class Leaf extends Child  {} 

//indirectly inherits from Root by virtue of inheritance {} 
obj = new Leaf();
obj.test() ;


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
class PrinterClass2 { 
   doPrint() {
      console.log("doPrint() from Parent called…") 
   } 
}  
class StringPrinter2 extends PrinterClass2 { 
   doPrint() { 
      super.doPrint() 
      console.log("doPrint() is printing a string…") 
   } 
} 
var obj = new StringPrinter2() 
obj.doPrint()




class Animal{
    constructor(edad=0){
        this.edad=edad;
    }
}

var animalico=new Animal(2);
console.log(animalico);

class Gato extends Animal{
    constructor(edad=0, rascador=true){
        super(edad);
        this.rascador=rascador;
    }
}
var gatete=new Gato(12,false);
console.log(gatete);






