<?php

/**15. Crea una función que capitalice la primera letra de una cadena solo
si la cadena tiene más de 15 caracteres */

function  capitaliza( $cadena){
    if(mb_strlen($cadena) > 15){
        $cadena = ucfirst($cadena); 
        echo $cadena; 
        return $cadena; 
    }
    echo "La cadena no cuenta con longitud suficiente" ;
    return; 
}