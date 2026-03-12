<?php
/**14. Crea una función que reciba una cadena y devuelva su versión en
mayúsculas y minúsculas. */

function mm($cadena){
    $nueva = "Minulculas: " . 
    strtoupper($cadena) .
    "Minusculas: " .    
    strtolower($cadena); 
     echo $nueva; 
    return $nueva; 
}