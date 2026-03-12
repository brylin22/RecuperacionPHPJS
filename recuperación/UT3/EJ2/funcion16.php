<?php

function info($cadena){
    $logitud = mb_strlen($cadena); 
    $mayus = strtoupper($cadena); 
    echo "Logitud de la cadena: " . $logitud; 
    echo "Versión en mayuscula: ". $mayus; 
    return [$logitud, $mayus]; 
}