<?php

/**13. Crea una función que reemplace una palabra específica por otra
dentro de una cadena.
 */

function reemplazar($cadena, $palabraRemplazada, $palabra){
    $resultado = str_replace($palabraRemplazada, $palabra, $cadena); 
    echo $resultado;
    return $resultado;
}