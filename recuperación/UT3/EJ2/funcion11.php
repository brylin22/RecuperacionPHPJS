<?php 
/**11. Crea una función que compare dos cadenas y determine si son
exactamente iguales, considerando mayúsculas y minúsculas.  */
function iguales($cadena, $cadena2){
    $resultado =     strcmp($cadena, $cadena2); 
    if($resultado === 0){
        echo "Las cadenas son iguales. \n"; 
        return $cadena; 
    }
    echo "Las cadenas no son iguales."; 
    return; 
}