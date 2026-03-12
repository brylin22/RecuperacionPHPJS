<?php

// 1. CONFIGURACIÓN INICIAL
date_default_timezone_set('Europe/Madrid');
setlocale(LC_ALL, 'es_ES.UTF-8', 'spanish');

// 2. DEFINICIÓN DE FECHAS
$fechaEvento = "2025-11-26";
$fechaFinOferta = "2025-11-10";

// --- CAMBIA ESTA FECHA PARA PROBAR LOS DIFERENTES CASOS ---
$fechaActual = "2025-11-15";
// Prueba también con: "2025-10-30" y "2025-12-01"

echo "<h1>Estado de la Inscripción para el Evento DWES </h1>";
echo "<p><em>Simulando que hoy es: $fechaActual</em></p>";
echo "<hr>";

// 3. CONVERSIÓN A TIMESTAMPS
$timestampEvento = strtotime($fechaEvento);
$timestampFinOferta = strtotime($fechaFinOferta);
$timestampActual = strtotime($fechaActual);

// 4. MOSTRAR INFORMACIÓN DEL EVENTO (igual que antes)
echo "<p><b>Fecha del evento:</b> " . date("l, d \of F \of Y", $timestampEvento) . "</p>";
echo "<p><b>Fin de la oferta:</b> " . date("Y-m-d", $timestampFinOferta) . "</p>";
echo "<hr>";

// 5. LÓGICA DE COMPARACIÓN Y CONSTRUCCIÓN DEL MENSAJE CON TERNARIOS
echo "<h3>Estado Actual:</h3>";

// Calculamos los días restantes fuera del ternario para mantenerlo más legible.
// Este cálculo solo se usará si la primera condición es verdadera.
$diasRestantes = floor(($timestampFinOferta - $timestampActual) / 86400);

// Se anidan los ternarios para replicar la lógica if-elseif-else.
// El resultado de toda la expresión se asigna a la variable $mensajeEstado.
$mensajeEstado = ($timestampActual <= $timestampFinOferta)
  // ? (Si es verdadero)
  ? "<p style='color:green;'>¡Aún estás a tiempo! La oferta de compra anticipada está activa.</p>" .
  "<p>Quedan <strong>" . $diasRestantes . " días</strong> para que finalice.</p>"
  // : (Si es falso, se evalúa el siguiente ternario)
  : (($timestampActual <= $timestampEvento)
    // ? (Si el segundo es verdadero)
    ? "<p style='color:orange;'>La oferta de compra anticipada ha expirado.</p>" .
    "<p>Aún puedes comprar tu entrada a precio normal.</p>"
    // : (Si el segundo también es falso)
    : "<p style='color:red;'>Lo sentimos, este evento ya ha finalizado.</p>"
  );

// 6. IMPRIMIR EL RESULTADO FINAL
echo $mensajeEstado;
