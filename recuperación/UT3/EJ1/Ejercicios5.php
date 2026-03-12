<?php

/** 5. Realiza el ejercicio anterior pero con match como expresión*/
$posicion = "fuerda";

match ($posicion) {
    "dentro" => print "La posición es dentro",
    "fuera" => print "La posición es fuera",
    default => print "La posicón no es correcta"
};
