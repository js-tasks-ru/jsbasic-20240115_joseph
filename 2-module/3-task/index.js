let calculator = {
  // ваш код
  oneArgumet : 0, 
  twoArgument : 0,
  read (a, b) {
    this.oneArgumet = a;
    this.twoArgument = b;
    return
  },
  sum () {return calculator.oneArgumet + calculator.twoArgument},
  mul () {return calculator.oneArgumet * calculator.twoArgument},
}
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально