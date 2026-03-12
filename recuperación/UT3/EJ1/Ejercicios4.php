<?php

/**4. Utilizando switch declara una variable $posicion y asígnale un
valor entre “dentro” o “fuera”. Genera los casos del switch para
evaluar la variable, incluido el default, e indica por pantalla
en cada uno de ellos el valor de la variable.

 * 
 * 
 *    
 */

$posicion = "fuerda";

switch ($posicion) {
    case ("dentro"):
        echo "La posición es dentro";
        break;
        $posicion = "fuerda";

        switch ($posicion) {
            case ("dentro"):
                echo "La posición es dentro";
                break;
            case ("fuera"):
                echo "La posición es fuera";
                break;
            default:
                echo "La posicón no es correcta";
        }

    case ("fuera"):
        echo "La posición es fuera";
        break;
    default:
        echo "La posicón no es correcta";
}
