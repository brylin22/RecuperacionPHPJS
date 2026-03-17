/**4- Crea una función reciba un número y que dibuje un triángulo de altura el tamaño del
número indicado. El valor devuelto será un array con cada una de las cadenas que forman el
rectángulo.
Añade el código auxiliar necesario para probar la aplicación.

 *
 *
 */

function pintar(numero) {
  let triángulo = [];

  for (let i = 0; i < numero; i++) {
    triángulo[i] = [" "];
    //espacios
    for (let f = 0; f < numero - i - 1; f++) {
      triángulo[i][f] = " ";
    }
    //ast
    for (let f = 0; f < i + 1; f++) {
      triángulo[i][f] = "*";
    }
  }
  return triángulo;
}

console.log(pintar(10));
