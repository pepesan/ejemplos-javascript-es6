var promise = new Promise(function(resolve , reject) {    
   // do a thing, possibly async , then..  
    if(1==1){
       resolve("stuff worked");  
    }else{   
        reject(Error("It broke"));  
    }
});  
console.log(promise);
promise.then(
    function(datos){
        console.log(datos);
    }
);
// Give this to someone