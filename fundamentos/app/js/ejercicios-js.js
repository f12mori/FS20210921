    //ejercicio1
    function random(min, max) {
        console.log(min)
        return Math.floor(Math.random() * (max - min)) + min;
    }


    function ejercicio2(num){
        
        for (let step = 0; step < 10; step++) {
            
            let valor1 = prompt("Intento "+step+1);
            
            if(intentoNumero(valor1, num)==0){
            return "Acertaste";}

          }
          return "Fallaste";
    }

    function intentoNumero(numero, numeroRandom){

        if(numero==numeroRandom){
            console.log("Acertaste")
            return 0;
        }else{ if(numero<numeroRandom){
                console.log("Prueba un numero mayor")
                

            }else{
                
                console.log("Prueba un numero menor")}
                return 1;
        }
       

    }

   
    function ejercicio3(tamaño, numero){
        if(typeof longitud !== 'number') return 'ERROR de longitud';
        let array = new Array(tamaño);

            for (let step = 0; step < tamaño; step++) {
            array[step]= numero;
            return array;
          }
     }

    //Ejercicio 5
    function nif(dni) {
        let numero;
        let letr;
        let letra;
        let expresion_regular_dni;
    
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    
        if(expresion_regular_dni.test (dni) == true){
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
            alert('la letra del NIF no es correcta');
        }else{
            alert('Se validó');
        }
        }else{
        alert('Dni incorrecto');
        }
    }


  //ejercicio6
  function palindromo(palabra){
	palabra=palabra.toLowerCase();
 
	// eliminamos los espacios en blanco
	palabra=palabra.replace(/ /g, "");
 
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
  


