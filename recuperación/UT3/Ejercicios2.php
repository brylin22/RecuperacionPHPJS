<?php
// 2. Realiza un programa que muestre los días del 1 a la fecha
//actual, utilizando date();


$fecha = date("d");
echo "Dia de la semana: " . $fecha;
echo "<br> Comprobación";

echo "<br> Dias restantes: ";
for ($i = 1; $i <= $fecha; $i++) {

    echo  " " . $i;
}
