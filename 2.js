//2.	Escribe una función que reciba un array de números ordenados de forma ascendente y devuelva el o los números faltantes en la secuencia.
function encontrarNumerosFaltantes(arr) {
    let numerosFaltantes = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      let numActual = arr[i];
      let numSiguiente = arr[i + 1];
  
      let diferencia = numSiguiente - numActual;
  
      if (diferencia > 1) {
        for (let j = 1; j < diferencia; j++) {
          numerosFaltantes.push(numActual + j);
        }
      }
    }
  
    return numerosFaltantes;
  }

  let arr = [1,2,4,6,7,9,10];
  let resultado = encontrarNumerosFaltantes(arr);

  console.log(resultado);
  