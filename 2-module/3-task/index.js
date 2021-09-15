let calculator = {
  read: function(a, b){
    this.NumberA = +a;
    this.NumberB = +b;
  },
  sum: function(){
    return this.NumberA + this.NumberB;
  },
  mul: function(){
    return this.NumberA * this.NumberB;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
