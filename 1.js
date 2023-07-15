//1.	Escribe una función que reciba una cadena de texto como parámetro y verifique si cumple con los siguientes criterios: debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula y un número. No está permitido usar expresiones regulares 


function verificarCadena(cadena) {
  if (cadena.length < 8) {
    return false;
  }
  
  let tieneMayuscula = false;
  let tieneMinuscula = false;
  let tieneNumero = false;
  
  for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena.charAt(i);
    
    if (caracter >= 'A' && caracter <= 'Z') {
      tieneMayuscula = true;
    } else if (caracter >= 'a' && caracter <= 'z') {
      tieneMinuscula = true;
    } else if (caracter >= '0' && caracter <= '9') {
      tieneNumero = true;
    }
  }
  
  return tieneMayuscula && tieneMinuscula && tieneNumero;
}

let cadena =  "Cristhian8";
let resultado = verificarCadena (cadena);
console.log( resultado)