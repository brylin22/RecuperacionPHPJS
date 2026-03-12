<?php

/**12. Crea una función que reciba una cadena y dos números: posición
inicial y longitud. La función debe devolver el fragmento
correspondiente.*/
function fragmento($cadena = "Cadena de prueba", $n1 = 0, $n2 = 1){
    $resultado = substr($cadena, $n1, $n2); 

    return $resultado; 
}