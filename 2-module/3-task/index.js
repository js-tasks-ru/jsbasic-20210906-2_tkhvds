let calculator = {
  read: function(a, b){
    this.numberA = +a;
    this.numberB = +b;
  },
  sum: function(){
    return this.numberA + this.numberB;
  },
  mul: function(){
    return this.numberA * this.numberB;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
