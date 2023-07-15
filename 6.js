//6.	Escribe una función que reciba un número como parámetro y devuelva el factorial de ese número. El factorial de un número se obtiene multiplicando todos los números enteros desde 1 hasta el número dado. No se pueden usar operaciones del lenguaje que realicen esta tarea directamente. 


function factorial(numero) {
    if ( numero === 1) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }
  console.log(factorial(7));