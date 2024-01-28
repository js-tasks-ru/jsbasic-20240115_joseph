function factorial(n) {
  let otvet = n;
  if ( (n == 0) || (n == 1) ) {
    return 1;
    } else {
        for (let i = 1; n - i != 1; i++) {
            otvet *= (n - i);
        } return otvet;
    }
}