//Escribe una función que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha y de derecha a izquierda, ignorando los espacios y las mayúsculas/minúsculas.No está permitido usar expresiones regulares 

 function esPalindromo(cadena) {
      
        cadena = cadena.toLowerCase().trim();
        
        let cadenaInvertida = "";
        for (let i = cadena.length - 1; i >= 0; i--) {
          cadenaInvertida += cadena[i];
        }
        
        if (cadena === cadenaInvertida) {
          return true;
        } else {
          return false;
        }
      }
      let cadena = "  AeRea  ";
      let resultado= esPalindromo(cadena); 
      console.log(resultado);
