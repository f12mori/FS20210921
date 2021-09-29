
function ejercicio2(num) {

    for (let step = 0; step < 10; step++) {
        let valor1 = prompt("Intento " + step + 1);
        if (intentoNumero(valor1, num) == 0) {
            return "Acertaste";
        }
    }
    return "Fallaste";
}

function intentoNumero(numero, numeroRandom) {

    if (numero == numeroRandom) {
        console.log("Acertaste")
        return 0;
    } else {
        if (numero < numeroRandom) {
            console.log("Prueba un numero mayor")
        } else {
            console.log("Prueba un numero menor")
        }
        return 1;
    }
}