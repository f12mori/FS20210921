class Calculadora {

    constructor() {
      this.total = 0;
      this.op = '+';
      this.pantalla = '0';      
      this.reset = true;
    }
  
    ponerdigito(num) {
      if (this.pantalla == "0" || this.reset) {
        this.pantalla = num;
        this.reset = false;
      } else {
        this.pantalla += num;
        
      }
    }
  
    operador(operacion) {
      let valor = parseFloat(this.pantalla);
      switch (this.op) {
        case "+":
          this.total += valor;
          break;
        case "-":
          this.total -= valor;
          break;
        case "*":
          this.total *= valor;
          break;
        case "/":
          this.total /= valor;
          break;
        case "%":
          this.total %= valor;
          break;
      }
      this.op = operacion;
      this.reset = true;
      this.pantalla = this.total.toString();
    }
  
    cambioOperador(num) {
      let valor = parseFloat(num);
      valor = -valor;
      num = valor.toString();
      this.pantalla = num;
      
    }
  
    borrar(variable){ 
        variable="0";
        this.total=0;
        this.op = '+';
        this.reset = true;
        this.pantalla = variable;
      }

    retroceso(variable) {
      let tamaño = variable.length;
      variable = variable.substr(0, tamaño -1);      
      if (tamaño<2) {
        variable = "0";
      }
  
      this.pantalla = variable;
    }
  
   
  }