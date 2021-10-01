describe('Prueba calculadora',function(){
    
    describe('operaciones ', function(){
        it('Suma', function(){
                      
            expect(suma(2,2)).toEqual(4)
        })
        it('Resta', function(){
                      
            expect(resta(2,2)).toEqual(0)
        })
        it('Multiplica', function(){
                      
            expect(multiplicacion(2,2)).toEqual(4)
        })
        it('Divide', function(){
                      
            expect(division(2,2)).toEqual(4)
        })
    })
    

})