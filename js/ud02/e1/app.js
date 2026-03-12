/**1-Crea un programa en el que crees 4 variables: 2 cadenas y 2 números, con los siguientes
valores: tu nombre, tu apellido, tu edad y tu año de nacimiento.
• Muestra en un alert las variables introducidas con formato clave valor en donde los
valores cadena aparezcan envueltos entre comillas dobles y los valores numéricos
entre comillas simples.
• Muestra en un alert tu nombre y apellidos separados por un salto de línea.
• Muestra en un alert la suma de las variables edad y año de nacimiento.
• Muestra en un alert la suma de todas las variables.  */

let nombre = "Brylin";
let apellido = "Chavez";
let n1 = 19;
let n2 = 2006;

alert(
  `Nombre: ${nombre} , Apellido: " ${apellido}" , Edad: '${n1}' , Fecha de nacimiento: '${n2}' ,`,
);
alert(`${nombre}\n${apellido}`);

alert(n1 + n2);
alert(nombre + apellido + n1 + n2);
