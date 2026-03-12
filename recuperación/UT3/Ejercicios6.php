<?php

/**6. Recorrer un array de números e imprimir el doble de cada uno */
$numero = [1, 9, 3,  2, 5, 6, 23];
echo count($numero);
$n = count($numero);
for ($i = 0; $i < $n; $i++) {
    echo "<br>" . ($numero[$i] * 22);
}
