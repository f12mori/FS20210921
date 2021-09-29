describe('Pruebas de los ejercicios', function(){
    describe('Ejercicio 3', function(){
        it('Longitud 4 datos 3', function(){
            let vector=[3,3,3,3];

            let resultado=ejercicio3(4,3);
            expect(resultado).toEqual(vector)
        })
    })
})
