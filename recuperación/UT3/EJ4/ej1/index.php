<?php 
include 'Circulo.php'; 

$circulo = new Circulo(5); 
echo $circulo->getRadio();

echo "<br>"; 
 
$circulo->setRadio(10); 
echo $circulo->getRadio(); 

echo "<br>" ;

echo $circulo->calcularArea(); 

?>