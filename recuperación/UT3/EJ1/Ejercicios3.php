<?php

/**3. Generar un valor aleatorio entre 1 y 5 con RAND(). Luego
imprimir en texto el número, por ejemplo “tres”. Utiliza if, luego
switch y luego match.

 * 
 * 
 */

$valor = RAND(1, 5);
echo "<h3> Con Switch</h3>";
switch ($valor) {
    case (1):
        echo "Uno";
        break;
    case 2:
        echo "Dos";
        break;
    case (3):
        echo "Tres";
        break;
    case 4:
        echo "Cuatro";
        break;
    case 5:
        echo "Cinco";
        break;
}

echo "<h3> Con Match</h3>";
match ($valor) {
    1 => print "uno",
    2 => print "dos",
    3 => print "tres",
    4 => print "cuatro",
    5 => print "cinco",
    default => print "no"
};
