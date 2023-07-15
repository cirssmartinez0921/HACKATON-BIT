//4.	Escribe una función que reciba una cadena de texto como parámetro y devuelva la cantidad de vocales que contiene. 

  function contarVocales(cadena) {
    let vocales = 0;
    
    for (let i = 0; i < cadena.length; i++) {
      let letra = cadena[i];
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vocales++;
      }
    }
    
    return vocales;
  }
  let cadena = "mi nombre es cristhian y soy fullStack";
  let resultado = contarVocales(cadena);
  console.log(resultado);