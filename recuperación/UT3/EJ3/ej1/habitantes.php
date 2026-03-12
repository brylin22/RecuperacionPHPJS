<?php

$datos = [

    ["Andalucia", 234],
    ["Aragon", 234],
    ["Cantabria", 2443],
    ["Andalucia", 234],
    ["Aragon", 234],
    ["Cantabria", 2443],
    ["Andalucia", 234],
    ["Aragon", 234],
    ["Cantabria", 2443],
    ["Andalucia", 234],
    ["Aragon", 234],
    ["Cantabria", 2443],
    ["Andalucia", 234],
    ["Aragon", 234],
    ["Cantabria", 2443],
    ["Andalucia", 234],
    ["Aragon", 234],
    ["Cantabria", 2443],
    ["Andalucia", 234],
    ["Aragon", 234],
    ["Cantabria", 2443],
];
$conversion  = [

    [ ["EEUU"]["Dollar"][1.1712] ],
     [  ["UK"]["Libra esterlina"][0.8]],
    [   ["Japón"]["Yenes"][173]],
     [  ["China"]["Yuanes"][8.234]],
      [ ["Argentina"]["Pesos Argentinos"][1123.12]],
      [ ["Australia"]["Dollar AUS"][1.1712]],
];
$cmax = -1; 
for($i = 0; i<count($conversion); $i++ ){
    if($conversión[i][3])
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Mostrando datos. </h1>
    <table style="border: 1px solid #000;">
        <thead>
            <tr>
            <th>Comunidad</th>
            <th>N alumnos</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($datos as $dato):
               
            ?>
            <tr>
                <td><?= $dato[0] ?></td>
                <td><?= $dato[1] ?></td>
                <td><?= 100*$dato[1] /1000 ?>%</td>
            </tr>
            

            <?php 
            endforeach; ?>



        </tbody>


    </table>

    <h1>Ejercicio 2 . Conversion de monedasw</h1>
    <table>
        <thead>
            <tr>
                <th>Pais</th>
                <th>Moneda</th>
                <th>Cambio</th>
                <th>Media</th>
                <th>Bajo</th>
                <th>Alto</th>
       
            </tr>
        </thead>
        <tbody>
            <?php foreach($conversion as $con):     ?>
                <tr>
                    <td><?= htmlspecialchars($con[0]) ?></td>
                    <td><?= htmlspecialchars($con[1]) ?></td>
                    <td><?= htmlspecialchars($con[2]) ?></td>
                    <td><?= htmlspecialchars($con[0]) ?></td>
                    <td><?= htmlspecialchars($con[0]) ?></td>
                    <td><?= htmlspecialchars($con[0]) ?></td>
                </tr>
        </tbody>
    </table>

</body>

</html>