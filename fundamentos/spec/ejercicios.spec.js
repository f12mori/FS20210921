describe('Pruebas de los ejercicios', function(){
    describe('Ejercicio 3', function(){
        it('Longitud 4 datos 3', function(){
            let vector=[3,3,3,3];

            let resultado=ejercicio3(4,3);
            expect(resultado).toEqual(vector)
        })
    })

    describe('Ejercicio 4', function(){
        it('Prueba primos', function(){
            let vector=[0,1,2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
            let pasa=true;
            let resultado=ejercicio4(4);
            for(let step = 0; step < resultado.length; step++){
                if(vector[step]!=resultado[step]){
                    pasa=false;
                }
            } 
            expect(pasa).toEqual(true);           
        })
    })

    describe('Ejercicio 5', function(){
        it('Validar NIF', function(){
            
            
            expect(nif("47846555p")).toEqual(true);           
        })
    })

})
