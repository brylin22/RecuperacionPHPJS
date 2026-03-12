
<?php


// 1. Mostrar la tabla de multiplicar del 2 con for, luego while y
//por último do/while.
echo "<br> <h1> For</h1>";
for ($i = 0; $i < 11; $i++) {
    echo '<p>2 x ' . $i . " : " . (2 * $i) . "</p><br>";
}

echo "<br> <h1>While</h1>";

$i = 0;
while ($i < 11) {
    echo '<p>2 x ' . $i . " : " . (2 * $i) . "</p><br>";
    $i++;
}
echo "<br> <h1> Do While</h1>";
$i = 0;
do {
    # code...

    echo '<p>2 x ' . $i . " : " . (2 * $i) . "</p><br>";
    $i++;
} while ($i < 11);


?>