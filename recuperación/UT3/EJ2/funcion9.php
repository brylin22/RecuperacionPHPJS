<?php 

/**9. Crea una función que determine si una cadena comienza con una palabra
específica. La función debe ignorar mayúsculas/minúsculas.
 */

function comienzaPor($cadena, $palabra){
    $cadena = strtolower($cadena); 
    $palabra = strtolower($palabra); 

        if(strpos($cadena, $palabra) === 0){
             echo "La contiene la palabra. "; 
             return true; 
        }
        echo "La cadena no contiene la palabra"; 
        return false; 
}