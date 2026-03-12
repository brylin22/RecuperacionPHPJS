<?php
/**10. Crea una función que reciba una cadena larga y una palabra, y
devuelva la posición de la última aparición de esa palabra. */

function ultima( $cadena, $palabra){
    echo "\n Ejercicio 10: ";
    $cadena = strtolower($cadena); 
    $palabra = strtolower($palabra) ?? null; 
    //strpos -> buscar la primera ( izquierda derecha )
    //strrpos ->busca la ultima (derecha izquierda)
    $posicion = strrpos($cadena, $palabra);
    if(isset($posicion) && is_integer($posicion)){
        echo "La última vez que aparacio la cadena fue: " . $posicion; 
        return $posicion; 
    }
    echo "La posición es incierta o nula"; 
    return ; 
}