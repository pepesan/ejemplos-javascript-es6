var promise = new Promise(
    function(resolve , reject) {    
        // Aquí va el código que podría fallar, la petición o lo que sea  
        setTimeout(function(){
            resolve("¡Éxito!"); // ¡Todo salió bien!
        }, 2500);

    }
);  
console.log(promise);
//en el caso de que se haya ejecutado el resolve
promise.then(
    function(datos){
        console.log("Datos: "+datos);
    }
    //en el catch es cuando ha ocurrido un fallo
).catch(
    function(error){
        console.log("error:"+error.message);
    }
);