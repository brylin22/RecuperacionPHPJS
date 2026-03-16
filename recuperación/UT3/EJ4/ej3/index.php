<?php 

include __DIR__ . '\Monedero.php'; 

$monedero = new Monedero(100); 

function imprimirMonedero(Monedero $monedero){
    echo "<h2> Imprimir monedero Nro:  " . Monedero::$numero_monederos; 

    echo "<br> Dinero Disponible: " . $monedero->getDinero(); 

    echo "<br> Aumentar dinero del monedero: " . $monedero->meter(123);
    echo "<br> Aumentar dinero del monedero: " . $monedero->meter(1234);
    echo "<br> Aumentar dinero del monedero: " . $monedero->meter(0);
    echo "<br> Aumentar dinero del monedero: " . $monedero->meter(-123);


    echo "<br> Sacar dinero del monedero: " . $monedero->sacar(123);
    echo "<br> Sacar dinero del monedero: " . $monedero->sacar(-123);

}
imprimirMonedero($monedero); 


unset($monedero); 
echo "<br> Destruyo este monedero"; 
echo "Numero de monederos: "  . Monedero::$numero_monederos ;