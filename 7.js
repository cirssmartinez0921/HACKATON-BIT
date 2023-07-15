//7.	En js Escribe una función que reciba una cadena de texto como parámetro y devuelva la palabra más larga encontrada en la cadena.

function palabraMasLarga(cadena) {
    let palabras = cadena.split(" ");
    let palabraMasLarga = "";
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
      }
    }
    return palabraMasLarga;
  }
  
let cadena = "nombre es cristhian y soy fullStack";
let resultado = palabraMasLarga(cadena);

console.log(resultado);