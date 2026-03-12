<?php

// 1. CONFIGURACIÓN INICIAL - 0,25pts
date_default_timezone_set('Europe/Madrid');
// setlocale(LC_TIME, 'spanish');
// setlocale(LC_TIME, 'es-ES');
// setlocale(LC_TIME, 'Spanish_Spain');
// setlocale(LC_TIME, 'Spanish');
setlocale(LC_ALL, 'es_ES.UTF-8', 'spanish');
// echo strftime("%A %d %B %Y");

// 2. DEFINICIÓN DE FECHAS - '.25pts
$fechaEvento = "2025-11-26";
$fechaFinOferta = "2025-11-10";
$fechaActual = "2025-11-15";
// Existe y se cambiar por la / fecha activa / fecha expirada / evento pasado
//Las fechas se usan como DateTime o timestamps para cálculos



// --- CAMBIA ESTA FECHA PARA PROBAR LOS DIFERENTES CASOS ---
// ---------- 3 ----------------------
// Prueba también con: "2025-10-30" y "2025-12-01"


// 3. CONVERSIÓN A TIMESTAMPS
$timestampsEvento = strtotime($fechaEvento);
$timestampsFechaFinOferta = strtotime($fechaFinOferta);
$timestampsFechaActual = strtotime($fechaActual);

$evento =  new DateTime($fechaEvento);
$oferta = new DateTime($fechaFinOferta);
$actual = new DateTime($fechaActual);


// 4. MOSTRAR INFORMACIÓN DEL EVENTO (igual que antes)
//Mostrar la fecha del evento en formato largo -> semana, dia, mes año
// echo "El evento se celebrará el " . strftime("%A %d", $timestampfechaEvento->getTimestamp()); 

echo "El evneto se celebreara el ";
echo date("l, d F Y", $timestampsEvento);
echo "<br>";
echo "El (formato español) aevneto se celebreara el ";
echo strftime("%A %d de %B de %Y", $timestampsEvento);

echo "<br>";
echo "Fecha final de la oferta: ";
echo strftime("%A %d de %B de %Y", $timestampsFechaFinOferta);



// 5. LÓGICA DE COMPARACIÓN Y CONSTRUCCIÓN DEL MENSAJE CON TERNARIOS

// Calculamos los días restantes fuera del ternario para mantenerlo más legible.
// Este cálculo solo se usará si la primera condición es verdadera.
$diasOferta = $actual->diff($oferta)->days;
echo $diasOferta;
$diasEvento  = $actual->diff($evento)->days;


// Se anidan los ternarios para replicar la lógica if-elseif-else.
// El resultado de toda la expresión se asigna a la variable $mensajeEstado.

$mensaje = $diasOferta >= 0 ? "¡Aún estás a tiempo! La oferta de compra anticipada está activa.  Quedan " . $diasOferta . " para que finalice. " : (
  $diasEvento >= 0 ? "La oferta la ya finalizado, pero todavía puedes acceder al evento. " : "El evento la ha finalizado. ");
// ? (Si es verdadero)


// 6. IMPRIMIR EL RESULTADO FINAL
echo "<br>";
echo $mensaje;
