<?php

/**7. Recorrer un array asociativo índice => valor de tipo de nombre
$productos (fruta ->precio) y muestra el precio final de la lista de la
compra de un cliente que ha comprado, 2kg de manzanas, 1.5kg de platanos,
5kg de naranjas
 */
$productos = [
    "Manzana" => 5,
    "Plátano" => 3,
    "Naranja" => 4,
    "Kiwi" => 6
];

foreach ($productos as $producto => $precio) {
    echo $producto . " : " . $precio . "<br>";
}
