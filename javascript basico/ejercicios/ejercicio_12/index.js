function fibonacci(numero) {
  let arreglo = [];
  if (numero == 0) {
    arreglo.push(numero);
    return arreglo;
  }
  if (numero == 1) {
    arreglo.push(numero);
    return arreglo;
  }
  if (numero == 2) {
    arreglo.push(1);
    arreglo.push(1);
    return arreglo;
  }
  for (let i = 1; i < numero - 1; i++) {
    if (arreglo.length == 0) {
      arreglo.push(i);
      arreglo.push(i);
    }
    arreglo.push(arreglo[i - 1] + arreglo[i]);
  }
  return arreglo;
}

console.log(fibonacci(7));
