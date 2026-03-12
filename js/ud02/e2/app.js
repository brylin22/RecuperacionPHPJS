/**2-Realiza un programa que solicite números al usuario hasta que introduzca un 0. Y que
muestre los valores: máximo, mínimo, suma, media y total de números introducidos.
  */
let numeros = [];

let introducido;
while (introducido != 0) {
  introducido = Number(prompt("Intruduce un valor (0 para salir) "));
  // if (typeof introducido !== "number") {// ESTO NO ES CORRECTO AY QUE COMO SIEMPRE SERÁ NUMBER NO PUEDO
  //   alert(
  //     "No se ha introducido un número válido, el prodecimiento no almacenará nada. ",
  //   );
  //   continue;
  // }
  // si aún habíendo pasado a número es nun NaN ->
  if (isNaN(introducido)) {
    alert(
      "No se ha introducido un número válido, el prodecimiento no almacenará nada. ",
    );
    continue;
  }

  // alert(`Has introducido el númeoro:  ${introducido}`);
  if (introducido == 0) {
    alert("Se sale de la ejecución: ");
    break;
  }
  numeros.push(introducido);
  // alert("Sigue la ejecución: ");
}
// sacar el máximo
let max = numeros[0] ?? 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > max) {
    max = numeros[i];
  }
}
//otra forma
max = Math.max(...numeros); // se le pasa a la funcion max el array de núemros
// -- minimo
let minimo = Math.min(...numeros);
//o
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < minimo) {
    minimo = numeros[i];
  }
}
// Suma de todos
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
// media
let media = suma / numeros.length;

let introducidos = numeros.length;
alert(
  ` Estadísticas: Máximo: ${max} - Mínimo: ${minimo} - Suma: ${suma} - Media: ${media} - Introducidos: ${introducidos}`,
);
