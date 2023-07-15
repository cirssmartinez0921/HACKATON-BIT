//9.	Escribe una función que reciba dos cadenas de texto como parámetros y determine si son anagramas. Dos palabras son anagramas si tienen las mismas letras, pero en diferente orden.
function anagrama(cadena1, cadena2) {
    
    cadena1 = cadena1.split('').sort().join('');
    cadena2 = cadena2.split('').sort().join('');
  
    if (cadena1.length !== cadena2.length) {
      return false;
    }
  

    return cadena1 === cadena2;
  }
  
console.log(anagrama ("españa","apañes"));