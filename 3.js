//3.	Escribe una función que reciba una cadena de texto con varias palabras separadas por espacios y devuelva la cadena de texto con las palabras ordenadas alfabéticamente. 
 

function ordenarPalabras(cadena) {
    let palabras = cadena.split(" ");
    palabras.sort();
    return palabras.join(" ");
  }
  let cadena = "mi nombre es cristhian y soy fullStack ";
  let resultado = ordenarPalabras(cadena);

  console.log(resultado);
  