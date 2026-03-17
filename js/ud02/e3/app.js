/**3-Crea una función reciba un número y que dibuje un rectángulo hueco de lado del tamaño del
número indicado. El valor devuelto será un array con cada una de las cadenas que forman el
rectángulo.
Añade el código auxiliar necesario para probar la aplicación.

 *
 *
 */
let numero = 10;
function pintar(numero) {
  let rectangulo = new Array();
  for (let i = 0; i < numero; i++) {
    rectangulo[i] = []; //Añado un sub array a cada elemento -> para que luego no de error
    for (let f = 0; f < numero; f++) {
      // rectangulo[i][f] = "X"; // Pinto
      //El cuadreado debe de estar hueco
      /**
       * Hallar loos indcies
       * En un cuadrado hueco solo se pintan los indeices:
       * i = 0 / i = 9 (i = numero) - Y f -> f = i (esquinas)
       *
       *
       *
       */
      if (i == 0 || i == numero - 1 || f == 0 || f == numero - 1) {
        rectangulo[i][f] = "X";
      }
    }
  }
  return rectangulo;
}

console.log(pintar(numero));
