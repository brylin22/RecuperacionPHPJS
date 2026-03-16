<?php 

include __DIR__ . '\Coche.php'; 

$coche = new Coche('ASD1001' , 80);

function imprimirCohe(Coche $coche){
    echo "<h2>Info del coche: ";
    echo "<br>"; 
    
    echo "Matricula: ". $coche->getMatricula(); 
    echo "<br>"; 
    echo "Velocidad: " . $coche->getVelocidad(); 
}

imprimirCohe($coche);
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->acelera(22); 
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->frena(52); 
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->acelera(22); 
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->frena(152);
echo "<br>";  
echo "Cambio de velocidad: ". $coche->acelera(202); 
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->frena(60); 
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->acelera(122); 
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->frena(-12); 
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->acelera(22); 
echo "<br>"; 
echo "Cambio de velocidad: ". $coche->frena(52); 


