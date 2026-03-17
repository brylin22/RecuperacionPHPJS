/**5- Crea una función reciba un número y que dibuje un rombo de diagonal del tamaño del
número indicado. El valor devuelto será un array con cada una de las cadenas que forman el
rombo.
Añade el código auxiliar necesario para probar la aplicación */

function rombo(numero) {
  //se crea la figura
  let figura = [];
  //saco el nuermo medio - 1
  let mitad = Math.floor(numero / 2);

  for (let i = 0; i < numero; i++) {
    //la línea en esta vuelta
    let linea = "";
    // Le restamos los espacios según i. Cuando
    //se vuelven negativos los seguimos contando
    //para contar el rombo por la parte inversa
    let distancia = Math.abs(mitad - i);
    // sacamos la cantidad de estrellas necesarias
    //con el número de ancho y la distancia * 2 (espacios
    // por los dos lados .
    let estrellas = numero - distancia * 2;

    for (let e = 0; e < distancia; e++) {
      linea += " ";
    }

    for (let s = 0; s < estrellas; s++) {
      linea += "*";
    }

    for (let e = 0; e < distancia; e++) {
      linea += " ";
    }

    figura.push(linea);
  }

  return figura;
}
let opcion = -1;
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

while ((opcion = !0)) {
  opcion = parseInt(
    prompt(`Introduce 
    la figura a pintar: 1 - Cuadrado / 2 - Triangulo / 3 - Rombo`),
  );
  switch (opcion) {
    case 1: {
      let numero = parseInt(
        prompt(`Introduce el numero
         de altura para el triángulo`),
      );
      let triangulo = pintar(numero);
      break;
    }
    default:
      alert("Bobo");
  }
}
